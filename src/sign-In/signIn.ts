export function logInBtnClick() {
  const navbarToggleBtn = document.getElementById("navbarToggleBtn") as HTMLButtonElement;
  navbarToggleBtn.addEventListener("click", function () {
    const navBarNav = document.getElementById("navBarNav") as HTMLDivElement;
    navBarNav.classList.toggle("show");
  });
  const signInOutLi = document.getElementById("signInOutLi") as HTMLLIElement;

  const signInButton = document.createElement("button") as HTMLButtonElement;
  signInButton.id = "signInButtonNavBar";
  signInButton.innerText = "Sign In";
  signInButton.setAttribute("type", "button");
  signInButton.setAttribute("class", " nav-link btn btn-outline-primary btn-sm");
  signInButton.setAttribute("data-bs-toggle", "modal");
  signInButton.setAttribute("data-bs-target", "#modalSignIn");
  signInOutLi.appendChild(signInButton);

  signInButton.addEventListener("click", logIn);
}

function logIn(): void {

  const userInput = document.getElementById("userName") as HTMLInputElement;
  const emailInput = document.getElementById("floatingInput") as HTMLInputElement;
  const passwordInput1 = document.getElementById("floatingPassword1") as HTMLInputElement;
  const passwordInput2 = document.getElementById("floatingPassword2") as HTMLInputElement;
  const signInBtn = document.getElementById("signInButton") as HTMLButtonElement;
  const signOutBtn = document.getElementById("signOutBtn") as HTMLButtonElement;
  const showPassBtn = document.getElementById("eye1") as HTMLElement;
  const showPassBtn1 = document.getElementById("eye2") as HTMLElement;

  // Function to create an error message element
  function createErrorMessage(message: string): HTMLDivElement {
    const alertMessage = document.createElement('div');
    alertMessage.innerHTML = `<div class="z-3 position-fixed bottom-0 end-0 alert alert-info alert-dismissible fade show z-5" role="alert">
    <strong><i class="fa-regular fa-bell"></i> Hey!</strong> ${message}.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    const mainContainer = document.querySelector('#modalSignIn');
    mainContainer?.prepend(alertMessage);
    return alertMessage;
  }
  // Function to check if a field value is valid
  function isFieldValid(value: string, minLength: number, maxLength: number, regex: RegExp): boolean {
    return value.trim().length >= minLength && value.trim().length <= maxLength && regex.test(value);
  }
  // Function to validate the email format
  function validateEmail(email: string): boolean {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  }

  // Function to validate the password format
  function validatePassword(password: string): boolean {
    const passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,}$/;
    return passwordRegex.test(password);
  }

  // Function to validate the form
  function validateForm(): void {
    const userName = userInput.value;
    const email = emailInput.value;
    const password = passwordInput1.value;
    const passwordConfirm = passwordInput2.value;

    const isUserNameValid = isFieldValid(userName, 5, 20, /^\S+$/);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const doPasswordsMatch = password === passwordConfirm;

    const boxItem = document.getElementById("userName") as HTMLInputElement;
    const boxItemEmail = document.getElementById("floatingInput") as HTMLInputElement;
    const boxItemPass = document.getElementById("floatingPassword1") as HTMLInputElement;
    const boxItemPass1 = document.getElementById("floatingPassword2") as HTMLInputElement;
    const errorUser = createErrorMessage("Please fill in the User Name field with your name.");
    const errorEmail = createErrorMessage("Please fill in the email field with your valid email.");
    const errorPass = createErrorMessage("Please fill in the password field with your password.");
    const errorPass1 = createErrorMessage("Please fill in the verify password field with your password to verify it");

    if(isUserNameValid && isEmailValid && isPasswordValid && doPasswordsMatch){
      const signInBtn = document.getElementById("signInButton") as HTMLButtonElement;
      signInBtn.classList.remove("disabled");
    } else {
      const signInBtn = document.getElementById("signInButton") as HTMLButtonElement;
      signInBtn.classList.add("disabled");
    }

    // Update error messages
    updateErrorMessage(isUserNameValid, boxItem, errorUser);
    updateErrorMessage(isEmailValid, boxItemEmail, errorEmail);
    updateErrorMessage(isPasswordValid, boxItemPass, errorPass);
    updateErrorMessage(doPasswordsMatch, boxItemPass1, errorPass1);
  }

  // Function to update the error message display
  function updateErrorMessage(isValid: boolean, container: HTMLInputElement, errorMessage: HTMLDivElement): void {
    if (!isValid) {
      container.appendChild(errorMessage);
    } else if (errorMessage.parentNode === container) {
      container.removeChild(errorMessage);
    }
  }

  // Function to handle the login event
  function handleLogin(event: Event): void {
    event.preventDefault();

    const userName = userInput.value;
    const email = emailInput.value;
    const password = passwordInput1.value;
    const passwordConfirm = passwordInput2.value;
    const modalSignIn = document.getElementById("modalSignIn") as HTMLDivElement;

    if (password !== passwordConfirm) {
      // Passwords do not match, you can show an error message here
      alert("Passwords do not match")

      return;
    }
    localStorage.setItem("userName", userName);
    localStorage.setItem("email", email);
    // modalSignIn.classList.remove("show");
    modalSignIn.classList.add("modal")

    console.log(userInput.value, emailInput.value, )
    const signInOutLi = document.getElementById("signInOutLi") as HTMLLIElement;
    const userButton = document.getElementById("User") as HTMLButtonElement;
    if (userButton) {
      userButton.setAttribute("class", "btn btn-primary");
      userButton.textContent = userName;
      signInOutLi.insertAdjacentElement("afterend", userButton);

    }

  }

  // Function to handle the logout event
  function handleLogout(): void {
    const modalSignIn = document.getElementById('modalSignIn') as HTMLDivElement;
    const backdrop = document.querySelector('.modal-backdrop.fade.show');

    if (modalSignIn) {
    modalSignIn.style.display = 'none';
    modalSignIn.setAttribute('aria-hidden', 'true');
    modalSignIn.setAttribute('aria-modal', 'false');
    modalSignIn.removeAttribute('aria-labelledby');
    modalSignIn.removeAttribute('role');
    }
    if (backdrop) {
      backdrop.parentNode?.removeChild(backdrop);
    }
  }

  // AddeventListeners
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
  //function to show the password Input
  function togglePasswordVisibility1(): void {
    if (passwordInput1.type === "password") {
      showPassBtn.classList.remove("bi-eye-slash");
      showPassBtn.classList.add("bi-eye-fill");
      passwordInput1.type = "text";
    } else {
      showPassBtn.classList.remove("bi-eye-fill");
      showPassBtn.classList.add("bi-eye-slash");
      passwordInput1.type = "password";
    }
  }
  //function to show verify password Input
  function togglePasswordVisibility2(): void {
    if (passwordInput2.type === "password") {
      showPassBtn1.classList.remove("bi-eye-slash");
      showPassBtn1.classList.add("bi-eye-fill");
      passwordInput2.type = "text";
    } else {
      showPassBtn1.classList.remove("bi-eye-fill");
      showPassBtn1.classList.add("bi-eye-slash");
      passwordInput2.type = "password";
    }
  }

}
