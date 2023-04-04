const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const secondsDigital = document.querySelector('.seconds');
const minutesDigital = document.querySelector('.minutes');
const hoursDigital = document.querySelector('.hours');

const currentDate = document.querySelector('.current-date');

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const date = now.getDate();

  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minsDegrees = (minutes / 60) * 360 + 90;
  const hoursDegrees = (hours / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  hoursDigital.textContent = `${hours}:`;
  minutesDigital.textContent = `${minutes}:`;
  secondsDigital.textContent = seconds;

  console.log(seconds);
};

setInterval(setDate, 1000);
