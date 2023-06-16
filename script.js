/**
 * This function resets all divs we fill content in
 *
 */
function resetContent() {
  document.getElementById('content').classList.remove('d-none');
  document.getElementById("content").innerHTML = "";
  document.getElementById("contactsChangeDescriptionContent").innerHTML = "";
  document.getElementById("contactsDescriptionContent").innerHTML = "";
  document.getElementById("contactsContent").innerHTML = "";
  document.getElementById("popUpDiv").classList.add("d-none");
  document.getElementById("popUpDiv").classList.remove("d-flex");
  document.getElementById("popUpDiv").innerHTML = "";
  document.getElementById("popUpDiv2").classList.add("d-none");
  document.getElementById("popUpDiv2").classList.remove("d-flex");
  document.getElementById("popUpDiv2").innerHTML = "";
  document.getElementById("loginContainer").innerHTML = "";
  document.getElementById("contactsChangeDescriptionContent").style.display = "none";
}


/**
 *
 *
 * This function animate a slide from the right to the left
 *
 * @returns the animation effect
 */
function slideInPopUp() {
  return popUpDiv.animate(
    [
      { transform: "translateX(1000px)" }, // Startposition des Popups
      { transform: "translateX(0)" }, // Endposition des Popups
    ],
    {
      duration: 250, // Animationsdauer in Millisekunden
      easing: "ease", // Easing-Funktion für den Übergangseffekt
    }
  );
}

function slideInPopUp2() {
  return popUpDiv2.animate(
    [
      { transform: "translateX(1000px)" }, // Startposition des Popups
      { transform: "translateX(0)" }, // Endposition des Popups
    ],
    {
      duration: 250, // Animationsdauer in Millisekunden
      easing: "ease", // Easing-Funktion für den Übergangseffekt
    }
  );
}


let isMiniMenuOpen = false;

/**
 * open Tooltip 'Log Out' by Click on Image Profile
 */
function openMiniMenu(clickedMiniMenu) {
  if (!isMiniMenuOpen) {
    let miniMenu = clickedMiniMenu.closest('body').querySelector('.mini-menu');
    miniMenu.classList.add('mini-menu-toggle');
    miniMenu.style.display = 'flex';
    isMiniMenuOpen = true;
  } else {
    closeMiniMenu(clickedMiniMenu);
  }
}



/**
* close MiniMenu 'Log Out' by Click on Image Profile
* 
*/
function closeMiniMenu(clickedMiniMenu) {
  miniMenu.closest('body').querySelector('.mini-menu').classList.remove('mini-menu-toggle');
  miniMenu.style.display = 'none';
  isMiniMenuOpen = false;
}



/**
 * Holds the reference to the currently selected element.
 * @type {HTMLElement}
 */
let selectedElement = null;

/**
 * Handles the click event on menu items.
 * Adds or removes the 'selected' class based on the clicked element.
 * @param {HTMLElement} element - The clicked element.
 */
function handleClick(element) {
  if (selectedElement === element) {
    // If the previously selected element is clicked again,
    // remove the 'selected' class and set selectedElement to null.
    element.classList.remove('selected');
    selectedElement = null;
  } else {
    // Remove the 'selected' class from the previously selected element (if any).
    if (selectedElement) {
      selectedElement.classList.remove('selected');
    }

    // Add the 'selected' class to the current element and set it as selectedElement.
    element.classList.add('selected');
    selectedElement = element;
  }
}



