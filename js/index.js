const menuButton = document.getElementById('menu');

const menuList = document.getElementById('menu_animation');
const footer = document.querySelector('.footer')

let isTransformed = false;
menuButton.addEventListener('click', function() {
  if (!isTransformed) {
    menuList.style.cssText = 'transform: translateY(-320px)';
    isTransformed = true;
    footer.style.background = 'none'
  } else {
    menuList.style.cssText = 'transform: translateY(0px)';
    isTransformed = false;
    footer.style.background = '#fff'
  }
});