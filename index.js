const menuButton = document.getElementById('menu-button');

 function navbarOpen() {
   const fullMenu = document.getElementById('nav-container');
   fullMenu.style.transform = 'rotateY(0deg)';

 }

//LISTENERS
 menuButton.addEventListener('click', navbarOpen);
