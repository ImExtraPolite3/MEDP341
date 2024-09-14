function headingSlideDown() {
  const heading = document.querySelector('#intro > h1');
  const body = document.querySelector('body');

  body.addEventListener('load', () => {
    heading.classList.add('nav-bar-slidedown');
  });
}

function slidedown() {
  const nav_bar = document.getElementById('nav-bar');
  nav_bar.classList.remove('hide');

  nav_bar.style.animation = 'slidedown 200ms';
}

function slideup() {
  const nav_bar = document.getElementById('nav-bar');
  nav_bar.style.animation = 'slideup 200ms';

  nav_bar.addEventListener('animationend', () => {
    nav_bar.classList.add('hide');
    // nav_bar.style.display = 'none';
  });
}

function show_nav_bar() {
  const menu = document.getElementById('menu');
  const nav_bar = document.getElementById('nav-bar');

  menu.addEventListener('click', () => {
    if (nav_bar.checkVisibility() === false) {
      nav_bar.classList.remove('hide');
      slidedown();
    } else {
      slideup();
    }
  });
}

show_nav_bar();
headingSlideDown();
