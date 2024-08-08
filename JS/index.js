const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]*$/;
function setErro(index) {
  campos[index].style.border = "2px solid #e63636";
  spans[index].style.display = "block";
}


form.addEventListener('submit',(event)=>{
    event.preventDefault();
    nameValidete();
    emailValideite();
    mainPasswordValidete();
    comparaPassword();

});





function removeError(index) {
  campos[index].style.border = "";
  spans[index].style.display = "none";
}

function nameValidete() {
  if (campos[0].value.length < 3) {
    setErro(0);
  } else {
    removeError(0);
  }
}

function emailValideite() {
  if (!emailRegex.test(campos[1].value)) {
    setErro(1);
  } else {
    removeError(1);
  }
}

function mainPasswordValidete() {
  if (campos[2].value.length < 8) {
    setErro(2);
  } else {
    removeError(2);
    comparaPassword();
  }
}

function comparaPassword() {
  if (campos[2].value == campos[3].value && campos[3].value.length >= 8) {
    removeError(3);
  } else {
    setErro(3);
  }
}
