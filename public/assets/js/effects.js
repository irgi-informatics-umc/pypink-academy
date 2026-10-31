const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduceMotion&&'IntersectionObserver'in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}
  }),{threshold:.12});
  document.querySelectorAll('.feature-card,.level-card,.stat').forEach(element=>{
    element.classList.add('reveal');observer.observe(element);
  });
}
