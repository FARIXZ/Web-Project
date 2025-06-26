const pathParts = window.location.pathname.split('/');
const base = '/' + pathParts[1] + '/'; // gets 'Web-Project' in '/Web-Project/page.html'

document.getElementById('product-btn').addEventListener('click', function () {
  document.body.classList.add('blur');
  setTimeout(function () {
    window.location.href = base + 'product.html';
  }, 100);
});

document.getElementById('home-btn').addEventListener('click', function () {
  document.body.classList.add('blur');
  setTimeout(function () {
    window.location.href =  base + 'main.html';
  }, 100);
});

document.getElementById('about-btn').addEventListener('click', function () {
  document.body.classList.add('blur');
  setTimeout(function () {
    window.location.href =  base + 'about.html';
  }, 100);
});
