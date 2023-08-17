var passwordDisplay = document.getElementById("pwd");
var copyBtn = document.getElementById("copyBtn");
var buttons = document.querySelectorAll(".myBtn");
var symbolsCheckbox = document.querySelector("input[name=checkbox]");
var includeSymbols = false

function copyToClip(password) {
  navigator.clipboard.writeText(password)
}

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    var buttonText = button.innerHTML;
    var pwdLength = parseInt(buttonText);
    var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var symbols = "!@#$%^&*()-_="
    var randPwd = '';

    if (includeSymbols == true) {
      characters += symbols;
    }

        // Ensure at least one symbol is included
    if (includeSymbols === true) {
      randPwd += symbols.charAt(Math.floor(Math.random() * symbols.length));
      pwdLength--;
    }

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

symbolsCheckbox.addEventListener("change", function() {
  if (this.checked) {
    includeSymbols = true
  } else {
    includeSymbols = false
  }
});
