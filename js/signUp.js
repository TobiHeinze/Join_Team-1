/**
 * This function renders the sign up area
 *
 */
function renderSignUp() {
  resetContent();
  document.getElementById("loginContainer").innerHTML = renderSignUpHTML();
  updateGoBackArrow();
}

// Event listener for window resize
window.addEventListener("resize", updateGoBackArrow);

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

  // Add the new user to the contentArray
  contentArray.users.name.push(name);
  contentArray.users.email.push(email);
  contentArray.users.password.push(password);

  try {
    // Save the updated contentArray to the server
    await setItem(key, contentArray);

    // Show a success message
    alert("Registration successful!");

    // Call the renderLogin function
    renderLogin();
  } catch (error) {
    // If there is an error, show an error message
    console.error("Error registering:", error);
    alert("Error registering. Please try again.");
  }

  registerButton.disabled = false;
}

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
                    <div class="input-field">
                        <input id="registerName" class="input" type="text" placeholder="Name" required>
                        <img src="./assets/img/charakter-icon.png" alt="character-img">
                    </div>

                    <div class="input-field">
                        <input id="registerEmail" required class="input" type="email" name="email" placeholder="E-Mail">
                        <img src="./assets/img/email-icon.png">
                    </div>

                    <div class="input-field">
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
