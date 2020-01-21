const menuButton = document.getElementById('menu-button');
const menuButtonIcon = document.getElementById('menu-button-icon')
const navbar = document.getElementById('navbar-container');
const socialButton = document.getElementById('social-button')
const socialButtonIcon = document.getElementById('social-button-icon')
const socialMenu = document.getElementById('social-menu')

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

function socialOpen(){
  console.log('hello world from social open')
  socialMenu.style.transform = 'rotateY(0deg)'
  socialButton.classList.toggle('active')
  socialButtonIcon.classList.remove('fas', 'fa-share-square')
  socialButtonIcon.classList.add('fas', 'fa-arrow-down', 'fa-2x')
}

function socialClose(){
  console.log('helloworld from the social close click event')
  socialMenu.style.transform = 'rotateY(90deg)'
  socialButton.classList.toggle('active')
  socialButtonIcon.classList.remove('fas', 'fa-arrow-down', 'fa-2x')
  socialButtonIcon.classList.add('fas', 'fa-share-square')
}

//LISTENERS
menuButton.addEventListener('click', function() {
  if(menuButton.classList.contains('active')) {
    navbarClose()
  } else {
    navbarOpen()
  }
});

socialButton.addEventListener('click', function(){
  if(socialButton.classList.contains('active')) {
    socialClose()
  } else {
    socialOpen()
  }
})
