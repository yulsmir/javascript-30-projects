const secondsDigital = document.querySelector('.seconds');
const minutesDigital = document.querySelector('.minutes');
const hoursDigital = document.querySelector('.hours');

const updateTime = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  hoursDigital.textContent = `${addZeroBeforeNumber(hours)}:`;
  minutesDigital.textContent = `${addZeroBeforeNumber(minutes)}:`;
  secondsDigital.textContent = `${addZeroBeforeNumber(seconds)}`;
};

const addZeroBeforeNumber = (number) => {
  return number < 10 ? String(number).padStart(2, '0') : number;
};

setInterval(updateTime, 1000);
