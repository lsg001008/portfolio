const prev = document.getElementById('prev');
const next = document.getElementById('next');
const list = document.querySelectorAll('li');
const progress = document.getElementById('progress');

const MAX_STEPS_NUM = 4;
const CLICK = 'click';

let _steps = 1;

const activateCircle = (index) => {
  list[index - 1].classList.add('active');
};

const deactivateCircle = (index) => {
  list[index].classList.remove('active');
};

const handleBtnLock = () => {
  if (_steps <= 1) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
  }

  if (_steps >= MAX_STEPS_NUM) {
    next.disabled = true;
  } else {
    next.disabled = false;
  }
};

const updateProgress = () => {
  progress.style.width = (98 / (MAX_STEPS_NUM - 1)) * (_steps - 1) + '%';
};

const handlePrevBtn = (event) => {
  _steps--;
  handleBtnLock();
  deactivateCircle(_steps);
  updateProgress();
};

const handleNextBtn = (event) => {
  _steps++;
  handleBtnLock();
  activateCircle(_steps);
  updateProgress();
};

prev.addEventListener(CLICK, handlePrevBtn);
next.addEventListener(CLICK, handleNextBtn);

handleBtnLock();
activateCircle(_steps);

// 숫자를 누르면 그 부분으로 건너 뛰도록 만들기
