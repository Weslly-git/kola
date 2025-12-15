const pages = document.querySelectorAll('.page:not(.cover)');
const cover = document.querySelector('.cover');
let current = 0;

// Abrir portada
cover.addEventListener('click', () => {
  cover.style.transform = "rotateY(-180deg)";
  cover.style.zIndex = "0";
  pages[0].style.zIndex = "1";
});

// Avanzar página al tocar el lado derecho
pages.forEach(page => {
  const right = page.querySelector('.right');
  if(right){
    right.addEventListener('click', nextPage);
    right.addEventListener('touchstart', nextPage); // soporte táctil
  }
});

function nextPage() {
  if(current < pages.length - 1){
    pages[current].style.transform = "rotateY(-180deg)";
    pages[current].style.zIndex = "0";
    current++;
    pages[current].style.zIndex = "1";
  }
}
