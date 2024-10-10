let position = 100;
let speed = 25;

let top1 = 0;
let left1 = Math.floor(Math.random() * window.innerWidth);
let go1 = 'bottom';
let side1 = 'center';
let leftStep1 = Math.random() * 3;

let top2 = 0;
let left2 = Math.floor(Math.random() * window.innerWidth);
let go2 = 'bottom';
let side2 = 'center';
let leftStep2 = Math.random() * 3;

let int1, int2;

$('.circle1').css('left', left1 + 'px');
$('.circle2').css('left', left2 + 'px');

const moveCircle = (circleClass, top, left, go, side, leftStep) => {
  if (top > 600 && go === 'bottom') {
    if ((left - position > 0 && left - position < 300)) {
      go = 'top';
      side = (left - position < 150) ? 'left' : 'right';
    } else {
      clearInterval(int1);
      clearInterval(int2);
      alert('game over, your score is ' + nemo);
      location.reload();
    }
  }

  if (top < 0 && go === 'top') {
    go = 'bottom';
    leftStep = Math.random() * 3;
  } else if (go === 'bottom') {
    top++;
    if (side === 'left') {
      if (left > 10) {
        left -= leftStep;
      } else {
        side = 'right';
      }
    }
    if (side === 'right') {
      if (left < window.innerWidth - 40) {
        left += leftStep;
      } else {
        side = 'left';
      }
    }
  } else if (go === 'top') {
    top--;
    if (side === 'left') {
      left += leftStep;
    }
    if (side === 'right') {
      left -= leftStep;
    }
  }

  $(circleClass).css('top', top + 'px');
  $(circleClass).css('left', left + 'px');

  return { top, left, go, side, leftStep };
};

int1 = setInterval(() => {
  let state1 = moveCircle('.circle1', top1, left1, go1, side1, leftStep1);
  top1 = state1.top;
  left1 = state1.left;
  go1 = state1.go;
  side1 = state1.side;
  leftStep1 = state1.leftStep;
}, 10);

setTimeout(() => {
  int2 = setInterval(() => {
    let state2 = moveCircle('.circle2', top2, left2, go2, side2, leftStep2);
    top2 = state2.top;
    left2 = state2.left;
    go2 = state2.go;
    side2 = state2.side;
    leftStep2 = state2.leftStep;
  }, 10);
}, 2000); 

let nemo = 0;
let scoreInt = setInterval(() => {
  nemo++;
  console.log(nemo);
  $('.score').text(nemo);
}, 1000);

$('body').keydown(function(e) {
  if (e.key === 'ArrowRight') {
    if (position > window.innerWidth) return;
    position += speed;
    $('.plat').css('left', position + 'px');
  }
  if (e.key === 'ArrowLeft') {
    if (position < 0) return;
    position -= speed;
    $('.plat').css('left', position + 'px');
  }
});
