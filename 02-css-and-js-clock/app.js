const secondsDigital = document.querySelector('.seconds');
const minutesDigital = document.querySelector('.minutes');
const hoursDigital = document.querySelector('.hours');

const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const updateTime = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  hoursDigital.textContent = `${addZeroBeforeNumber(hours)}:`;
  minutesDigital.textContent = `${addZeroBeforeNumber(minutes)}:`;
  secondsDigital.textContent = `${addZeroBeforeNumber(seconds)}`;

  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minsDegrees = (minutes / 60) * 360 + 90;
  const hoursDegrees = (hours / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  console.log(secondsDegrees);
};

const addZeroBeforeNumber = (number) => {
  return number < 10 ? String(number).padStart(2, '0') : number;
};

setInterval(updateTime, 1000);
