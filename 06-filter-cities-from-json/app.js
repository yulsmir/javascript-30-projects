const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

// fetch(endpoint, function (data) {
//   console.log(msg);
// });

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => cities.push(...data));

const findMatches = (wordToMatch, cities) => {
  return cities.filter((location) => {
    const regex = new RegExp(wordToMatch, 'gi');
    return location.city.match(regex) || location.state.match(regex);
  });
};

const numberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const displayMatches = (e) => {
  const matchArray = findMatches(e.target.value, cities);
  const regex = new RegExp(e.target.value, 'gi');
  const html = matchArray.map((location) => generateHtml(location, regex)).join('');
  suggestions.innerHTML = html;
};

const generateHtml = (location, regex) => {
  const cityName = location.city.replace(
    regex,
    `<span class="highlighted">${e.target.value}</span>`,
  );
  const stateName = location.state.replace(
    regex,
    `<span class="highlighted">${e.target.value}</span>`,
  );
  const population = numberWithCommas(location.population);
  return `
    <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${population}</span>
    </li>
  `;
};

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
