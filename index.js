const menuButton = document.getElementById('menu-button');
const menuButtonIcon = document.getElementById('menu-button-icon')
const navbar = document.getElementById('nav-container');

 function navbarOpen() {
   navbar.style.transform = 'rotateX(0deg)';
   menuButton.classList.toggle('active')
   menuButtonIcon.classList.remove('fas', 'fa-bars', 'fa-2x')
   menuButtonIcon.classList.add('fas', 'fa-arrow-right', 'fa-2x')
   console.log(`navbar open`)
 }

 function navbarClose() {
   console.log(`navbar close`)
  navbar.style.transform = 'rotateX(90deg)'
  menuButton.classList.toggle('active')
  menuButtonIcon.classList.remove('fas', 'fa-arrow-right', 'fa-2x')
  menuButtonIcon.classList.add('fas', 'fa-bars', 'fa-2x')
 }

//LISTENERS
menuButton.addEventListener('click', function(){
  const list = menuButton.classList
  if(list.contains('active')) {
    navbarClose()
  } else {
    navbarOpen()
  }
});
