const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('.menu-list');

menuIcon.addEventListener('click', () => {
  menuList.classList.toggle('show');
});