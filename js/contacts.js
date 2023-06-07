/**
 * This function renders the contacts area
 * 
 */
function renderContacts() {
    resetContent();
    document.getElementById("contactsContent").innerHTML = renderContactsHTML();
    document.getElementById('contactsDescriptionContent').innerHTML = renderContactDescriptionHTMLHeader();
}


/**
 * This function is checking if the window size is smaller than 800px, then it clears a div from the contact description area
 * 
 */
window.addEventListener('resize', function () {
    if (window.innerWidth < 800) {
        document.getElementById("contactsChangeDescriptionContent").innerHTML = "";
    }
});


/**
 * This function renders the contact decriptions
 * 
 */
function renderContactDescription() {
    if (window.innerWidth > 800) {
        document.getElementById("contactsChangeDescriptionContent").innerHTML = ``;
        document.getElementById('contactsChangeDescriptionContent').style.display = 'flex';
        slideInContact();
        document.getElementById("contactsChangeDescriptionContent").innerHTML = renderContactDescriptionHTML();
    } else if (window.innerWidth < 800) {
        resetContent();
        document.getElementById("content").innerHTML = renderContactDescriptionHTML();
        document.getElementById("ContactDescriptionHeader").classList.remove('d-none');
    }
}


/**
 * This function is animate the slide effect for the contact area
 * 
 * @returns the animation
 */
function slideInContact() {
    return contactsChangeDescriptionContent.animate(
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


/**
 * This function opens the add contact area to add a new contact
 * 
 */
function addNewContact() {
    document.getElementById('popUpDiv').classList.remove('d-none');
    document.getElementById('popUpDiv').classList.add('d-flex');
    document.getElementById('popUpDiv').classList.add('show-popup');
    slideInPopUp();
    document.getElementById('popUpDiv').innerHTML = addNewContactHTML();
}


/**
 * This function opens the edit contact area to edit contacts
 * 
 */
function editContact() {
    document.getElementById('popUpDiv').classList.remove('d-none');
    document.getElementById('popUpDiv').classList.add('d-flex');
    slideInPopUp();
    document.getElementById('popUpDiv').innerHTML = editContactHTML();
}


/**
 * This function close the edit contact window
 * 
 */
function closeEditContact() {
    document.getElementById('popUpDiv').classList.add('d-none');
    document.getElementById('popUpDiv').classList.remove('d-flex');
    document.getElementById('popUpDiv').innerHTML = ``;
}