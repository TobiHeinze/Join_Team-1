/**
 * This function resets all divs we fill content in
 * 
 */
function resetContent() {
    document.getElementById("content").innerHTML = "";
    document.getElementById("contactsChangeDescriptionContent").innerHTML = "";
    document.getElementById("contactsDescriptionContent").innerHTML = "";
    document.getElementById("contactsContent").innerHTML = "";
    document.getElementById("popUpDiv").classList.add("d-none");
    document.getElementById("popUpDiv").classList.remove("d-flex");
    document.getElementById("popUpDiv").innerHTML = "";
    document.getElementById("loginContainer").innerHTML = "";
    document.getElementById('contactsChangeDescriptionContent').style.display = 'none';
}


/**
 * This function loads the login page
 * 
 */
function renderLogin() {
    resetContent();
    document.getElementById('loginContainer').innerHTML = /*html*/`
    <div class="logo-container" id="login-container">

<form class="login-container" >
    <h1>Log in</h1>

    <!-- Eingabefelder für E-Mail und Passwort -->
    <div class="input-container">
        <div class="input-field">
            <input required class="input" type="email" name="email" id="login-email-input" placeholder="E-Mail">
            <img src="./assets/img/email-icon.png">
        </div>
        
        <div class="input-field">
            <input required class="input togglePassword" type="password" name="password" id="loginPasswordInput" placeholder="Password">
            <img class="toogleImage"  src="./assets/img/password-icon.png">
       </div>
    </div>
 
    <!-- Checkbox für "Angemeldet bleiben" und Link zur Passwortwiederherstellung -->
    <div class="remember-check">
        <div class="check"><img id="loginCheckbox" src="./assets/img/unchecked.png">Remember me</div>
        <a onclick="renderForgotPassword()"  href="#">Forgot my password</a>
    </div>
    
    <!-- Buttons für Einloggen und Gast-Einloggen -->
    <div class="login-buttons">
        <button class="btn-dark login-btn">Log in</button>
        <div onclick="renderSummary()" class="btn-bright guest-login">Guest Log in</div>
    </div>
  </form>
  
</div>
<div>
<div id="not-a-join " class="not-a-join ">
    <span>Not a Join user?</span>
    <div class="btn-dark ">Sign up</div>
</div>
</div>
<img class="animate-logo moving-logo " src="./assets/img/LogoJoinBig.png ">
<div class="background animate-background "></div>
    `;
}


/**
 * This function animate a slide from the right to the left
 * 
 * @returns the animation effect
 */
function slideInPopUp() {
    return popUpDiv.animate(
        [
          { transform: 'translateX(1000px)' }, // Startposition des Popups
          { transform: 'translateX(0)' } // Endposition des Popups
        ],
        {
          duration: 250, // Animationsdauer in Millisekunden
          easing: 'ease' // Easing-Funktion für den Übergangseffekt
        }
      );
}