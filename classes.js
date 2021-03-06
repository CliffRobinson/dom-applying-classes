// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. Uncomment the line below and reload the browser.
  one()
    
  // Your turn! Create a new function called `two`, then call it from here.
  two();
  three();
  makeVisible();
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we apply a new CSS class to it:
  one.classList.add('blue')
}

// CREATE FUNCTION two HERE

function two() {
  let two = document.getElementById('two');

  two.classList.add('green');

}

// CREATE FUNCTION three HERE

function three() {
  let three = document.getElementById('three');

  three.classList.add('sunrise');
}

// CREATE FUNCTION makeVisible HERE

function makeVisible() {
  let ringbearers = document.getElementsByClassName('invisible');
  console.log(ringbearers);
  let bilbo = ringbearers[0];
  bilbo.classList.add('visible');

}