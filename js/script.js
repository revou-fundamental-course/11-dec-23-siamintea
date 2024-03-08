// smooth scroll //
const links = document.querySelectorAll(".page-header ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}


function changeName () {
    let yourName = prompt("Siapa Nama Kamu?","");
    document.getElementById("yourName").innerHTML = yourName
}

changeName ()

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function getAll(){
    // Check individual fields
  const date = new Date();
  const name = document.getElementById("name").value;
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const message = document.getElementById("message").value;
  const time = date;

  // Build an array of missing fields
  const missingFields = [];

  if (!name) missingFields.push('Nama');
  if (!birthdate) missingFields.push('Tanggal Lahir');
  if (!gender) missingFields.push('Jenis Kelamin');
  if (!message) missingFields.push('Pesan');

  if (missingFields.length) {
      const messageText = `Please fill in the following fields: ${missingFields.join(', ')}`;
      alert(messageText);
      return false;
  } else {
      document.getElementById("waktu").innerHTML = time;
      document.getElementById("nama").innerHTML = name;
      document.getElementById("lahir").innerHTML = birthdate;
      document.getElementById("kelamin").innerHTML = gender.value;
      document.getElementById("pesan").innerHTML = message;
      return true;
  }
}

function resetAll(){ 
  document.getElementById("name").value = null; 
  document.getElementById("birthdate").value = null; 
  var ele = document.querySelectorAll("input[name=gender]");
    for(var i=0;i<ele.length;i++){
        ele[i].checked = false;
    }
  document.getElementById("message").value = "";
  document.getElementById("waktu").innerHTML = null;
  document.getElementById("nama").innerHTML = null;
  document.getElementById("lahir").innerHTML = null;
  document.getElementById("kelamin").innerHTML = null;
  document.getElementById("pesan").innerHTML = null;
}

// Kembali Ke Atas //
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}