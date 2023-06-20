/**
 * This function renders the sign up area
 */
function renderSignUp() {
  resetContent();
  document.getElementById("loginContainer").innerHTML = renderSignUpHTML();
  updateGoBackArrow();
}


/**
 * Asynchronously loads user data from storage.
 * @returns {Promise<void>} A Promise that resolves once the user data is loaded.
 */
async function loadUsers() {
  try {
    contentArray = await getItem(key);
  } catch (error) {
    console.error("Loading error:", error);
  }
}


/**
 * Adds a new user.
 */
async function register() {
  const registerButton = document.getElementById("registerButton");
  registerButton.disabled = true;

  const name = document.getElementById("registerName").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  contentArray.users.name.push(name);
  contentArray.users.email.push(email);
  contentArray.users.password.push(password);
  contentArray.users.photo.push("guest");

  try {
    await setItem(key, contentArray);
    renderLogin();
  } finally {
    registerButton.disabled = false;
  }
}


/**
 * This function renders the HTML for the Sign Up page
 */
function renderSignUpHTML() {
  return /*html*/ `
    <img class="logo" src="./assets/img/LogoJoinBig.png" alt="Logo">
    <div class="big-container">
        <form onsubmit="register(); return false;" class="password-container">
            <a href="#"><img id="goBackArrow" class="go-back-arrow" src="./assets/img/go-back-arrow-blue.png" alt="go back"
                    onclick="renderLogin()"></a>
            <h1 class="font-61">Sign Up</h1>
            <img class="blue-line-horizontal" src="./assets/img/blue-line-horizontal.png">
            <div class="input-container">
                <div class="name">
                    <div class="sign-up-input-field">
                        <input id="registerName" class="input" type="text" placeholder="Name" required>
                        <img src="./assets/img/charakter-icon.png" alt="character-img">
                    </div>
                    <div class="sign-up-input-field">
                        <input id="registerEmail" required class="input" type="email" name="email" placeholder="E-Mail">
                        <img src="./assets/img/email-icon.png">
                    </div>
                    <div class="sign-up-input-field">
                        <input id="registerPassword" required class="input togglePassword" type="password"
                            name="password" placeholder="Password">
                        <img class="toggleImage" src="./assets/img/password-icon.png">
                    </div>
                    <button id="registerButton" type="submit" 
                        class="button-dark login-button">Sign Up</button>
                </div>
            </div>
        </form>
    </div>
`;
}
