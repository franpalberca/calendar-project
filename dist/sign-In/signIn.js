export function logInBtnClick() {
    const signInOutLi = document.getElementById('signInOutLi');
    const signInButton = document.createElement("button");
    signInButton.id = "signInBtn";
    signInButton.innerText = "Sign In";
    signInButton.setAttribute("type", "button");
    signInButton.setAttribute("class", " nav-link btn btn-outline-primary btn-sm");
    signInButton.setAttribute("data-bs-toggle", "modal");
    signInButton.setAttribute("data-bs-target", "#modalSignIn");
    signInOutLi.appendChild(signInButton);
    const signOutButton = document.createElement("button");
    signOutButton.id = "signOutBtn";
    signOutButton.setAttribute("type", "button");
    signOutButton.setAttribute("class", " nav-link btn btn-outline-primary btn-sm");
    signOutButton.setAttribute("data-bs-toggle", "modal");
    signOutButton.setAttribute("data-bs-target", "#modalSignOut");
    signInOutLi.appendChild(signOutButton);
    const signInBtn = document.getElementById("signInBtn");
    signInBtn.addEventListener("click", logIn);
}
export function logIn() {
    console.log("sign-in process");
    const containerMain = document.getElementById("generalContainer");
    containerMain.setAttribute("class", "container d-flex justify-content-center align-items-center");
    const formDiv = document.createElement("div");
    formDiv.innerHTML = `
  <div class="modal fade" tabindex="-1" role="dialog" id="modalSignIn" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content rounded-4 shadow">
          <div class="modal-header p-5 pb-4 border-bottom-0">
            <h1 class="fw-bold mb-0 fs-2">Sign up for free</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
    
          <div class="modal-body p-5 pt-0">
            <form class="">
				<div class="form-floating mb-3">
					<input type="text" autocomplete="username" class="form-control rounded-3" id="userName" placeholder="Assembler" required minlength="5" maxlength="20" >
					<label for="userName">User</label>
				  </div>
              <div class="form-floating mb-3">
                <input type="email" autocomplete="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com" required minlength="8" maxlength="50">
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" autocomplete="new-password" class="form-control rounded-3" id="floatingPassword1" placeholder="Password" required minlength="8" maxlength="20">
				<span id="show-password1"><i class="bi bi-eye-slash" id="eye1"></i>
				</span>
                <label for="floatingPassword1">Password </label>
              </div>
			  <div class="form-floating mb-3">
                <input type="password" autocomplete="current-password" class="form-control rounded-3" id="floatingPassword2" placeholder="Password" required minlength="8" maxlength="20">
                <label for="floatingPassword2">Confirm password</label>
				<span id="show-password2">
					<i class="bi bi-eye-slash" id="eye2"></i>
				</span>
				
              </div>
              <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
              <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
              <hr class="my-4">
              <h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
              <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                <svg class="bi me-1" width="16" height="16"><use xlink:href="#google"></use></svg>
                Sign up with Twitter
              </button>
              <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
                <svg class="bi me-1" width="16" height="16"><use xlink:href="#facebook"></use></svg>
                Sign up with Facebook
              </button>
              <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                <svg class="bi me-1" width="16" height="16"><use xlink:href="#github"></use></svg>
                Sign up with GitHub
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
    containerMain.appendChild(formDiv);
    const userInput = document.getElementById("userName");
    const emailInput = document.getElementById("floatingInput");
    const passwordInput1 = document.getElementById("floatingPassword1");
    const passwordInput2 = document.getElementById("floatingPassword2");
    const signInBtn = document.getElementById("signInBtn");
    const signOutBtn = document.getElementById("signOutBtn");
    const formSignInDiv = document.getElementById("formSignInDiv");
    const showPassBtn = document.getElementById("eye1");
    const showPassBtn1 = document.getElementById("eye2");
    const errorUser = createErrorMessage("This field should be complete");
    const errorEmail = createErrorMessage("This field is not properly formatted");
    const errorPass = createErrorMessage("This field is not properly formatted");
    const errorPass1 = createErrorMessage("These fields don't match");
    const boxItem = document.getElementById("user");
    const boxItemEmail = document.getElementById("email");
    const boxItemPass = document.getElementById("password");
    const boxItemPass1 = document.getElementById("confirmPass");
    function createErrorMessage(message) {
        const errorDiv = document.createElement("div");
        errorDiv.textContent = message;
        errorDiv.className = "error-input";
        return errorDiv;
    }
    function isFieldValid(value, minLength, maxLength, regex) {
        return value.trim().length >= minLength && value.trim().length <= maxLength && regex.test(value);
    }
    function validateEmail(email) {
        const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailRegex.test(email);
    }
    function validatePassword(password) {
        const passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
        return passwordRegex.test(password);
    }
    function validateForm() {
        const userName = userInput.value;
        const email = emailInput.value;
        const password = passwordInput1.value;
        const passwordConfirm = passwordInput2.value;
        const isUserNameValid = isFieldValid(userName, 5, 20, /\s/);
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);
        const doPasswordsMatch = password === passwordConfirm;
        signInBtn.disabled = !(isUserNameValid && isEmailValid && isPasswordValid && doPasswordsMatch);
        updateErrorMessage(isUserNameValid, boxItem, errorUser);
        updateErrorMessage(isEmailValid, boxItemEmail, errorEmail);
        updateErrorMessage(isPasswordValid, boxItemPass, errorPass);
        updateErrorMessage(doPasswordsMatch, boxItemPass1, errorPass1);
    }
    function updateErrorMessage(isValid, container, errorMessage) {
        if (!isValid) {
            container.appendChild(errorMessage);
        }
        else if (errorMessage.parentNode === container) {
            container.removeChild(errorMessage);
        }
    }
    function handleLogin(event) {
        event.preventDefault();
        const userName = userInput.value;
        const email = emailInput.value;
        const password = passwordInput1.value;
        const passwordConfirm = passwordInput2.value;
        if (password !== passwordConfirm) {
            return;
        }
        localStorage.setItem("userName", userName);
        localStorage.setItem("email", email);
        const userButton = document.getElementById("User");
        if (userButton) {
            userButton.textContent = userName;
        }
    }
    function handleLogout() {
    }
    signInBtn.addEventListener("click", handleLogin);
    signOutBtn.addEventListener("click", handleLogout);
    showPassBtn.addEventListener("click", togglePasswordVisibility1);
    showPassBtn1.addEventListener("click", togglePasswordVisibility2);
    userInput.addEventListener("input", validateForm);
    emailInput.addEventListener("input", validateForm);
    passwordInput1.addEventListener("input", validateForm);
    passwordInput2.addEventListener("input", validateForm);
    function togglePasswordVisibility1() {
        if (passwordInput1.type === "password") {
            showPassBtn.classList.remove("bi-eye-slash");
            showPassBtn.classList.add("bi-eye-fill");
            passwordInput1.type = "text";
        }
        else {
            showPassBtn.classList.remove("bi-eye-fill");
            showPassBtn.classList.add("bi-eye-slash");
            passwordInput1.type = "password";
        }
    }
    function togglePasswordVisibility2() {
        if (passwordInput2.type === "password") {
            showPassBtn1.classList.remove("bi-eye-slash");
            showPassBtn1.classList.add("bi-eye-fill");
            passwordInput2.type = "text";
        }
        else {
            showPassBtn1.classList.remove("bi-eye-fill");
            showPassBtn1.classList.add("bi-eye-slash");
            passwordInput2.type = "password";
        }
    }
}
//# sourceMappingURL=signIn.js.map