//////////////////////////////////////////////////////////////////////////////////////////////
const icons = document.querySelectorAll('.home__icons i');
// i = 1 not 0 because we will count from index 1
let i = 1;

setInterval(iconsSlideShow, 4000);

function iconsSlideShow() {
  //  console.log(i);
  i++;

  const icon = document.querySelector('.home__icons i.change');
  icon.classList.remove('change');

  if (i > icons.length) {
    icons[0].classList.add('change');
    i = 1;
  } else {
    icon.nextElementSibling.classList.add('change');
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////
document.querySelector('.menu').addEventListener('click', () => {
  document.querySelectorAll('.menu--target').forEach(item => {
    item.classList.toggle('active');
  });
});
