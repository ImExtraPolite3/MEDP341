let on = false;

function show_nav_bar() {
  const menu = document.getElementById('menu');
  const nav_bar = document.getElementById('nav-bar');
  const intro = document.getElementById('intro');

  menu.addEventListener('click', () => {
    if (on === false) {
      on = true;
      nav_bar.classList.remove('hide');
    } else {
      on = false;
      nav_bar.classList.add('hide');
    }
  });

  intro.addEventListener('click', () => {
    if (on === false) {
      on = true;
      nav_bar.classList.remove('hide');
    } else {
      on = false;
      nav_bar.classList.add('hide');
    }
  });
}

show_nav_bar();
