export function logInBtnClick() {
    const navbarToggleBtn = document.getElementById("navbarToggleBtn");
    navbarToggleBtn.addEventListener("click", function () {
        const navBarNav = document.getElementById("navBarNav");
        navBarNav.classList.toggle("show");
    });
    const signInOutLi = document.getElementById("signInOutLi");
    const signInButton = document.createElement("button");
    signInButton.id = "signInButtonNavBar";
    signInButton.innerText = "Sign In";
    signInButton.setAttribute("type", "button");
    signInButton.setAttribute("class", " nav-link btn btn-outline-primary btn-sm");
    signInButton.setAttribute("data-bs-toggle", "modal");
    signInButton.setAttribute("data-bs-target", "#modalSignIn");
    signInOutLi.appendChild(signInButton);
    signInButton.addEventListener("click", logIn);
}
function logIn() {
    console.log("sign-in process");
    const userInput = document.getElementById("userName");
    const emailInput = document.getElementById("floatingInput");
    const passwordInput1 = document.getElementById("floatingPassword1");
    const passwordInput2 = document.getElementById("floatingPassword2");
    const signInBtn = document.getElementById("signInButton");
    const signOutBtn = document.getElementById("signOutBtn");
    const container = document.createElement("div");
    const showPassBtn = document.getElementById("eye1");
    const showPassBtn1 = document.getElementById("eye2");
    function createErrorMessage(message) {
        const alertMessage = document.createElement('div');
        alertMessage.innerHTML = `<div class="z-3 position-fixed bottom-0 end-0 alert alert-info alert-dismissible fade show z-5" role="alert">
    <strong><i class="fa-regular fa-bell"></i> Hey!</strong> ${message}.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
        const mainContainer = document.querySelector('#modalSignIn');
        mainContainer === null || mainContainer === void 0 ? void 0 : mainContainer.prepend(alertMessage);
        return alertMessage;
    }
    function isFieldValid(value, minLength, maxLength, regex) {
        return value.trim().length >= minLength && value.trim().length <= maxLength && regex.test(value);
    }
    function validateEmail(email) {
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(email);
    }
    function validatePassword(password) {
        const passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,}$/;
        return passwordRegex.test(password);
    }
    function validateForm() {
        const userName = userInput.value;
        const email = emailInput.value;
        const password = passwordInput1.value;
        const passwordConfirm = passwordInput2.value;
        const isUserNameValid = isFieldValid(userName, 5, 20, /^\S+$/);
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);
        const doPasswordsMatch = password === passwordConfirm;
        const boxItem = document.getElementById("userName");
        const boxItemEmail = document.getElementById("floatingInput");
        const boxItemPass = document.getElementById("floatingPassword1");
        const boxItemPass1 = document.getElementById("floatingPassword2");
        const errorUser = createErrorMessage("Please fill in the User Name field with your name.");
        const errorEmail = createErrorMessage("Please fill in the email field with your valid email.");
        const errorPass = createErrorMessage("Please fill in the password field with your password.");
        const errorPass1 = createErrorMessage("Please fill in the verify password field with your password to verify it");
        if (isUserNameValid && isEmailValid && isPasswordValid && doPasswordsMatch) {
            const signInBtn = document.getElementById("signInButton");
            signInBtn.classList.remove("disabled");
        }
        else {
            const signInBtn = document.getElementById("signInButton");
            signInBtn.classList.add("disabled");
        }
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
            alert("Passwords do not match");
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
    if (signInBtn && signOutBtn && showPassBtn && showPassBtn1 && userInput && emailInput && passwordInput1 && passwordInput2) {
        signInBtn.addEventListener("click", handleLogin);
        signOutBtn.addEventListener("click", handleLogout);
        showPassBtn.addEventListener("click", togglePasswordVisibility1);
        showPassBtn1.addEventListener("click", togglePasswordVisibility2);
        userInput.addEventListener("blur", validateForm);
        emailInput.addEventListener("blur", validateForm);
        passwordInput1.addEventListener("blur", validateForm);
        passwordInput2.addEventListener("blur", validateForm);
    }
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
    console.log(userInput.value, emailInput.value);
}
//# sourceMappingURL=signIn.js.map