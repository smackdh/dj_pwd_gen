var passwordDisplay = document.getElementById("pwd");
var copyBtn = document.getElementById("copyBtn");
var buttons = document.querySelectorAll(".myBtn");

function copyToClip(password) {
  navigator.clipboard.writeText(password)
}

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    var buttonText = button.innerHTML;
    var pwdLength = parseInt(buttonText);
    var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var randPwd = '';

    for (var i = 0; i < pwdLength; i++) {
      var randIndex = Math.floor(Math.random() * characters.length);
      randPwd += characters.charAt(randIndex);
    }
    passwordDisplay.innerHTML = randPwd;
    copyToClip(passwordDisplay.innerHTML);
  });
});

copyBtn.addEventListener("click", function() {
  copyToClip(passwordDisplay.innerHTML)
})
