function slidedown() {
  const nav_bar = document.getElementById('nav-bar');
  nav_bar.style.display = 'block';

  nav_bar.style.animation = 'slidedown 200ms';
}

function slideup() {
  const nav_bar = document.getElementById('nav-bar');
  nav_bar.style.animation = 'slideup 200ms';

  setTimeout(() => {
    nav_bar.style.display = 'none';
  }, 200);
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
