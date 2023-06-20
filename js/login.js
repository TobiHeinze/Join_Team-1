/**
 * This function loads the login page
 */
function renderLogin() {
  resetContent();
  document.getElementById("loginContainer").innerHTML = renderLoginHTML();
  loadUsers();
}


/**
 * Attempts to log in the user.
 * If the password is incorrect, clears the password input field,
 * Displays an error message, and updates the placeholder.
 */
async function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;
  let contentArray = await getItem(key);

  if (contentArray && contentArray.users) {
    let users = contentArray.users;
    let userIndex = users.email.indexOf(email);

    if (userIndex !== -1 && users.password[userIndex] === password) {
      showSuccessMessage(users.name[userIndex]);
      renderSummary(userIndex);
      
    } else {
      document.getElementById("loginPassword").value = "";
      document.getElementById("loginPassword").placeholder = "Please try again";
      document.getElementById("passwordError").innerText = "Wrong password";
    }
  } 
}


/**
 * Creates the message container element.
 * @returns {HTMLDivElement} The created message container element.
 */
function createMessageContainer() {
  const messageContainer = document.createElement("div");
  Object.assign(messageContainer.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "9999"
  });
  return messageContainer;
}


/**
 * Creates and returns the message text element.
 * @param {string} name - The name to be displayed in the message.
 * @returns {HTMLDivElement} The created message text element.
 */
function showMessageText(name) {
  const messageText = createMessageText(name);
  return messageText;
}

/**
 * Creates and returns the message text element with the greeting and name.
 * @param {string} name - The name to be displayed in the message.
 * @returns {HTMLDivElement} The created message text element.
 */
function createMessageText(name) {
  const messageText = document.createElement("div");
  Object.assign(messageText.style, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  });

  const greetingText = createGreetingText();
  const nameText = createNameText(name);

  messageText.appendChild(greetingText);
  messageText.appendChild(nameText);

  return messageText;
}

/**
 * Creates and returns the greeting text element.
 * @returns {HTMLSpanElement} The created greeting text element.
 */
function createGreetingText() {
  const greetingText = document.createElement("span");
  Object.assign(greetingText.style, {
    fontWeight: "500",
    fontSize: "30px"
  });
  greetingText.innerText = getTime() + ",";

  return greetingText;
}

/**
 * Creates and returns the name text element.
 * @param {string} name - The name to be displayed in the message.
 * @returns {HTMLSpanElement} The created name text element.
 */
function createNameText(name) {
  const nameText = document.createElement("span");
  Object.assign(nameText.style, {
    color: "rgb(41, 171, 226)",
    fontWeight: "600",
    fontSize: "50px",
    textAlign: "center"
  });
  nameText.innerText = name;

  return nameText;
}


/**
 * Shows a success message with the given name.
 * @param {string} name - The name to be displayed in the success message.
 */
function showSuccessMessage(name) {
  // Check the screen width
  if (window.innerWidth <= 800) {
    const messageContainer = createMessageContainer();
    const messageText = showMessageText(name);

    messageContainer.appendChild(messageText);
    document.body.appendChild(messageContainer);

    setTimeout(() => {
      document.body.removeChild(messageContainer);
    }, 2000);
  }
}


/**
 * Renders the login HTML content.
 * @returns {string} The HTML content for the login page.
 */
function renderLoginHTML() {
  return /*html*/ `
    <div class="logo-container" id="login-container">
      <form class="login-container">
        <h1 class="font-61">Log in</h1>
        <img class="blue-line-horizontal" src="./assets/img/blue-line-horizontal.png">
        <div class="input-container">
          <div class="input-field">
            <input id="loginEmail" required class="input" type="email" name="email" id="login-email-input" placeholder="E-Mail">
            <img src="./assets/img/email-icon.png">
          </div>
          <div class="input-field">
            <input id="loginPassword" required class="input togglePassword" type="password" name="password" id="loginPasswordInput" placeholder="Password">
            <img class="toogleImage"  src="./assets/img/password-icon.png">
          </div>
          <div id="passwordError" class="error-message"></div>
        </div>
        <div class="remember-check">
          <div class="check">
              <input type="checkbox" id="myCheckbox">Remember me
          </div>
          <a onclick="renderForgotPassword()"  href="#">Forgot my password</a>
        </div>
        <div class="login-buttons">
          <button onclick="login(); return false;" class="btn-dark login-btn">Log in</button>
          <div onclick="renderSummary()" class="btn-bright guest-login">Guest Log in</div>
        </div>
      </form>
    </div>
    <div>
      <div id="not-a-join" class="not-a-join">
        <span>Not a Join user?</span>
        <div onclick="renderSignUp()" class="btn-dark">Sign up</div>
      </div>
    </div>
    <img class="animate-logo moving-logo" src="./assets/img/LogoJoinBig.png">
    <div class="background animate-background"></div>
  `;
}