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
var passValid =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
var firstName = /^[a-zA-Z]{4,20}$/;
var userNameRex = /^[a-zA-Z0-9_-]{5,16}$/;
var userBg = document.getElementById("userBg");
var emailCode = document.getElementById("email2");
var envelope = document.getElementById("fa-enveloped");
var emailtransform = document.getElementById("emailForm");
var emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

var usernameValue = "";
var firstnameValue = "";
var lastnamevalue = "";
var emailValue = "";

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

    document.getElementById("lineBefore").style.background = "green";

    userBg.style.background = "green";
    userBg.style.border = "green";

    document.getElementById("arrow").style.display = "block";
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
    envelope.style.backgroundColor = "green";
    envelope.style.border = "green";
    emailForm1.style.display = "none";
    document.getElementById("password").style.display = "block";
    document.getElementById("arrow1").style.display = "block";
    document.getElementById("arrow").style.display = "none";
  }
});
$("#next3").on("click", function passed(e) {
  e.preventDefault();

  if (passCode.value == "") {
    errorMessage3.innerHTML = "please enter password";
    errorMessage3.style.color = "red";
  } else if (!passValid.test(passCode.value)) {
    errorMessage3.innerHTML = "please enter valid password";
    errorMessage3.style.color = "red";
  } else if (passCode2.value == "") {
    errorMessage3.innerHTML = "please enter password";
    errorMessage3.style.color = "red";
  } else if (!passValid.test(passCode2.value)) {
    errorMessage3.innerHTML = "please enter valid password";
    errorMessage3.style.color = "red";
  } else if (passCode.value !== passCode2.value) {
    console.log(passCode.value);
    console.log(passCode2.value);
    errorMessage3.innerHTML = "Incorrect Match";
    errorMessage3.style.color = "red";
  } else if (passCode.value == passCode2.value) {
    passswordWrite.style.display = "none";
    document.getElementById("congra").style.display = "block";
  }
  usernameValue += username1.value;
  firstnameValue += firstName2.value;
  lastnamevalue += lastName.value;
  emailValue += emailCode.value;
  document.getElementById("congra").style.left = "0";
  document.getElementById("fa-keyed").style.border = "green";
  document.getElementById("fa-trophyed").style.border = "green";
  document.getElementById("fa-keyed").style.backgroundColor = "green";
  document.getElementById("fa-trophyed").style.backgroundColor = "green";
  document.getElementById("lineAfter2").style.background = "green";
  document.getElementById("lineAfter4").style.background = "green";
  document.getElementById("lineAfter3").style.background = "green";
  document.getElementById("usernamelast").innerHTML =
    "Username= " + usernameValue;
  document.getElementById("firstnamelast").innerHTML =
    "Fist name= " + firstnameValue;
  document.getElementById("lastnamelast").innerHTML =
    "Last name= " + lastnamevalue;
  document.getElementById("emaillast").innerHTML = "Email= " + emailValue;
  document.getElementById("arrow1").style.display = "none";
});
$("#arrow").on("click", function backButton(e) {
  e.preventDefault();
  useNameForm.style.display = "block";
  emailForm1.style.display = "none";
});
$("#arrow1").on("click", function backButton(e) {
  e.preventDefault();
  document.getElementById("password").style.display = "none";
  emailForm1.style.display = "block";
});
$("#finish").on("click", function finished(e) {
  e.preventDefault();
  document.getElementById("congra").style.display = "none";
  useNameForm.style.display = "block";
  document.getElementById("fa-keyed").style.border = "";
  document.getElementById("fa-trophyed").style.border = "";
  document.getElementById("fa-keyed").style.backgroundColor = "";
  document.getElementById("fa-trophyed").style.backgroundColor = "";
  document.getElementById("lineAfter2").style.background = "white";
  document.getElementById("lineAfter").style.background = "white";
  document.getElementById("lineAfter4").style.background = "white";
  document.getElementById("lineAfter3").style.background = "white";
  username1.value = "";
  firstName2.value = "";
  emailCode.value = "";
  lastName.value = "";
  document.getElementById("lineBefore").style.background = "white";

  passCode.value = "";
  passCode2.value = "";
  envelope.style.backgroundColor = "";
  envelope.style.border = "";
  userBg.style.backgroundColor = "";
  userBg.style.border = "";
});
