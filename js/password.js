/**
 * Renders the forgot password page.
 */
function renderForgotPassword() {
  resetContent();
  document.getElementById("loginContainer").innerHTML = renderForgotPasswordHTML();
}

/**
 * Generates the HTML content for the forgot password page.
 * @returns {string} The HTML content.
 */
function renderForgotPasswordHTML() {
  const isSmall = isSmallScreen();
  const imageClass = isSmall ? "logo smaller" : "logo";
  const titleClass = isSmall ? "font-61 larger" : "font-61";

  return /*html*/ `<img class="${imageClass}" src="./assets/img/LogoJoinBig.png" alt="Logo">

  <div class="big-container">
       <form class="password-container">
           <a href="index.html"><img id="goBackArrow" class="go-back-arrow" src="./assets/img/go-back-arrow-blue.png" onclick="history.back()"></a>
           <h1 class="${titleClass}">I forgot my password</h1>
           <img class="blue-line-horizontal" src="./assets/img/blue-line-horizontal.png">
           <span class="font-21 font-weight-400">
               Don't worry! We will send you an email with the instructions to reset your password.
           </span>
           <div class="input-container">
               <div class="input-field">
                   <input required class="input" type="email" name="email" placeholder="E-Mail">
                   <img src="./assets/img/email-icon.png">
               </div>
               <button onclick="showEmailSentMessage()" type="button" class="button-dark login-btn">Send me the email</button>
           </div>
       </form>
   </div>

   <div id="emailSentDiv" class="email-sent d-none">
       <img class="slide-in-responsive" src="./assets/img/emailSent.png" alt="email sent">
   </div>`;
}

/**
 * Shows the email sent message.
 */
function showEmailSentMessage() {
  const emailSentDiv = document.getElementById("emailSentDiv");
  emailSentDiv.classList.remove("d-none");

  if (isSmallScreen()) {
    emailSentDiv.classList.add("smaller");
    emailSentDiv.style.animation = "none";
    emailSentDiv.style.position = "fixed";
    emailSentDiv.style.top = "50%";
    emailSentDiv.style.left = "50%";
    emailSentDiv.style.transform = "translate(-50%, -50%)";
    setTimeout(() => {
      emailSentDiv.classList.add("d-none");
      renderResetPassword();
    }, 2000);
  } else {
    emailSentDiv.style.animation = "slide-up 1.0s forwards";
    setTimeout(() => {
      emailSentDiv.classList.add("d-none");
      renderResetPassword();
    }, 2000);
  }
}

/**
 * Renders the reset password page.
 */
function renderResetPassword() {
  resetContent();
  document.getElementById("loginContainer").innerHTML = renderResetPasswordHTML();
}

/**
 * Generates the HTML content for the reset password page.
 * @returns {string} The HTML content.
 */
function renderResetPasswordHTML() {
  const isSmall = isSmallScreen();
  const imageClass = isSmall ? "logo smaller" : "logo";
  const titleClass = isSmall ? "font-61 larger" : "font-61";

  return /*html*/ `<img class="${imageClass}" src="./assets/img/LogoJoinBig.png" alt="Logo">

   <div class="big-container">
       <form class="password-container">
           <a href="#"><img id="goBackArrow" class="go-back-arrow" src="./assets/img/go-back-arrow-blue.png" alt="go back" onclick="renderForgotPassword()"></a>
           <h1 class="${titleClass}">Reset your password</h1>
           <img class="blue-line-horizontal" src="./assets/img/blue-line-horizontal.png">
           <span class="font-21 font-weight-400">Change your account password here.</span> <br>
           <div style="width: 80%" class="input-field">
               <input class="input" type="password" name="password" placeholder="New password">
           </div>
           <div style="margin-top: -20px; width: 80%" class="input-field">
               <input class="input" type="password" name="password" placeholder="Confirm password">
           </div>

           <button type="submit" class="button-dark login-btn" onclick="showResetPasswordMessage()">Continue</button>
       </form>
   </div>
   <div id="resetPasswordDiv" class="email-sent d-none">
      <img  class="slide-in-responsive"src="./assets/img/resetPassword.png" alt="reset password">
   </div>`;
}

/**
 * Shows the reset password message.
 */
function showResetPasswordMessage() {
  const resetPasswordDiv = document.getElementById("resetPasswordDiv");
  resetPasswordDiv.classList.remove("d-none");

  if (isSmallScreen()) {
    resetPasswordDiv.classList.add("smaller");
    resetPasswordDiv.style.animation = "none";
    resetPasswordDiv.style.position = "fixed";
    resetPasswordDiv.style.top = "50%";
    resetPasswordDiv.style.left = "50%";
    resetPasswordDiv.style.transform = "translate(-50%, -50%)";
    setTimeout(() => {
      resetPasswordDiv.classList.add("d-none");
      renderLogin();
    }, 2000);
  } else {
    resetPasswordDiv.style.animation = "slide-up 1.0s forwards";
    setTimeout(() => {
      resetPasswordDiv.classList.add("d-none");
      renderLogin();
    }, 2000);
  }
} 

/**
 * Checks if the screen size is smaller than 800px.
 * @returns {boolean} True if the screen size is smaller than 800px, false otherwise.
 */
function isSmallScreen() {
  return window.innerWidth < 800;
}


// Function to update the "Go Back" arrow image
function updateGoBackArrow() {
    const goBackArrow = document.getElementById("goBackArrow");
  
    // Check the screen width
    if (window.innerWidth < 800) {
      goBackArrow.src = "./assets/img/go-back.png";
    } else {
      goBackArrow.src = "./assets/img/go-back-arrow-blue.png";
    }
  }
  
  // Event listener for window resize
  window.addEventListener("resize", updateGoBackArrow);
  