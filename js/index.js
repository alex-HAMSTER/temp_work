const menuButton = document.getElementById('menu');
const menuAnimation = document.getElementById('menu_animation');
const menuList = document.getElementById('menu_anime');
const footer = document.querySelector('.footer')

let isTransformed = false;
menuButton.addEventListener('click', function() {
  if (!isTransformed) {
    menuList.style.cssText = 'transform: translateY(-335px)';
    isTransformed = true;
    footer.style.background = 'none'
  } else {
    menuList.style.cssText = 'transform: translateY(0px)';
    isTransformed = false;
    footer.style.background = '#fff'
  }
});