/**
 * This is a help function thats olny sources out the HTML code to smaller the code
 *
 * @returns html code
 */
function renderContactsHTML() {
    return /*html*/ `
<section class="content-contact">
  <div class="add-new-contact">
    <button onclick="addNewContact('addNormal')" class="contact-dude-button"> New contact <img src="./assets/img/add-contact-dude.png" alt="add contact"> </button>
  </div>
  <div id="contactsList" class="overflow-scroll">
  </div>
  <div id="contactCreatedDiv" class="contact-created">
    Contact successfully created
  </div>
</section>
`;
}


/**
 * This is a help function thats olny sources out the HTML code to smaller the code
 *
 * @param {*} i gives the i as the position for every contact to this function
 * @returns  html codename-box
 */
function renderContactDescriptionHTML(i) {
  return /*html*/  `
<div id="contactPage">
</div>
<section class="content">
  <div id="ContactDescriptionHeader" class="d-none">
    <span class="mt-11 responsive-hide">Kanban Project Management Tool</span>
    <div class="go-back-contact">
      <div>
        <h2 class="font-47 contact-description-h2">Contacts</h2>
        <span style="margin-bottom: 20px" class="font-21">Better with a team</span>
      </div>
      <img onclick="renderContacts()" src="./assets/img/task-left-arrow.png" alt="left-arrow-img">
    </div>
    <div class="blue-line">
      <img src="./assets/img/blue-line-horizontal.png" alt="blue-line-img">
    </div>
  </div>
  <div>
    <div class="contact-info">
      <div class="initials font-27" id="clickedContactBgColor${i}">
        ${contentArray["contacts"]["nameInitials"][i]}
      </div>
      <div>
        <div>
          <h3 class="font-27">${contentArray["contacts"]["name"][i]}</h3>
        </div>
        <div onclick="renderFloatAddTask('${i}')" class="add-task">
          
          <span class="center-add-task-span"> <span style="margin-right:5px" class="font-32">+</span> <span>Add Task</span></span>
        </div>
      </div>
    </div>
    <div class="mobile-edit">
    <div class="mb-11"><h4 class="font-21">Contact Information</h4></div>
    <div onclick="editContact(${i})" class="edit-button-contact-desktop"> 
      <img src="./assets/img/edit-pen.png" alt="edit">
      <img src="./assets/img/edit-blue-pen.png" alt="edit" class="hover-image">
      <p> Edit contact </p>
    </div>
    </div>
    <div class="mail-mobil">
      <div>
        <span><b>Email</b></span>
        <a href="mailto:${contentArray["contacts"]["email"][i]}">${contentArray["contacts"]["email"][i]}</a>
      </div>
      <div>
        <span><b>Mobile</b></span>
        <a href="tel:${contentArray["contacts"]["phoneNumber"][i]}">${contentArray["contacts"]["phoneNumber"][i]}</a>
      </div>
    </div>
  </div>
  <div class="delete-button-contact">
    <img onclick="deleteContact(${i})" src="./assets/img/task-delete-button.png" alt="delete-img">
  </div>
  <div class="edit-button-contact">
    <img onclick="editContact(${i})" src="./assets/img/task-edit-button.png" alt="edit-img">
  </div>
</section>
    `;
}


/**
 * This is a help function thats olny sources out the HTML code to smaller the code
 *
 * @returns html code
 */
function addNewContactHTML(param) {
  return /*html*/ `
<section class="border">
  <div class="top-bg">
    <div class="x-position">
      <img onclick="closeAddContact()" src="./assets/img/x-button-white.png" alt="x-button-img">
    </div>
    <div>
      <div>
        <h2 class="font-32 mt-0 mb-11">Add contact</h2>
        <span>Tasks are better with a team!</span>
      </div>
      <div>
        <img src="./assets/img/blue-line-horizontal.png" alt="blue-line-img">
      </div>
    </div>
  </div>
  <div class="big-initials">
    <img src="./assets/img/big-character.png" alt="big-character-img">
  </div>
  <form class="form-box" onsubmit="updateNewContact('${param}'); return false;">
    <div class="contact-box">
      <div class="name2">
        <div class="name-box2">
          <input id="addNewContactName" class="input-name" type="text" pattern="[a-zA-Z]{2,} [a-zA-Z]{2,}" placeholder="First Name / Last Name " required>
          <img src="./assets/img/charakter-icon.png" alt="charakter-img">
        </div>
      </div>
      <div class="name">
        <div class="name-box2">
          <input id="addNewContactEmail" class="input-name" type="email" placeholder="Email" required>
          <img src="./assets/img/email-icon.png" alt="email-img">
        </div>
      </div>
      <div class="name">
        <div class="name-box2">
          <input id="addNewContactPhone" class="input-name" type="tel" pattern="[0-9]{3,15}" placeholder="Phone" required>
          <img src="./assets/img/phone-icon.png" alt="phone-img">
        </div>
      </div>
    </div>
    <button class="create-contact">
      <b>Create contact</b>
      <img src="./assets/img/hook-icon.png" alt="hook-img">
    </button>
  </form>
</section>
`;
}


/**
 * This is a help function thats olny sources out the HTML code to smaller the code
 *
 * @returns html code
 */
function editContactHTML(index) {
  return /*html*/ `
<section class="border">
  <div class="top-bg">
    <div class="x-position">
      <img onclick="closeEditContact()" src="./assets/img/x-button-white.png" alt="x-button-img">
    </div>
    <div>
      <div>
        <h2 class="font-32 mt-0 mb-11">Edit contact</h2>
      </div>
      <div>
        <img src="./assets/img/blue-line-horizontal.png" alt="blue-line-img">
      </div>
    </div>
  </div>
  <div class="big-initials font-27" id="editContactInitials">
    ${contentArray["contacts"]["nameInitials"][index]}
  </div>
  <form onsubmit="updateEditedContact(${index}); return false;">
    <div class="contact-box">
      <div class="name2">
        <div class="name-box2">
          <input id="editContactName" class="input-name" type="text" pattern="[a-zA-Z]{2,} [a-zA-Z]{2,}" placeholder="First Name / Last Name " required>
          <img src="./assets/img/charakter-icon.png" alt="charakter-img">
        </div>
      </div>
      <div class="name">
        <div class="name-box2">
          <input id="editContactEmail" class="input-name" type="email" placeholder="Email" required>
          <img src="./assets/img/email-icon.png" alt="email-img">
        </div>
      </div>
      <div class="name">
        <div class="name-box2">
          <input id="editContactPhone" class="input-name" type="tel" pattern="[0-9]{3,15}" placeholder="Phone" required>
          <img src="./assets/img/phone-icon.png" alt="phone-img">
        </div>
      </div>
    </div>
    <div class="delete-save-box2">
      <div class="delete2" onclick="deleteContact(${index})">
        Delete
      </div>
      <button class="save2">
        Save
      </button>
    </div>
  </form>
</section>
  `;
}


/**
 * This is a help function thats olny sources out the HTML code to smaller the code
 *
 * @returns html code
 */
function renderContactDescriptionHTMLHeader() {
  return /*html*/ `
<section class="content">
  <span class="mt-11 responsive-hide">Kanban Project Management Tool</span>
  <div class="go-back-contact"> <img src="./assets/img/task-left-arrow.png" alt="left-arrow-img">
  </div>
  <div class= "headlines-contacts">
  <h1 class="summary-h1">Contacts</h1>
  <img class="blue-line-vertical-contact" src="./assets/img/blue-line-vertical.png">
  <span style="margin-top: 20px;" class="font-21">Better with a team</span> 
  <img class="blue-line-horizontal-contact" src="./assets/img/blue-line-horizontal.png">
  </div>
</section>
    `;
}


/**
 * This function generates the header for the Letters where all contacts are listed under
 *
 * @param {*} initial this are the two initials from the name of the persons
 * @returns a html code to smaller the code
 */
function generateHeaderHTML(initial) {
  return /*html*/ `
<div>
  <h3 class="font-21">${initial}</h3>
  <div class="line">
    <img src="./assets/img/contact-line.png" alt="contact-line-img">
  </div>
</div>
    `;
}


/**
 * This function is rendering the contact information from the specific contacts into the list from the letters
 *
 * @param {*} i is the number of the contact, the specific position in the array
 * @returns a html code to smaller the code
 */
function generateContactsHTML(i) {
  return /*html*/ `
      <div class="assigned mt-11" onclick="handleAssignedClick(this); renderContactDescription(${i})" id="contact${i}">
        <div class="name-border" id="contactBgColor${i}">${contentArray["contacts"]["nameInitials"][i]}</div>
        <div class="left-distance">
          <div class="font-21 contacts-span">
            <span>${contentArray["contacts"]["name"][i]}</span>
          </div>
          <a href="#">${contentArray["contacts"]["email"][i]}</a>
        </div>
      </div>
    `;
  }