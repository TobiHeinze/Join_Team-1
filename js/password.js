function renderForgotPassword() {
  resetContent();
  document.getElementById("loginContainer").innerHTML =
    renderForgotPasswordHTML();
}

function renderForgotPasswordHTML() {
  return /*html*/ `<img class="logo" src="./assets/img/LogoJoinBig.png" alt="Logo">

<div class="big-container">
     
         <form class="password-container">
             <a href="index.html"><img class="go-back-arrow" src="./assets/img/go-back.png"
                     onclick="history.back()"></a>

             <h1 style=" font-family: 'Inter', sans-serif;">I forgot my password</h1>

             <img src="./assets/img/blue-line-mobile.png">
             <span class="font-21 font-weight-400">
                 Don't worry! We will send you an email with the instructions to
                 reset your password.
             </span>
             <div class="input-container">
                 <div class="input-field">
                     <input required class="input" type="email" name="email" placeholder="E-Mail">
                     <img src="./assets/img/email-icon.png">
                 </div>
                 <button onclick="renderResetPassword()" type="submit" class="button-dark login-btn">Send me the email</button>
                 </form>
</div>
                 <img class="d-none" src="./assets/img/emailSent.png" alt="email sent">
            
 `;
}

function renderResetPassword() {
  resetContent();
  document.getElementById("loginContainer").innerHTML =
    renderResetPasswordHTML();
}

function renderResetPasswordHTML() {
  return /*html*/ ` <img class="logo" src="./assets/img/LogoJoinBig.png" alt="Logo">
 
     <div class="big-container">
         <form class="password-container">
             <a href="#"><img class="go-back-arrow" src="./assets/img/go-back.png" alt="go back"
                     onclick="renderForgotPassword()"></a>
             <h1 style="font-family:'Inter', sans-serif;">Reset your password</h1>
             <img src="./assets/img/blue-line-mobile.png">
             <span class="font-21 font-weight-400">Change your account password here.</span>
             <div class="input-field ">
                 <input class="input" type="password" name="password" placeholder="New password">
             </div>
             <div class="input-field ">
                 <input class="input" type="password" name="password" placeholder="Confirm password">
             </div>

             <button type="submit" class="button-dark login-btn">Continue</button>
             
         </form>
 </div>

 <div id="resetPassword"><img class="d-none"  src="./assets/img/resetPassword.png" alt="reset password"></div>
`;
}
