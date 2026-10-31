import fs from 'fs';
import path from 'path';
import { lessonsL1L2 } from './curriculum_l1_l2.js';
import { lessonsL3L4 } from './curriculum_l3_l4.js';
import { lessonsL5L6 } from './curriculum_l5_l6.js';
import { lessonsL7 } from './curriculum_l7.js';

const allLessons = [
  ...lessonsL1L2,
  ...lessonsL3L4,
  ...lessonsL5L6,
  ...lessonsL7
];

console.log(`Total merged lessons: ${allLessons.length}`);

// Validate that every lesson has all required fields
for (const lesson of allLessons) {
  const required = [
    'slug', 'title', 'level', 'levelName', 'duration', 'difficulty',
    'description', 'icon', 'pipiTip', 'funFact', 'analogy', 'concept',
    'codeExample', 'trap', 'practice', 'quizzes', 'takeaways'
  ];
  for (const field of required) {
    if (!lesson[field]) {
      console.error(`Lesson ${lesson.slug} is missing field: ${field}`);
      process.exit(1);
    }
  }
  if (!lesson.quizzes || lesson.quizzes.length < 3) {
    console.error(`Lesson ${lesson.slug} has fewer than 3 quizzes!`);
    process.exit(1);
  }
}

// Write to src/data/lessons.json
const lessonsPath = path.resolve('src/data/lessons.json');
fs.writeFileSync(lessonsPath, JSON.stringify(allLessons, null, 2), 'utf-8');
console.log(`Successfully written to ${lessonsPath}`);

// Also build an expansive quizzes.json for /latihan/
// Pull 3 quizzes from each level to form 21 level-specific quizzes
const allQuizzes = [];
for (let lvl = 1; lvl <= 7; lvl++) {
  const levelLessons = allLessons.filter(l => l.level === lvl);
  let count = 0;
  for (const les of levelLessons) {
    for (const q of les.quizzes) {
      allQuizzes.push({
        level: lvl,
        question: q.question,
        options: q.options,
        answer: q.answer,
        explanation: q.explanation
      });
      count++;
      if (count >= 3) break;
    }
    if (count >= 3) break;
  }
}

const quizzesPath = path.resolve('src/data/quizzes.json');
fs.writeFileSync(quizzesPath, JSON.stringify(allQuizzes, null, 2), 'utf-8');
console.log(`Successfully written ${allQuizzes.length} quizzes to ${quizzesPath}`);

