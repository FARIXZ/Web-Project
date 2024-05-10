document.getElementById('product-btn').addEventListener('click', function () {
  document.body.classList.add('blur');
  setTimeout(function () {
    window.location.href = '../product.html';
  }, 100);
});

document.getElementById('home-btn').addEventListener('click', function () {
  document.body.classList.add('blur');
  setTimeout(function () {
    window.location.href = '../main.html';
  }, 100);
});

document.getElementById('about-btn').addEventListener('click', function () {
  document.body.classList.add('blur');
  setTimeout(function () {
    window.location.href = '../about.html';
  }, 100);
});
