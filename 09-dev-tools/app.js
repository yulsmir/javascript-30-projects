const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADAAA';
  p.style.fontSize = '2.5rem';
}

// Regular
console.log('hello');

// Interpolated
const variable = 42;
console.log(`Here is some variable ${variable}`);

// Styled
console.log('%c Some text', 'font-size: 3rem');

// warning!
console.warn('Yaaay');

// Error :|
console.error('Error');

// Info
console.info('Some info here');

// Testing
const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
// console.clear();

// Viewing DOM Elements
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);

  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years`);

  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Some');
console.count('Some');
console.count('Other');
console.count('Other');
console.count('Other');
console.count('Some');
console.count('Some');
console.count('Other');
console.count('Other');

// timing
console.time('fetching data');

const data = fetch('https://api.github.com/users/wesbos')
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd('fetching data');
    console.log(data);
  });
