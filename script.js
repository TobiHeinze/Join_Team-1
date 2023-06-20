/**
 * Indicates whether the mini menu is currently open or closed.
 * @type {boolean}
 */
let isMiniMenuOpen = false;


/**
 * Holds the reference to the currently selected element on.
 * @type {HTMLElement}
 */
let selectedElement = null;


/**
 * This function resets all divs we fill content in
 *
 */
function resetContent() {
  resetInnerHtml();
  document.getElementById('content').classList.remove('d-none');
  document.getElementById("popUpDiv").classList.add("d-none");
  document.getElementById("popUpDiv").classList.remove("d-flex");
  document.getElementById("popUpDiv2").classList.add("d-none");
  document.getElementById("popUpDiv2").classList.remove("d-flex");
  document.getElementById("contactsChangeDescriptionContent").style.display = "none";
}


/**
 * This function smallers the code in the resetContent function and just clears a lot innerhtml content
 * 
 */
function resetInnerHtml() {
  document.getElementById("content").innerHTML = "";
  document.getElementById("contactsChangeDescriptionContent").innerHTML = "";
  document.getElementById("contactsDescriptionContent").innerHTML = "";
  document.getElementById("contactsContent").innerHTML = "";
  document.getElementById("popUpDiv").innerHTML = "";
  document.getElementById("popUpDiv2").innerHTML = "";
  document.getElementById("loginContainer").innerHTML = "";
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


/**
 *
 *
 * This function animate a slide from the right to the left
 *
 * @returns the animation effect
 */
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
 * This function removes the selected class from all and give it to the current opened page
 * 
 * @param {*} site its a given id we need to remove the selected class
 */
function grayBackgroundForCurrentPage(site) {
  document.getElementById('summaryBackgroundSidebar').classList.remove('selected');
  document.getElementById('addTaskBackgroundSidebar').classList.remove('selected');
  document.getElementById('boardBackgroundSidebar').classList.remove('selected');
  document.getElementById('contactsBackgroundSidebar').classList.remove('selected');
  document.getElementById('legalBackgroundSidebar').classList.remove('selected');
  document.getElementById(site).classList.add('selected');
}