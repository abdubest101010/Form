$("#submit").on("click", function userName(e) {
  e.preventDefault();
  const username1 = document.getElementById("users");
  const errorMessage = document.querySelector(".error");

  var userNameRex = /^[a-zA-Z0-9_-]{3,16}$/;
  if (username1.value === "") {
    errorMessage.innerHTML = "please enter username";
  } else if (!userNameRex.test(username1.value)) {
    console.log(username1.value);
    errorMessage.innerHTML = "please enter correctly";
  }
});
