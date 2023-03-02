const menuIcon = document.querySelector('.item');
const menuList = document.querySelector('.menu-list');

menuIcon.addEventListener('click', () => {
  menuList.classList.toggle('show');
});