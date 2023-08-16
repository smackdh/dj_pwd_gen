 document.getElementById("myBtn").addEventListener("click", function() {
      var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
      var pwdLength = 8;
      var randPwd= '';

      for (var i = 0; i < pwdLength; i++) {
        var randIndex = Math.floor(Math.random() * characters.length);
        randPwd += characters.charAt(randIndex);
      }

      var passwordDisplay = document.getElementById("pwd");
      passwordDisplay.innerText = randPwd;
    })
