'use strict';

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const age = 19;
const currentYear = new Date().getFullYear();
const yearOfBirth = currentYear - age;
const isAnyNineteenOrOlder = (element) => element.year <= yearOfBirth;

const checkAnyAge = people.some(isAnyNineteenOrOlder);
console.log(checkAnyAge);
// Array.prototype.every() // is everyone 19 or older?

const checkEveryAge = people.every(isAnyNineteenOrOlder);
console.log(checkEveryAge);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const commentId = 823423;
const foundId = comments.find((comment) => comment.id === commentId);

console.log('find the comment with the ID of 823423');
console.log(foundId);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const foundCommentIndex = comments.findIndex((comment) => comment.id === commentId);
const commentsWithoutFoundComment = comments.filter((comment) => comment.id !== commentId);

console.log(commentsWithoutFoundComment);
