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
  document.getElementById("contactsChangeDescriptionContent").style.display =
    "none";
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
