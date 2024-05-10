document.addEventListener('DOMContentLoaded', function () {
  showAll();
});

function showAll(num) {
  var buttons = document.querySelectorAll('.filter-btns button');
  buttons.forEach(function (btn) {
    btn.classList.remove('active');
  });

  var boxes = document.querySelectorAll('#box');
  boxes.forEach(function (box) {
    box.classList.remove('hidden');
  });

  if (!num) document.querySelector('.filter-btns button:nth-child(1)').classList.add('active');
}

// Function to show only Samsung boxes
function showSamsung() {
  showAll(1);
  var btn = document.querySelector('.filter-btns button:nth-child(2)');
  btn.classList.add('active');

  var nonSamsungBoxes = document.querySelectorAll('#box:not(.samsung)');
  nonSamsungBoxes.forEach(function (box) {
    box.classList.add('hidden');
  });
}

// Function to show only Apple boxes
function showApple() {
  showAll(1);
  var btn = document.querySelector('.filter-btns button:nth-child(3)');
  btn.classList.add('active');

  var nonAppleBoxes = document.querySelectorAll('#box:not(.apple)');
  nonAppleBoxes.forEach(function (box) {
    box.classList.add('hidden');
  });
}

// Function to show only Realme boxes
function showRealme() {
  showAll(1);
  var btn = document.querySelector('.filter-btns button:nth-child(4)');
  btn.classList.add('active');

  var nonRealmeBoxes = document.querySelectorAll('#box:not(.realme)');
  nonRealmeBoxes.forEach(function (box) {
    box.classList.add('hidden');
  });
}
