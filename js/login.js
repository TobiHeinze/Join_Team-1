/**
 * This function loads the login page
 *
 */
function renderLogin() {
  resetContent();
  document.getElementById("loginContainer").innerHTML = renderLoginHTML();
  loadUsers();
}

async function login() {
  try {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    let contentArray = await getItem(key);

    // Überprüfe, ob das contentArray und die users-Eigenschaft vorhanden sind
    if (contentArray && contentArray.users) {
      let users = contentArray.users;

      // Finde den Index der E-Mail-Adresse im users-Array
      let userIndex = users.email.indexOf(email);

      // Überprüfe, ob die E-Mail-Adresse im users-Array vorhanden ist und das Passwort übereinstimmt
      if (userIndex !== -1 && users.password[userIndex] === password) {
        // Zeige eine Erfolgsmeldung an
        showSuccessMessage(users.name[userIndex]);

        // Rufe die renderSummary-Funktion auf
        setTimeout(() => {
          renderSummary(userIndex);
        }, 2000);
      } else {
        throw new Error("Ungültige E-Mail-Adresse oder Passwort.");
      }
    } else {
      throw new Error(
        "Das contentArray oder die users-Eigenschaft ist nicht definiert."
      );
    }
  } catch (error) {
    console.error("Fehler beim Login:", error);
    alert("Fehler beim Login. Bitte überprüfe deine Eingaben.");
  }
}

/**
 * Creates the message container element.
 * @returns {HTMLDivElement} The created message container element.
 */
function createMessageContainer() {
  const messageContainer = document.createElement("div");
  messageContainer.style.position = "fixed";
  messageContainer.style.top = "0";
  messageContainer.style.left = "0";
  messageContainer.style.width = "100%";
  messageContainer.style.height = "100vh";
  messageContainer.style.backgroundColor = "white";
  messageContainer.style.display = "flex";
  messageContainer.style.justifyContent = "center";
  messageContainer.style.alignItems = "center";
  messageContainer.style.zIndex = "9999";

  return messageContainer;
}

/**
 * Creates and returns the message text element.
 * @param {string} name - The name to be displayed in the message.
 * @returns {HTMLDivElement} The created message text element.
 */
function showMessageText(name) {
  const messageText = document.createElement("div");
  messageText.style.display = "flex";
  messageText.style.flexDirection = "column";
  messageText.style.alignItems = "center";

  const greetingText = document.createElement("span");
  greetingText.innerText = getTime() + ",";
  greetingText.style.fontWeight = "700";
  greetingText.style.fontSize = "45px";

  const nameText = document.createElement("span");
  nameText.innerText = name;
  nameText.style.color = "rgb(41, 171, 226)";
  nameText.style.fontWeight = "700";
  nameText.style.fontSize = "64px";

  messageText.appendChild(greetingText);
  messageText.appendChild(nameText);

  return messageText;
}

/**
 * Shows a success message with the given name.
 * @param {string} name - The name to be displayed in the success message.
 */
function showSuccessMessage(name) {
  const messageContainer = createMessageContainer();
  const messageText = showMessageText(name);

  messageContainer.appendChild(messageText);
  document.body.appendChild(messageContainer);

  setTimeout(() => {
    document.body.removeChild(messageContainer);
  }, 3000);
}

function renderLoginHTML() {
  return /*html*/ `
 <div class="logo-container" id="login-container">

<form class="login-container" >
 <h1 class="font-61">Log in</h1>
 <img class="blue-line-horizontal" src="./assets/img/blue-line-horizontal.png">
 <!-- Eingabefelder für E-Mail und Passwort -->
 <div class="input-container">
     <div class="input-field">
         <input id="loginEmail" required class="input" type="email" name="email" id="login-email-input" placeholder="E-Mail">
         <img src="./assets/img/email-icon.png">
     </div>
     
     <div class="input-field">
         <input id="loginPassword" required class="input togglePassword" type="password" name="password" id="loginPasswordInput" placeholder="Password">
         <img class="toogleImage"  src="./assets/img/password-icon.png">
    </div>
 </div>

 <!-- Checkbox für "Angemeldet bleiben" und Link zur Passwortwiederherstellung -->
 <div class="remember-check">
     <div class="check"><div class="checkbox">
  <input  type="checkbox" id="myCheckbox">
  <label  for="myCheckbox"></label>
</div>
  Remember me</div>
     <a onclick="renderForgotPassword()"  href="#">Forgot my password</a>
 </div>
 
 <!-- Buttons für Einloggen und Gast-Einloggen -->
 <div class="login-buttons">
 <button onclick="login(); return false;" class="btn-dark login-btn">Log in</button>

     <div onclick="renderSummary()" class="btn-bright guest-login">Guest Log in</div>
 </div>
</form>
</div>
<div>
<div id="not-a-join " class="not-a-join ">
 <span>Not a Join user?</span>
 <div onclick="renderSignUp()" class="btn-dark ">Sign up</div>
</div>
</div>
<img class="animate-logo moving-logo " src="./assets/img/LogoJoinBig.png ">
<div class="background animate-background "></div>
 `;
}
