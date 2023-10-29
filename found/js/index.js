const lost = document.getElementById('lost')
const found = document.getElementById('found')
const select_1_img = document.getElementById('select_1_img')
const select_2_img = document.getElementById('select_2_img')

found.addEventListener('click', () => {
    found.style.backgroundColor = "#ff0000ad";
    found.style.color = "#fff";
    lost.style.background = "none";
    lost.style.color = "#ff0000ad";
    select_1_img.src= 'img/search_earth_red.png'
    select_2_img.src= 'img/search_earth.png'

});


lost.addEventListener('click', () => {
    lost.style.backgroundColor = "#ff0000ad";
    lost.style.color = "#fff";
    found.style.background = "none";
    found.style.color = "#ff0000ad";
    select_2_img.src= 'img/search_earth_red.png'
    select_1_img.src= 'img/search_earth.png'
});