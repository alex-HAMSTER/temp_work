const menuButton = document.getElementById('menu');
const menuAnimation = document.getElementById('menu_animation');

menuButton.addEventListener('click', function() {
  if (menuAnimation.style.display === 'none') {
    menuAnimation.style.display = 'block';
  } else {
    menuAnimation.style.display = 'none';
  }
});