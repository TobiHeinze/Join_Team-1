/**
 * This function renders the contacts area
 * 
 
async function renderUsers() {
    contentArray = await getItem(key);
    resetContent();
    document.getElementById("contactsContent").innerHTML = renderContactsHTML();
    updateContactsHTML();
    document.getElementById('contactsDescriptionContent').innerHTML = renderContactDescriptionHTMLHeader();
}
*/

/**
 * This function renders the sign up area
 *
 */
function renderSignUp() {
  resetContent();
  document.getElementById("loginContainer").innerHTML = renderSignUpHTML();
}

async function loadUsers() {
    try {
        contentArray = await getItem(key);
    } catch(e){
        console.error('Loading error:', e);
    }
}
  

/**
 * This function adds a new user
 *
 */
async function register() {
  let registerButton = document.getElementById("registerButton");
  registerButton.disabled = true;
  let name = document.getElementById("registerName").value;
  let email = document.getElementById("registerEmail").value;
  let password = document.getElementById("registerPassword").value;

  // Fügt den neuen Benutzer zum contentArray hinzu
  contentArray.users.name.push(name);
  contentArray.users.email.push(email);
  contentArray.users.password.push(password);

  try {
    // Speichert das aktualisierte contentArray auf dem Server
    await setItem(key,contentArray);

    //Zeigt eine Erfolgsmeldung an
    alert("Registrierung erfolgreich!");

    // Ruft die renderLogin-Funktion auf
    renderLogin();
  } catch (error) {
    // Wenn Fehler, zeige eine Fehlermeldung an
    console.error("Fehler bei der Registrierung:", error);
    alert("Fehler bei der Registrierung. Bitte versuche es erneut.");
  }

  registerButton.disabled = false;
}

function renderSignUpHTML() {
  return /*html*/ ` <img class="logo" src="./assets/img/LogoJoinBig.png" alt="Logo">
     
         <div class="big-container">
             <form onsubmit= "register(); return false;" class="password-container">
                 <a href="#"><img class="go-back-arrow" src="./assets/img/go-back.png" alt="go back"
                         onclick="renderLogin()"></a>
                 <h1 class="font-61">Sign Up</h1>
                 <img class="blue-line-horizontal"  src="./assets/img/blue-line-horizontal.png">
                 <div class="input-container">
                 <div class="name">
                          <div class="input-field">
                              <input id="registerName" class="input" type="text" placeholder="Name" required>
                              <img src="/assets/img/charakter-icon.png" alt="charakter-img">
                          </div>
  
          <div class="input-field">
              <input id="registerEmail" required class="input" type="email" name="email" placeholder="E-Mail">
              <img src="./assets/img/email-icon.png">
          </div>
                 
                 
          <div class="input-field">
              <input id="registerPassword" required class="input togglePassword" type="password" name="password" placeholder="Password">
              <img class="toogleImage"  src="./assets/img/password-icon.png">
         </div>
    
                 <button id="registerButton" type="submit" style="margin-left:40px" class="button-dark login-btn">Sign Up</button>
                 
             </form>
     </div>
    
     <div id="resetPassword"><img class="d-none"  src="./assets/img/resetPassword.png" alt="reset password"></div>
    `;
}
