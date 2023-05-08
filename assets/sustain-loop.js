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


// // listeners
// button1.addEventListener('click', selectFrame1)
// button2.addEventListener('click', selectFrame2)
// button3.addEventListener('click', selectFrame3)

// functions
function selectFrame1() {
  resetButtons();
  resetFrames();
  button1.classList.add('selected');
  button1txt.classList.add('selected');
  frame1.classList.remove('inactive');
  frame1.classList.add('active');
}

function selectFrame2() {
  resetButtons();
  resetFrames();
  button2.classList.add('selected');
  button2txt.classList.add('selected');
  frame2.classList.remove('inactive');
  frame2.classList.add('active');
}

function selectFrame3() {
  resetButtons();
  resetFrames();
  button3.classList.add('selected');
  button3txt.classList.add('selected');
  frame3.classList.remove('inactive');
  frame3.classList.add('active');
}

function resetButtons() {
  buttons.forEach((element) => {
    element.classList.remove('selected');
  })
}

function resetFrames() {
  frames.forEach((element) => {
    element.classList.remove('active');
    element.classList.add('inactive');
  })
}

function loop1() {
  selectFrame1();
  setTimeout(loop2, 6000);  
}

function loop2() {
  selectFrame2();
  setTimeout(loop3, 6000);
}

function loop3() {
  selectFrame3();
  setTimeout(loop1, 6000);
}

setTimeout(loop2, 6000);