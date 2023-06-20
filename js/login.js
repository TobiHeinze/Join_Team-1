/**
 * This function loads the login page
 *
 */
function renderLogin() {
  resetContent();
  document.getElementById("loginContainer").innerHTML = renderLoginHTML();
  loadUsers();
}


/**
 * Attempts to log in the user.
 * If the password is incorrect, clears the password input field,
 * displays an error message, and updates the placeholder.
 */
async function login() {
  /**
   * Get the email and password entered by the user.
   * @type {string}
   */
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  /**
   * Retrieve the content array from storage.
   */
  let contentArray = await getItem(key);

  // Check if the contentArray and users property exist
  if (contentArray && contentArray.users) {
    let users = contentArray.users;

    // Find the index of the email in the users array
    let userIndex = users.email.indexOf(email);

    // Check if the email exists in the users array and the password matches
    if (userIndex !== -1 && users.password[userIndex] === password) {
      // Display a success message
      showSuccessMessage(users.name[userIndex]);
      renderSummary(userIndex);
      
    } else {
      // Clear the password input field
      document.getElementById("loginPassword").value = "";

      // Update the placeholder and display the error message
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
  greetingText.style.fontWeight = "500";
  greetingText.style.fontSize = "30px";

  const nameText = document.createElement("span");
  nameText.innerText = name;
  nameText.style.color = "rgb(41, 171, 226)";
  nameText.style.fontWeight = "600";
  nameText.style.fontSize = "50px";
  nameText.style.textAlign = "center"; 

  messageText.appendChild(greetingText);
  messageText.appendChild(nameText);

  return messageText;
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
        <!-- Input fields for email and password -->
        <div class="input-container">
          <div class="input-field">
            <input id="loginEmail" required class="input" type="email" name="email" id="login-email-input" placeholder="E-Mail">
            <img src="./assets/img/email-icon.png">
          </div>
          <div class="input-field">
            <input id="loginPassword" required class="input togglePassword" type="password" name="password" id="loginPasswordInput" placeholder="Password">
            <img class="toogleImage"  src="./assets/img/password-icon.png">
          </div>
          <!-- Display error message for wrong password -->
          <div id="passwordError" class="error-message"></div>
        </div>

        <!-- Checkbox for "Remember me" and link for password recovery -->
        <div class="remember-check">
          <div class="check">
            <div class="checkbox">
              <input type="checkbox" id="myCheckbox">
              <label for="myCheckbox"></label>
            </div>
            Remember me
          </div>
          <a onclick="renderForgotPassword()"  href="#">Forgot my password</a>
        </div>
        
        <!-- Buttons for login and guest login -->
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