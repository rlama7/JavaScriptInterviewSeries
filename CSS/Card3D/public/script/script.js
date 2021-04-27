// Animation
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

// Moving animation event
container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate when mouse pointer in
container.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none';

  // POpOut
  title.style.transform = 'translateZ(150px)';
  sneaker.style.transform = 'translateZ(150px';
  //   purchase.style.transform = 'translateZ(150px)';
  description.style.transform = 'translateZ(150px)';
  //   sizes.style.transform = 'translateZ(150px)';
});

// Animate when mouse pointer out
container.addEventListener('mouseleave', (e) => {
  card.style.transition = 'all 0.5s ease-out';
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  // POpBack
  title.style.transform = 'translateZ(0)';
  sneaker.styel.transform = 'translateZ(0)';
  //   purchase.style.transform = 'translateZ(0)';
  description.style.transform = 'translateZ(0)';
  //   sizes.style.transform = 'translateZ(0)';
});
