const panels = document.querySelectorAll('.panel');

const toggleOpen = (e) => {
  e.target.classList.toggle('open');
};

const toggleActive = (e) => {
  if (e.propertyName.includes('flex')) {
    e.target.classList.toggle('open-active');
  }
};

panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
panels.forEach((panel) => panel.addEventListener('transitionend', toggleActive));
