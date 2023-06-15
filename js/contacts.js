/**
 * This function renders the contacts area
 * 
 */
async function renderContacts() {
    contentArray = await getItem(key);
    resetContent();
    document.getElementById('content').classList.add('d-none');
    document.getElementById("contactsContent").innerHTML = renderContactsHTML();
    updateContactsHTML();
    document.getElementById('contactsDescriptionContent').innerHTML = renderContactDescriptionHTMLHeader();
    resizeFunction();
}


/**
 * This function is checking if the window size is smaller than 800px, then it clears a div from the contact description area
 * 
 */
// window.addEventListener('resize', function () {
//     if (window.innerWidth < 800) {
//         document.getElementById("contactsChangeDescriptionContent").innerHTML = "";
//         document.getElementById('marginLeftContact').style.marginLeft = '0';
//     }
// });
window.addEventListener('resize', resizeFunction);
function resizeFunction() {
    if (window.innerWidth <= 800) {
        document.getElementById('marginLeftContact').style.marginLeft = '0';
        document.getElementById('marginLeftContact').style.marginRight = '0';
        document.getElementById("contactsChangeDescriptionContent").innerHTML = "";
    } else {
        document.getElementById('marginLeftContact').style.marginLeft = '3%';
        document.getElementById('marginLeftContact').style.marginRight = '1%';

    }
}


/**
 * This function renders the contact decriptions
 * 
 */
function renderContactDescription(i) {
    if (window.innerWidth > 800) {
        document.getElementById("contactsChangeDescriptionContent").innerHTML = ``;
        document.getElementById('contactsChangeDescriptionContent').style.display = 'flex';
        slideInContact();
        document.getElementById("contactsChangeDescriptionContent").innerHTML = renderContactDescriptionHTML(i);
        document.getElementById(`clickedContactBgColor${i}`).style.background = contentArray['contacts']['contactImageBgColor'][i];
    } else if (window.innerWidth < 800) {
        resetContent();
        document.getElementById("content").innerHTML = renderContactDescriptionHTML(i);
        document.getElementById(`clickedContactBgColor${i}`).style.background = contentArray['contacts']['contactImageBgColor'][i];
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
 * This function can add a new contact to the contact list
 * 
 */
async function updateNewContact() {
    let addNewContactName = document.getElementById('addNewContactName').value;
    contentArray['contacts']['name'].push(addNewContactName);

    let nameArray = addNewContactName.split(" ");
    let firstName = nameArray[0];
    let secondName = nameArray[1];
    let initials = firstName.substring(0, 1) + secondName.substring(0, 1);
    contentArray['contacts']['nameInitials'].push(initials);

    let addNewContactEmail = document.getElementById('addNewContactEmail').value;
    contentArray['contacts']['email'].push(addNewContactEmail);

    let addNewContactPhone = document.getElementById('addNewContactPhone').value;
    contentArray['contacts']['phoneNumber'].push(addNewContactPhone);

    let contactImageBgColor = getRandomBackgroundColor();
    contentArray['contacts']['contactImageBgColor'].push(contactImageBgColor);

    await setItem(key, contentArray);
    await renderContacts();
    showContactCreatedMessage();
}


/**
 * This function opens the edit contact menu and pushes the value of the name e-mail and phone number in the input fields
 * 
 * @param {*} index this is the position in the array from the specific contact
 */
async function editContact(index) {
    document.getElementById('popUpDiv').classList.remove('d-none');
    document.getElementById('popUpDiv').classList.add('d-flex');
    slideInPopUp();
    document.getElementById('popUpDiv').innerHTML = editContactHTML(index);
    document.getElementById('editContactName').value = contentArray['contacts']['name'][index];
    document.getElementById('editContactEmail').value = contentArray['contacts']['email'][index];
    document.getElementById('editContactPhone').value = contentArray['contacts']['phoneNumber'][index];
}


/**
 * This function update the edited contact when clicking on the save button
 * 
 * @param {*} index this is the position in the array from the specific contact
 */
async function updateEditedContact(index) {
    let updatedContactName = document.getElementById('editContactName').value;
    contentArray['contacts']['name'][index] = updatedContactName;

    let nameArray = updatedContactName.split(" ");
    let firstName = nameArray[0];
    let secondName = nameArray[1];
    let initials = firstName.substring(0, 1) + secondName.substring(0, 1);
    contentArray['contacts']['nameInitials'][index] = initials;

    let updatedContactEmail = document.getElementById('editContactEmail').value;
    contentArray['contacts']['email'][index] = updatedContactEmail;

    let updatedContactPhone = document.getElementById('editContactPhone').value;
    contentArray['contacts']['phoneNumber'][index] = updatedContactPhone;

    await setItem(key, contentArray);
    await renderContacts();
    // showContactUpdatedMessage();
    showContactCreatedMessage();
}


/**
 * This function deletes the contact after confirm from the array
 * 
 * @param {*} index this is the position of the specific contact in the array
 */
async function deleteContact(index) {
    if (confirm('Delete This Contact?') == true) {
        contentArray['contacts']['name'].splice(index, 1);
        contentArray['contacts']['nameInitials'].splice(index, 1);
        contentArray['contacts']['email'].splice(index, 1);
        contentArray['contacts']['phoneNumber'].splice(index, 1);
        contentArray['contacts']['contactImageBgColor'].splice(index, 1);
        await setItem(key, contentArray);
        await renderContacts();
        // showContactDeletedMessage();
        text = "Contact Deleted!";
        showContactCreatedMessage();
    } 
}


/**
 * This function resets the input fields when editing a contact
 * 
 */
function editContactResetInputs() {
    document.getElementById('editContactName').value = "";
    document.getElementById('editContactEmail').value = "";
    document.getElementById('editContactPhone').value = "";
}


/**
 * This function shows a message in the middle of the window to show the sucessfull creation of the new contact
 * 
 */
function showContactCreatedMessage() {
    document.getElementById("contactCreatedDiv").classList.add("show");

    setTimeout(function () {
        document.getElementById("contactCreatedDiv").classList.remove("show");
    }, 2000);
}


/**
 * This function gives back a random color from the given colors in the array
 * 
 */
function getRandomBackgroundColor() {
    let randomColor = Math.floor(Math.random() * contentArray['settings']['contactImageBgColor'].length);
    return contentArray['settings']['contactImageBgColor'][randomColor];
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


/**
 * This function filters the names with the same beginning letter and then shows them together in the specific groups for letters
 * 
 */
function updateContactsHTML() {
    document.getElementById('contactsList').innerHTML = ``;

    // Erstelle ein leeres Objekt zur Gruppierung der Kontakte nach dem Anfangsbuchstaben
    const contactsByInitial = {};

    // Gruppiere die Kontakte nach dem Anfangsbuchstaben
    for (let i = 0; i < contentArray['contacts']['name'].length; i++) {
        const name = contentArray['contacts']['name'][i];
        const initial = name.charAt(0).toUpperCase();

        if (!contactsByInitial[initial]) {
            contactsByInitial[initial] = [];
        }

        contactsByInitial[initial].push(i);
    }

    // Iteriere über das Alphabet und render die Kontakte für jeden Buchstaben
    for (let letter = 65; letter <= 90; letter++) {
        const initial = String.fromCharCode(letter);

        if (contactsByInitial[initial]) {
            // Füge den HTML-Code für den Buchstaben hinzu
            document.getElementById('contactsList').innerHTML += generateHeaderHTML(initial);

            // Füge die Kontakt-HTML für jeden Kontakt unter dem Buchstaben hinzu
            contactsByInitial[initial].forEach(contactIndex => {
                document.getElementById('contactsList').innerHTML += generateContactsHTML(contactIndex);
                document.getElementById(`contactBgColor${contactIndex}`).style.backgroundColor = contentArray['contacts']['contactImageBgColor'][contactIndex];
            });
        }
    }
}