const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

const setupCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.strokeStyle = '#BADAAA';
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 100;
};

const changeLineWidth = () => {
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
};

const changeLineColor = () => {
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
};

const draw = (e) => {
  if (!isDrawing) return;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];

  changeLineColor();
  changeLineWidth();
};

const handleMouseDown = (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
};

const handleMouseUp = (e) => {
  isDrawing = false;
};

const handleMouseOut = (e) => {
  isDrawing = false;
};

setupCanvas();

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', handleMouseDown);
canvas.addEventListener('mouseup', handleMouseUp);
canvas.addEventListener('mouseout', handleMouseOut);
