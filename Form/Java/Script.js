const texts = document.querySelectorAll("ul > li");
const useNameForm = document.getElementById("instruction");
const emailFor = document.getElementById("emailFor12");
const emailForm1 = document.getElementById("emailForm");
const username1 = document.getElementById("users");
const lastName = document.getElementById("last");
const firstName2 = document.getElementById("first");
const errorMessage = document.querySelector(".error");
const myElement = document.getElementById("lineBefore");
$("#submit").on("click", function userName(e) {
  e.preventDefault();

  var firstName = /^[\p{L} ,.'-]+$/u;
  var userNameRex = /^[a-zA-Z0-9_-]{3,16}$/;
  if (username1.value === "") {
    errorMessage.style.color = "red";
    errorMessage.innerHTML = "please enter username";
  } else if (!userNameRex.test(username1.value)) {
    console.log(username1.value);

    errorMessage.style.color = "red";
    errorMessage.innerHTML = "please enter username correctly";
  } else if (!firstName.test(firstName2.value)) {
    errorMessage.innerHTML = "please enter first name coorectly";
  } else if (!firstName.test(lastName.value)) {
    errorMessage.innerHTML = "please enter last name correctly";
  } else if (
    firstName.test(firstName2.value) &&
    userNameRex.test(username1.value) &&
    firstName.test(firstName2.value)
  ) {
    emailForm1.style.left = "0";
    // emailForm1.style.opacity="0"
    useNameForm.style.display = "none";
    emailForm1.style.display = "block";
    // emailForm1.style.marginTop = "50px";
    myElement.style.backgroundColor = "green";

    var userBg = document.getElementById("userBg");
    userBg.style.backgroundColor = "green";
    userBg.style.border = "green";
  }
});
$("#next2").on("click", function passswordGenerate(e) {
  e.preventDefault();
  var emailCode = document.getElementsByClassName("email");
  var envelope = document.getElementById("fa-enveloped");
  var emailtransform = document.getElementById("emailForm");
  var emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailValidation.test(emailCode.value)) {
    errorMessage.innerHTML = "un Invalid email please try again";
  } else emailtransform.style.left = "0";

  emailForm1.style.display = "none";
  envelope.style.backgroundColor = "green";
  envelope.style.border = "green";
  document.getElementById("password").style.display = "block";
});
$("#next3").on("click", function passed(e) {
  e.preventDefault();
  var passCode = document.getElementById("passCode");
  var passCode2 = document.getElementById("passCode2");
  var passswordWrite = getElementById("password");

  var passValid =
    "(?=^.{8,}$)((?=.*d)|(?=.*W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$";
  if (!passCode.value == passCode2.value) {
    errorMessage.innerHTML = "Incorrect Match";
  } else if (
    !passValid.test(passCode.value) ||
    !emailValidation.test(passCode2.value)
  ) {
    errorMessage.innerHTML = "please enter correct format";
  } else passswordWrite.style.display = "none";
  document.getElementById("congra").style.display = "block";
});
