import { chromium, devices } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const base = process.env.AUDIT_BASE_URL ?? 'http://localhost:4321';
const output = path.resolve(process.env.AUDIT_OUTPUT_DIR ?? 'scratch/screenshots');
const routes = process.env.AUDIT_ROUTES?.split(',') ?? ['/', '/belajar/', '/belajar/kenalan-python/', '/belajar/install-python-editor/', '/belajar/komentar-dan-error/', '/latihan/', '/cheatsheet/', '/playground/', '/tentang/', '/not-found-audit/'];
const viewports = [[360,800],[390,844],[430,932],[768,1024],[1280,800],[1440,900]];
const failures = [];
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true });

function contrast(a, b) {
  const rgb = s => (s.match(/[\d.]+/g) ?? []).slice(0,3).map(Number).map(v => { v/=255; return v<=.04045?v/12.92:((v+.055)/1.055)**2.4; });
  const x=rgb(a), y=rgb(b); if(x.length<3||y.length<3)return 21;
  const lum=c=>.2126*c[0]+.7152*c[1]+.0722*c[2]; const [l1,l2]=[lum(x),lum(y)].sort((m,n)=>n-m); return (l1+.05)/(l2+.05);
}
async function audit(name, route, viewport, theme, device={}) {
  if (Array.isArray(viewport)) viewport={width:viewport[0],height:viewport[1]};
  const page=await browser.newPage({...device, viewport, colorScheme:theme});
  const errors=[]; page.on('pageerror',e=>errors.push(`pageerror: ${e.message}`)); page.on('console',m=>{if(m.type()==='error'&&!(route==='/not-found-audit/'&&m.text().includes('Failed to load resource')))errors.push(`console: ${m.text()}`)});
  await page.goto(`${base}${route}`,{waitUntil:'domcontentloaded'}).catch(e=>errors.push(`navigation: ${e.message}`));
  await page.evaluate(t=>{localStorage.setItem('pypink-theme',t);document.documentElement.dataset.theme=t;},theme);
  await page.evaluate(async()=>{for(let y=0;y<document.documentElement.scrollHeight;y+=Math.max(300,innerHeight*.75)){scrollTo(0,y);await new Promise(resolve=>setTimeout(resolve,55))}scrollTo(0,0);await new Promise(resolve=>setTimeout(resolve,180))}).catch(error=>errors.push(`reveal scroll: ${error.message}`));
  await page.waitForTimeout(120);
  const result=await page.evaluate(()=>{
    const contrast=(a,b)=>{const rgb=s=>{const mix=s.match(/color\(srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)/);const values=mix?mix.slice(1,4).map(v=>Number(v)*255):(s.match(/[\d.]+/g)||[]).slice(0,3).map(Number);return values.map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4})};const x=rgb(a),y=rgb(b);if(x.length<3||y.length<3)return 21;const l=c=>.2126*c[0]+.7152*c[1]+.0722*c[2];return(Math.max(l(x),l(y))+.05)/(Math.min(l(x),l(y))+.05)};
    const bgOf=el=>{for(let n=el;n&&n!==document.documentElement;n=n.parentElement){const c=getComputedStyle(n).backgroundColor;if(c&&c!=='rgba(0, 0, 0, 0)'&&c!=='transparent')return c}return getComputedStyle(document.body).backgroundColor};
    const mobile=innerWidth<=767, small=[...document.querySelectorAll('a,button,input,select,textarea,[role="button"],[tabindex]:not([tabindex="-1"])')].filter(e=>{const r=e.getBoundingClientRect(),s=getComputedStyle(e);return r.width&&r.height&&s.visibility!=='hidden'&&s.display!=='none'&&r.bottom>0&&r.top<innerHeight&&(r.width<44||r.height<44)}).map(e=>`${e.tagName}.${e.className} ${Math.round(e.getBoundingClientRect().width)}x${Math.round(e.getBoundingClientRect().height)}`);
    const low=[...document.querySelectorAll('body *')].filter(e=>e.children.length===0&&e.textContent.trim()&&!e.closest('[aria-hidden="true"]')).map(e=>({e,r:contrast(getComputedStyle(e).color,bgOf(e))})).filter(x=>x.r<4.5).slice(0,12).map(x=>`${x.r.toFixed(2)} ${x.e.tagName}.${x.e.className}`);
    return {width:document.documentElement.scrollWidth,innerWidth,mobile,small,low,appError:document.body.innerText.includes('Unhandled rejection')};
  }).catch(error=>{errors.push(`audit evaluation: ${error.message}`);return{width:0,innerWidth:0,mobile:false,small:[],low:[],appError:false}});
  const tag=`${name}-${theme}-${viewport.width}x${viewport.height}`;
  await page.screenshot({path:path.join(output,`${tag}.png`),fullPage:true}).catch(e=>errors.push(`screenshot: ${e.message}`));
  if(result.width>result.innerWidth)failures.push(`${tag} horizontal scroll ${result.width}>${result.innerWidth}`);
  if(result.mobile&&result.small.length)failures.push(`${tag} small targets: ${result.small.slice(0,8).join('; ')}`);
  if(result.low.length)failures.push(`${tag} contrast <4.5: ${result.low.join('; ')}`);
  if(result.appError)errors.push('Astro development overlay shows unhandled rejection');
  if(errors.length)failures.push(`${tag} console/errors: ${errors.join('; ')}`);
  console.log(`${tag}: width ${result.width}/${result.innerWidth}; small=${result.mobile?result.small.length:'n/a'}; lowContrast=${result.low.length}; errors=${errors.length}`);
  await page.close();
}
for(const route of routes) for(const theme of ['light','dark']) for(const size of viewports) await audit(route.replaceAll('/','_')||'home',route,size,theme);
for(const [name,device] of [['iphone14',devices['iPhone 14']],['pixel7',devices['Pixel 7']]]) for(const theme of ['light','dark']) await audit(name,'/',device.viewport,theme,device);
await browser.close();
console.log(`\nAUDIT ${failures.length?'FAILED':'PASSED'} (${failures.length} failures)`);
for(const failure of failures) console.log(`FAIL ${failure}`);
if(failures.length) process.exitCode=1;
