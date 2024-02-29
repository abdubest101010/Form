$("#submit").on("click", function userName(e) {
  e.preventDefault();
  const texts = document.querySelectorAll("ul > li");
  const useNameForm = document.getElementById("instruction");
  const emailFor = document.getElementById("emailFor12");
  const emailForm1 = document.getElementById("emailForm");
  const username1 = document.getElementById("users");
  const lastName = document.getElementById("last");
  const firstName2 = document.getElementById("first");
  const errorMessage = document.querySelector(".error");
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

    document.getElementById("userFirst").style.backgroundColor = "green";
    document.getElementById("userFirst").style.border = "green";
    document.getElementById("userFirst").style.backgroundColor = "green";
  }
});
