const menuButton = document.getElementById('menu');
const menuAnimation = document.getElementById('menu_animation');
const menuList = document.getElementById('menu_anime');

var isTransformed = false;
menuButton.addEventListener('click', function() {
  if (!isTransformed) {
    menuList.style.cssText = 'transform: translateY(-300px)';
    isTransformed = true;
  } else {
    menuList.style.cssText = 'transform: translateY(0px)';
    isTransformed = false;
  }
});