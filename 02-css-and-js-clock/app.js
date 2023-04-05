const secondsDigital = document.querySelector('.seconds');
const minutesDigital = document.querySelector('.minutes');
const hoursDigital = document.querySelector('.hours');

const updateTime = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  secondsDigital.style.setProperty('--seconds', seconds);
  minutesDigital.style.setProperty('--minutes', minutes);
  hoursDigital.style.setProperty('--hours', hours);

  hoursDigital.textContent = `${addZeroBeforeNumber(hours)}:`;
  minutesDigital.textContent = `${addZeroBeforeNumber(minutes)}:`;
  secondsDigital.textContent = `${addZeroBeforeNumber(seconds)}`;
};

const addZeroBeforeNumber = (number) => {
  return number < 10 ? '0' + number : number;
};

setInterval(updateTime, 1000);
