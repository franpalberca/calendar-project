

export function logInBtnClick() {
    const signInBtn = document.getElementById("signInBtn") as HTMLButtonElement;
    signInBtn.addEventListener("click", logIn)
}

function logIn(): void {
  console.log("sign-in procces")
    // function clearConsole (){
    //   console.clear();    
    // }
    // setTimeout(clearConsole, 200)
    const containerMain = document.getElementById("generalContainer") as HTMLDivElement;
    containerMain.setAttribute("class", "container d-flex justify-content-center align-items-center");
    const formDiv = document.createElement("div") as HTMLDivElement;
    containerMain.appendChild(formDiv);
    formDiv.innerHTML = `
    <div class="sign-in-display w-100 m-1 form-div" id="formSignInDiv">
    <form id="loginForm" class="form-center" method="get">
      <img alt="" class="mb-4" src="" id="login-img" />
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
      <div class="form-item d-flex align-items-center" id="user">
        <label for="userName">UserName</label>
        <input type="text" id="userName" required minlength="5" maxlength="20" placeholder="Username" class="form-control" />
      </div>
      <div class="form-item d-flex align-items-center" id="email">
        <label for="floatingInput">Email address</label>
        <input type="email" class="form-control" id="floatingInput" required maxlength="50" placeholder="name@example.com" />
      </div>
      <div class="form-item d-flex align-items-center" id="password">
        <label for="floatingPassword1">Password</label>
        <input type="password" class="form-control" id="floatingPassword1" placeholder="Password" />
        <span id="show-password1">
          <i class="bi bi-eye-slash" id="eye1"></i>
        </span>
      </div>
      <div class="form-item d-flex align-items-center" id="confirmPass">
        <label for="floatingPassword2">Confirm Password</label>
        <input type="password" id="floatingPassword2" class="form-control" placeholder="Confirm Password" required minlength="8" maxlength="20" />
        <span id="show-password2">
          <i class="bi bi-eye-slash" id="eye2"></i>
        </span>
      </div>

      <div class="checkbox mb-3">
        <label> <input type="checkbox" value="remember-me" /> Remember me </label>
      </div>
      <button class="w-50 btn btn-lg btn-primary" type="button" id="signInBtn">Sign in</button>
      <p class="mt-5 mb-3 text-body-secondary">© 2023 Jorge Munárriz, Inc. All rights reserved.</p>
    </form>
  </div>`
        
    
    
    const userInput = document.getElementById("userName") as HTMLInputElement
    const emailInput = document.getElementById("floatingInput") as HTMLInputElement;
    const passwordInput1 = document.getElementById("floatingPassword1") as HTMLInputElement;
    const passwordInput2 = document.getElementById("floatingPassword2") as HTMLInputElement;
    const signInBtn = document.getElementById("signInBtn") as HTMLButtonElement;
    const signOutBtn = document.getElementById("signOutBtn") as HTMLButtonElement; 
    const formSignInDiv = document.getElementById("formSignInDiv") as HTMLDivElement;
    const showPassBtn = document.getElementById("eye1") as HTMLElement;
    const showPassBtn1 = document.getElementById("eye2") as HTMLElement;
  
    // Hide the main elements and show the login form
    const showLoginForm = (): void => {
      formSignInDiv.style.display = "flex" 
      
    };
  
    // Show the main elements and hide the login form
    const showMainContent = (): void => {
      formSignInDiv.style.display = "none";
     
    };
  
    // Function to handle the login event
    const handleLogin = (event: Event): void => {
      event.preventDefault();
      const userName = userInput.value;
      const email = emailInput.value;
      const password = passwordInput1.value;
      const passwordConfirm = passwordInput2.value;
  
      if (password !== passwordConfirm) {
        // Passwords do not match, you can show an error message here if you want
        return;
      }
       localStorage.setItem("userName", userName)
       localStorage.setItem("email", email)
       localStorage.setItem("password", password)
       const userButton = document.getElementById("User") as HTMLButtonElement;
       if (userButton) {
         userButton.textContent = userName;
       }
      
      showMainContent();
    };
  
    // Function to handle the logout event
    const handleLogout = (): void => {
      
  
      // Show login form after logoff
      showLoginForm();
    };
  
    showLoginForm();
  
    // AddeventListeners
    signInBtn.addEventListener("click", handleLogin);
    signOutBtn.addEventListener("click", handleLogout);
    showPassBtn.addEventListener("click", togglePasswordVisibility1);
    showPassBtn1.addEventListener("click", togglePasswordVisibility2);
  
    
    let boxItem  = document.getElementById('user') as HTMLDivElement;
    let boxItemEmail = document.getElementById('email') as HTMLDivElement;
    let boxItemPass = document.getElementById('password') as HTMLDivElement;
    let boxItemPass1 = document.getElementById('confirmPass') as HTMLDivElement;
    const errorUser = document.createElement('div') as HTMLDivElement;
    errorUser.textContent = "This field should be complete"
    errorUser.className = 'error';
    const userMsgError = errorUser;
  
    const errorEmail = document.createElement('div') as HTMLDivElement;
    errorEmail.textContent = "This field is not properly formatted"
    errorEmail.className = 'error-input';
    const emailMsgError = errorEmail;
  
    const errorPass = document.createElement('div') as HTMLDivElement;
    errorPass.className = 'error-input';
    errorPass.textContent = "This field is not properly formatted"
    const passMsgError = errorPass;
    
    const errorPass1 = document.createElement('div') as HTMLDivElement;
    errorPass1.textContent = "This fields doesn't match"
    errorPass1.className = 'error-input';
    const confPassMsgError = errorPass1;
    function validateEmail(email: string) {
      let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailReg.test(email);
    }
    function validatePass(passwordInput1: string) {
      let passReg = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
      return passReg.test(passwordInput1);
    }
    
    userInput.addEventListener('input', function() {
      let strRer = /\s/;
      let str = userInput.value;
      let total = Number(str.length);
      if (total <= 4 || total == 0 || total == undefined || str === "" || strRer.test(str)) {
        boxItem.appendChild(userMsgError)
        return false;
      } else {
        if (userMsgError && total > 4 && userMsgError.parentNode === boxItem) {
          boxItem.removeChild(userMsgError);;
        }
        return true;
      }
    });
    
    emailInput.addEventListener("input", function() {
      let email = emailInput.value;
      if (!validateEmail(email)) {
        boxItemEmail.appendChild(emailMsgError);
        return false;
      } else {
        if (emailMsgError && emailMsgError.parentNode === boxItemEmail) {
          boxItemEmail.removeChild(emailMsgError);
        }
        return true;
      }
    });
  
    
    passwordInput1.addEventListener("input", function() {
      let pass1 = passwordInput1.value;
    
      if (!validatePass(pass1)) {
        boxItemPass.appendChild(passMsgError);
        return false;
      } else {
        if (passMsgError && passMsgError.parentNode === boxItemPass) {
          boxItemPass.removeChild(passMsgError);
        }
        return true;
      }
    });
    
    passwordInput2.addEventListener("input", function verifyPasswords() {
      const password1 = passwordInput1.value;
      const password2 = passwordInput2.value;
      if (password1 !== password2) {
        boxItemPass1.appendChild(confPassMsgError);
        return false;
      } else {
        if (confPassMsgError && confPassMsgError.parentNode === boxItemPass1) {
          boxItemPass1.removeChild(confPassMsgError);
        }
        return true;
      }
    });
  
    const validateForm = (): void => {
      const userName = userInput.value;
      const email = emailInput.value;
      const password = passwordInput1.value;
      const passwordConfirm = passwordInput2.value;
  
      const isUserNameValid = userName.trim().length > 4;
      const isEmailValid = validateEmail(email);
      const isPasswordValid = validatePass(password);
      const doPasswordsMatch = password === passwordConfirm;
  
      signInBtn.disabled = !(isUserNameValid && isEmailValid && isPasswordValid && doPasswordsMatch);
    };
  
    userInput.addEventListener("input", validateForm);
    emailInput.addEventListener("input", validateForm);
    passwordInput1.addEventListener("input", validateForm);
    passwordInput2.addEventListener("input", validateForm);
  
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
  