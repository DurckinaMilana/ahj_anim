/* eslint-disable linebreak-style */
const bootstrap = require('bootstrap');

const collapseElem = document.querySelector('#target');
const collapse = new bootstrap.Collapse(collapseElem, {
  toggle: false,
});
document.querySelector('#btn-target').addEventListener('click', (e) => {
  e.preventDefault();
  collapse.toggle();
});
