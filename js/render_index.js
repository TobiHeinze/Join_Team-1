function renderLogin() {
    document.getElementById("login-container").innerHTML = /*html*/ `
        <form class="login-container" >
          <h1>Log in</h1>
          <div class="input-container">
              <div class="input-field">
                  <input required class="input" type="email" name="email" id="login-email-input" placeholder="Email">
                  <img src="./assets/img/email-icon.png">
              </div>
              
              <div class="input-field">
                  <input required class="input togglePassword" type="password" name="password" id="loginPasswordInput" placeholder="Password">
                  <img class="toogleImage"  src="./assets/img/password-icon.png">
             </div>
            </div>
       
          <div class="remember-check">
              <div class="check"><img id="loginCheckbox" src="./assets/img/unchecked.png">Remember me</div>
              <a  href="#">Forgot my password</a>
          </div>
          <div class="login-buttons">
              <button class="btn-dark login-btn">Log in</button>
              <div class="btn-bright guest-login">Guest Log in</div>
          </div>
        </form>
    `;
}