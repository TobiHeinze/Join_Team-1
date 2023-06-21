/**
 * This function renders the contacts area
 * 
 */
async function renderContacts() {
    contentArray = await getItem(key);
    resetContent();
    grayBackgroundForCurrentPage('contactsBackgroundSidebar');
    document.getElementById('content').classList.add('d-none');
    document.getElementById("contactsContent").innerHTML = renderContactsHTML();
    updateContactsHTML();
    document.getElementById('contactsDescriptionContent').innerHTML = renderContactDescriptionHTMLHeader();
    resizeFunction();
    const contactElements = document.getElementsByClassName('contact');
    for (let i = 0; i < contactElements.length; i++) {
        const contactElement = contactElements[i];
        contactElement.addEventListener('click', function () {
            handleClick(contactElement);
        });
    }
}


/**
 * Handles the click event on menu items.
 * Adds or removes the 'selected' class based on the clicked element.
 * @param {HTMLElement} element - The clicked element.
 */
function handleClick(element) {
    if (selectedElement === element) {
        // Wenn das zuvor ausgewählte Element erneut geklickt wurde,
        // entferne die 'selected' Klasse und setze selectedElement auf null.
        element.classList.remove('selected');
        selectedElement = null;
    } else {
        // Entferne die 'selected' Klasse vom zuvor ausgewählten Element (falls vorhanden).
        if (selectedElement) {
            selectedElement.classList.remove('selected');
        }
        // Füge die 'selected' Klasse zum aktuellen Element hinzu und setze es als selectedElement.
        element.classList.add('selected');
        selectedElement = element;
    }
}


/**
 * This function is checking if the window size is smaller than 800px, then it clears a div from the contact description area
 * 
 */
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
 * @param {*} i the param is the point in the array where we want to grab something
 */
function renderContactDescription(i) {
    if (window.innerWidth > 800) {
        document.getElementById("contactsChangeDescriptionContent").innerHTML = ``;
        document.getElementById('contactsChangeDescriptionContent').style.display = 'flex';
        slideInContact();
        document.getElementById("contactsChangeDescriptionContent").innerHTML = renderContactDescriptionHTML(i);
        document.getElementById(`clickedContactBgColor${i}`).style.background = contentArray['contacts']['contactImageBgColor'][i];
    } else if (window.innerWidth <= 800) {
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
 * @param {*} param this parameter gives the side from where you open the add contact
 */
function addNewContact(param) {
    document.getElementById('popUpDiv2').classList.remove('d-none');
    document.getElementById('popUpDiv2').classList.add('d-flex');
    document.getElementById('popUpDiv2').classList.add('show-popup');
    slideInPopUp2();
    document.getElementById('popUpDiv2').innerHTML = addNewContactHTML(param);
}


/**
 * This function is a help function to get name and name initials when add a new contact
 * 
 */
function processContactName() {
    let addNewContactName = document.getElementById('addNewContactName').value.trim().replace(/\s+/g, ' ');;
    contentArray['contacts']['name'].push(addNewContactName);

    let nameArray = addNewContactName.split(" ");
    let firstName = nameArray[0];
    let secondName = nameArray[1];
    let initials = firstName.substring(0, 1) + secondName.substring(0, 1);
    contentArray['contacts']['nameInitials'].push(initials);
}


/**
 * This function is a help function to get  new e-mail and phone number and a random color when add a contact
 * 
 */
function processContactEmailPhoneBgColor() {
    let addNewContactEmail = document.getElementById('addNewContactEmail').value;
    contentArray['contacts']['email'].push(addNewContactEmail);

    let addNewContactPhone = document.getElementById('addNewContactPhone').value;
    contentArray['contacts']['phoneNumber'].push(addNewContactPhone);

    let contactImageBgColor = getRandomBackgroundColor();
    contentArray['contacts']['contactImageBgColor'].push(contactImageBgColor);
}


/**
 * This function adds new contact 
 * 
 * @param {*} param this param gives the startpoint of adding a new contact
 */
async function updateNewContact(param) {
    await getItem(key);
    processContactName();
    processContactEmailPhoneBgColor();
    await setItem(key, contentArray);
    if (document.getElementById('smallAddTaskDoNotCloseWhenThisId')) {
        await getItem(key);
        document.getElementById('checkboxes2').innerHTML = ``;
        document.getElementById('renderAddContactInitials').innerHTML = ``;
        renderAddTaskAssignedToOptions();
        showContactCreatedMessage();
        closeAddContact();
    } else {
        checkIfParam(param);
    }
}


/**
 * This function checks if the param is matching then different actions and then redirect to the pages
 * 
 * @param {*} param this param is a string that should match the string in the if else question then do something
 */
async function checkIfParam(param) {
    if (param < contentArray['contacts']['name'].length && window.innerWidth <= 800) {
        renderContactDescription(param);
    }
    if ((param >= 0 && param <= 1000) && window.innerWidth > 800 || param === 'newAssignedToContact' || param === 'contacts' || param === 'undefined') {
        await getItem(key);
        document.getElementById('checkboxes2').innerHTML = ``;
        document.getElementById('renderAddContactInitials').innerHTML = ``;
        renderAddTaskAssignedToOptions();
        showContactCreatedMessage();
        closeAddContact();
    } if (param === 'addNormal'){
        await getItem(key);
        showContactCreatedMessage();
        closeAddContact();
        updateContactsHTML();
    } if (param === 'board') {
        renderBoard();
    }
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
 * This function is a help function that gives back the name and the name initials when editing a contact
 * 
 * @param {*} index is the position in the array
 */
function processEditedContactName(index) {
    let updatedContactName = document.getElementById('editContactName').value;
    contentArray['contacts']['name'][index] = updatedContactName;
    let nameArray = updatedContactName.split(" ");
    let firstName = nameArray[0];
    let secondName = nameArray[1];
    let initials = firstName.substring(0, 1) + secondName.substring(0, 1);
    contentArray['contacts']['nameInitials'][index] = initials;
}


/**
 * This function is a help function that gives back the email and phone number when editing a contact
 * 
 * @param {*} index is the position in the array
 */
function processEditedContactEmailPhone(index) {
    let updatedContactEmail = document.getElementById('editContactEmail').value;
    contentArray['contacts']['email'][index] = updatedContactEmail;
    let updatedContactPhone = document.getElementById('editContactPhone').value;
    contentArray['contacts']['phoneNumber'][index] = updatedContactPhone;
}


/**
 * This function update the edited contact when clicking on the save button
 * 
 * @param {*} index this is the position in the array from the specific contact
 */
async function updateEditedContact(index) {
    processEditedContactName(index);
    processEditedContactEmailPhone(index);
    await setItem(key, contentArray);
    await renderContacts();
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
    }
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
 * This function close the add contact window
 * 
 */
function closeAddContact() {
    document.getElementById('popUpDiv2').classList.add('d-none');
    document.getElementById('popUpDiv2').classList.remove('d-flex');
    document.getElementById('popUpDiv2').innerHTML = ``;
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
 * This function get the filtered names and then added a letter for existing initial letters to show the contacts grouped together
 * 
 */
function updateContactsHTML() {
    document.getElementById('contactsList').innerHTML = '';
    const contactsByInitial = groupContactsByInitial();
    for (let letter = 65; letter <= 90; letter++) {
        const initial = String.fromCharCode(letter);
        if (contactsByInitial[initial]) {
            document.getElementById('contactsList').innerHTML += generateHeaderHTML(initial);
            contactsByInitial[initial].forEach(contactIndex => {
                document.getElementById('contactsList').innerHTML += generateContactsHTML(contactIndex);
                document.getElementById(`contactBgColor${contactIndex}`).style.backgroundColor = contentArray['contacts']['contactImageBgColor'][contactIndex];
            });
        }
    }
}


/**
 * this function  filters the names with the same beginning letter and push them into a variable together in arrays
 */
function groupContactsByInitial() {
    const contactsByInitial = {};
    for (let i = 0; i < contentArray['contacts']['name'].length; i++) {
        const name = contentArray['contacts']['name'][i];
        const initial = name.charAt(0).toUpperCase();
        if (!contactsByInitial[initial]) {
            contactsByInitial[initial] = [];
        }
        contactsByInitial[initial].push(i);
    }
    return contactsByInitial;
}


/**
 * Holds the reference to the currently selected assigned element.
 * @type {HTMLElement}
 */
let selectedAssignedElement = null;


/**
 * Handles the click event on assigned elements.
 * Adds or removes the 'clicked' class based on the clicked element.
 * @param {HTMLElement} element - The clicked element.
 */
function handleAssignedClick(element) {
    if (selectedAssignedElement === element) {
        // If the previously selected assigned element is clicked again,
        // remove the 'clicked' class and set selectedAssignedElement to null.
        element.classList.remove('clicked');
        selectedAssignedElement = null;
    } else {
        // Remove the 'clicked' class from the previously selected assigned element (if any).
        if (selectedAssignedElement) {
            selectedAssignedElement.classList.remove('clicked');
        }
        // Add the 'clicked' class to the current assigned element and set it as selectedAssignedElement.
        element.classList.add('clicked');
        selectedAssignedElement = element;
    }
}