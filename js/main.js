// adds class sticky to header when scrolling down.
window.addEventListener('scroll', function(){
  var header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});

// toggle mobile menu
function toggleMenu(){
  var menuToggle = document.querySelector(".toggle");
  var menu = document.querySelector(".menu");
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
}

// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});

// // copy to clipboard
// function copy(){
//   var input = document.getElementById("passwordDisplay");
//   input.select();
//   document.execCommand("copy");
// }

// password visibility toggle
const pwdInput = document.getElementById("password-input");
const pwdVisible = document.getElementById("visibility-toggle");

function showHide(){
  if(pwdInput.type === 'password'){
    pwdInput.setAttribute('type', 'text');
    pwdVisible.classList.add('fa-eye-slash');
    pwdVisible.classList.remove('fa-eye');
  } else {
    pwdInput.setAttribute('type', 'password');
    pwdVisible.classList.add('fa-eye');
    pwdVisible.classList.remove('fa-eye-slash');
  }
}

// copy to clipboard
function copy(){
  const cb = navigator.clipboard;
  var finalPwd = document.querySelector("#passwordDisplay");
  cb.writeText(finalPwd.innerText).then(() => alert('Text copied'));
}
