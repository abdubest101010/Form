const texts = document.querySelectorAll("ul > li");
const useNameForm = document.getElementById("instruction");
const emailFor = document.getElementById("emailFor12");
const emailForm1 = document.getElementById("emailForm");
const username1 = document.getElementById("users");
const lastName = document.getElementById("last");
const firstName2 = document.getElementById("first");
const errorMessage = document.querySelector(".error");
const errorMessage2 = document.getElementById("error2");
const errorMessage3 = document.getElementById("error3");
const myElement = document.getElementById("lineAfter");
var passCode = document.getElementById("passCode4");
var passCode2 = document.getElementById("passCode2");
var passswordWrite = document.getElementById("password");
var passValid = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/;
var firstName = /^[a-zA-Z]{4,20}$/;
var userNameRex = /^[a-zA-Z0-9_-]{5,16}$/;
var userBg = document.getElementById("userBg");
var emailCode = document.getElementById("email2");
var envelope = document.getElementById("fa-enveloped");
var emailtransform = document.getElementById("emailForm");
var emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var envelope2 = document.getElementById("fa-enveloped");
$("#submit").on("click", function userName(e) {
  e.preventDefault();

  if (username1.value == "") {
    errorMessage.style.color = "red";
    errorMessage.innerHTML = "please enter username";
  } else if (!userNameRex.test(username1.value)) {
    errorMessage.style.color = "red";
    errorMessage.innerHTML = "please enter username correctly";
  } else if (firstName2.value == "") {
    errorMessage.style.color = "red";
    errorMessage.innerHTML = "please enter First name";
  } else if (!firstName.test(firstName2.value)) {
    errorMessage.style.color = "red";
    errorMessage.innerHTML = "please enter first name coorectly";
  } else if (lastName.value == "") {
    errorMessage.style.color = "red";
    errorMessage.innerHTML = "please enter Last name";
  } else if (!firstName.test(lastName.value)) {
    errorMessage.innerHTML = "please enter last name correctly";
  } else if (
    firstName.test(firstName2.value) &&
    userNameRex.test(username1.value) &&
    firstName.test(firstName2.value)
  ) {
    emailForm1.style.left = "0";

    useNameForm.style.display = "none";
    emailForm1.style.display = "block";

    myElement.style.background =
      "linear-gradient(to right, green 50%, white 50%)";

    document.getElementById("lineBefore").style.backgroundColor = "green";

    userBg.style.backgroundColor = "green";
    userBg.style.border = "green";
  }
});
$("#next2").on("click", function passswordGenerate(e) {
  e.preventDefault();
  if (emailCode.value == "") {
    errorMessage2.style.color = "red";
    errorMessage2.innerHTML = "please enter email";
  } else if (!emailValidation.test(emailCode.value)) {
    errorMessage2.style.color = "red";
    errorMessage2.innerHTML = "un Invalid email please try again";
  } else if (emailValidation.test(emailCode.value)) {
    passswordWrite.style.left = "0";

    myElement.style.background = "green";
    document.getElementById("lineAfter2").style.background =
      "linear-gradient(to right, green 50%, white 50%)";
    envelope2.style.backgroundColor = "green";
    envelope2.style.border = "green";
    emailForm1.style.display = "none";
    envelope.style.backgroundColor = "green";
    envelope.style.border = "green";
    document.getElementById("password").style.display = "block";
  }
});
$("#next3").on("click", function passed(e) {
  e.preventDefault();

  if (passCode.value == "") {
    errorMessage3.innerHTML = "please enter password";
    errorMessage3.style.color = "red";
  } else if (!passValid.test(passCode)) {
    errorMessage3.innerHTML = "please enter valid password";
    errorMessage3.style.color = "red";
  } else if (passCode2.value == "") {
    errorMessage3.innerHTML = "please enter password";
    errorMessage3.style.color = "red";
  } else if (!passValid.test(passCode2)) {
    errorMessage3.innerHTML = "please enter valid password";
    errorMessage3.style.color = "red";
  } else if (passCode.value !== passCode2.value) {
    console.log(passCode.value);
    console.log(passCode2.value);
    errorMessage3.innerHTML = "Incorrect Match";
    errorMessage3.style.color = "red";
  }
});
