document.addEventListener("DOMContentLoaded", function() {
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const registerButton = document.getElementById("registerButton");
  
    usernameInput.addEventListener("input", checkInputs);
    emailInput.addEventListener("input", checkInputs);
    passwordInput.addEventListener("input", checkInputs);
  
    function checkInputs() {
      const usernameValue = usernameInput.value.trim();
      const emailValue = emailInput.value.trim();
      const passwordValue = passwordInput.value.trim();
  
      if (usernameValue !== "" && emailValue !== "" && passwordValue !== "") {
        registerButton.disabled = false;
      } else {
        registerButton.disabled = true;
      }
    }
  
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Perform registration logic here
      // Redirect to main.html or show success message
  
      window.location.href = "choose.html";
    });
  });
  