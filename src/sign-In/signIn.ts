export function logInBtnClick() {
  const navbarToggleBtn = document.getElementById("navbarToggleBtn") as HTMLButtonElement;
  navbarToggleBtn.addEventListener("click", function () {
    const navBarNav = document.getElementById("navBarNav") as HTMLDivElement;
    navBarNav.classList.toggle("show");
  });
  const signInOutLi = document.getElementById("signInOutLi") as HTMLLIElement;

  const signInButtonNavBar = document.createElement("button") as HTMLButtonElement;
  signInButtonNavBar.id = "signInButtonNavBar";
  signInButtonNavBar.innerText = "Sign In";
  signInButtonNavBar.setAttribute("type", "button");
  signInButtonNavBar.setAttribute("class", " nav-link btn btn-outline-primary btn-sm");
  signInButtonNavBar.setAttribute("data-bs-toggle", "modal");
  signInButtonNavBar.setAttribute("data-bs-target", "#modalSignIn");
  signInOutLi.appendChild(signInButtonNavBar);
  const signOutButton = document.createElement("button") as HTMLButtonElement;
  signOutButton.id = "signOutBtn";
  signOutButton.innerText = "Sign Out";
  signOutButton.setAttribute("type", "button");
  signOutButton.setAttribute("class", " nav-link btn btn-outline-primary btn-sm");
  signInOutLi.insertAdjacentElement("afterend", signOutButton);

  signInButtonNavBar.addEventListener("click", logIn);
}

export function logIn(): void {
  console.log("sign-in process");

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
    const mainContainer = document.querySelector('#modalSignIn') as HTMLDivElement;
    mainContainer.prepend(alertMessage);
    console.log(message)
    return alertMessage;
  }

  // Function to check if a field value is valid
  function isFieldValid(value: string, minLength: number, maxLength: number, regex: RegExp): boolean {
    return value.trim().length >= minLength && value.trim().length <= maxLength && regex.test(value);
  }

  // Function to validate the email format
  function validateEmail(email: string): boolean {
    const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email);
  }

  // Function to validate the password format
  function validatePassword(password: string): boolean {
    const passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    return passwordRegex.test(password);
  }

  // Function to validate the form
  function validateForm(): void {
    const userName = userInput.value;
    const email = emailInput.value;
    const password = passwordInput1.value;
    const passwordConfirm = passwordInput2.value;

    const isUserNameValid = isFieldValid(userName, 5, 20, /\s/);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const doPasswordsMatch = password === passwordConfirm;

    const boxItem = document.getElementById("userName") as HTMLInputElement;
    const boxItemEmail = document.getElementById("floatingInput") as HTMLInputElement;
    const boxItemPass = document.getElementById("floatingPassword1") as HTMLInputElement;
    const boxItemPass1 = document.getElementById("floatingPassword2") as HTMLInputElement;
    const errorUser = createErrorMessage("This user name should be complete");
    const errorEmail = createErrorMessage("The email is not properly formatted");
    const errorPass = createErrorMessage("This password is not properly formatted");
    const errorPass1 = createErrorMessage("These fields don't match");

    if (isUserNameValid && isEmailValid && isPasswordValid && doPasswordsMatch) {
      signInBtn.disabled = true;
    } else {
      signInBtn.disabled = false;
    }
  }

  // Function to handle the login event
  function handleLogin(event: Event): void {
    validateForm();
    event.preventDefault();
    const userName = userInput.value;
    const email = emailInput.value;
    const password = passwordInput1.value;
    const passwordConfirm = passwordInput2.value;

    if (password !== passwordConfirm) {
      // Passwords do not match, you can show an error message here
      alert("Passwords do not match");
      return;
    }
    localStorage.setItem("userName", userName);
    localStorage.setItem("email", email);
  }

  // Function to handle the logout event
  function handleLogout(): void {
    // Show login form after logoff
  }

  // AddeventListeners
  if (signInBtn && signOutBtn && showPassBtn && showPassBtn1 && userInput && emailInput && passwordInput1 && passwordInput2) {
    signInBtn.addEventListener("click", handleLogin);
    signOutBtn.addEventListener("click", handleLogout);
    showPassBtn.addEventListener("click", togglePasswordVisibility1);
    showPassBtn1.addEventListener("click", togglePasswordVisibility2);

    userInput.addEventListener("input", validateForm);
    emailInput.addEventListener("input", validateForm);
    passwordInput1.addEventListener("input", validateForm);
    passwordInput2.addEventListener("input", validateForm);
  }

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
