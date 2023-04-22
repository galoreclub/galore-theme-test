// DOM elements
const button1 = document.getElementById('button-1');
const button1txt = document.getElementById('button-1').firstElementChild;
const button2 = document.getElementById('button-2');
const button2txt = document.getElementById('button-2').firstElementChild;
const button3 = document.getElementById('button-3');
const button3txt = document.getElementById('button-3').firstElementChild;

const buttons = [
  button1,
  button1txt,
  button2,
  button2txt,
  button3,
  button3txt
]

const frame1 = document.getElementById('frame-1');
const frame2 = document.getElementById('frame-2');
const frame3 = document.getElementById('frame-3');

const frames = [frame1, frame2, frame3];

const scrollbox = document.querySelector('.scroll-box');

// listeners
button1.addEventListener('click', selectFrame1)
button2.addEventListener('click', selectFrame2)
button3.addEventListener('click', selectFrame3)

// functions
function selectFrame1(e) {
  resetButtons();
  resetFrames();
  e.preventDefault();
  e.stopPropagation();
  button1.classList.add('selected');
  button1txt.classList.add('selected');
  frame1.classList.remove('hidden');
}

function selectFrame2(e) {
  resetButtons();
  resetFrames();
  e.preventDefault();
  e.stopPropagation();
  button2.classList.add('selected');
  button2txt.classList.add('selected');
  scrollbox.classList.remove('hidden');
  frame2.classList.remove('hidden');
}

function selectFrame3(e) {
  resetButtons();
  resetFrames();
  e.preventDefault();
  e.stopPropagation();
  button3.classList.add('selected');
  button3txt.classList.add('selected');
  frame3.classList.remove('hidden');
}

function resetButtons() {
  buttons.forEach((element) => {
    element.classList.remove('selected');
  })
  scrollbox.classList.add('hidden');
}

function resetFrames() {
  frames.forEach((element) => {
    element.classList.add('hidden');
  })
}