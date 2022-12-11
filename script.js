'use strict';
console.log(document.querySelector('.message').textContent); // textcontect olmaz ise değeri çekemez ve assigne edemeyiz.
document.querySelector('.message').textContent = 'Doğru sayı';
document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 25;
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
}); // butona tıklandığında
