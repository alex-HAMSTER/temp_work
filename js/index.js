const menuButton = document.querySelector('#menu');

const menuList = document.querySelector('#menu_animation');
const footer = document.querySelector('.footer')

let isTransformed = false;
menuButton.addEventListener('click', ()=> {
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