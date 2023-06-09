/**
 * This is a help function thats olny sources out the HTML code to smaller the code
 * 
 * @returns html code
 */
function renderContactsHTML() {
    return /*html*/ `
    <section class="content-contact">
    <section>
        <div class="add-new-contact">
            <img onclick="addNewContact()" src="./assets/img/contact-new.png" alt="new-contact-img">
        </div>

        <div id="contactsList" class="overflow-scroll">
            <div class="contacts-list">
                <div>
                    <h3 class="font-21">A</h3>
                </div>
            </div>
            <div class="line">
                <img src="./assets/img/contact-line.png" alt="contact-line-img">
            </div>
            <div>
                <!-- mit dem onclick kann man zu jedem kontakt kommen später -->
                <div class="assigned mt-11"  onclick="renderContactDescription()">
                    <div class="name-border">AW</div>
                    <div class="left-distance">
                        <div class="font-21 contacts-span">
                            <span>Albert Wissigkeit</span>
                        </div>
                        <a href="#">albert@gmail.com</a>
                    </div>
                </div>
                <div class="assigned mt-11">
                    <div class="name-border2">AZ</div>
                    <div class="left-distance">
                        <div class="font-21 contacts-span">
                            <span>Anja Zabruck</span>
                        </div>
                        <a href="#">anja@gmail.com</a>
                    </div>
                </div>
            </div>

            <div class="contacts-list">
                <div>
                    <h3 class="font-21">B</h3>
                </div>
            </div>
            <div class="line">
                <img src="./assets/img/contact-line.png" alt="contact-line-img">
            </div>
            <div>
                <div class="assigned mt-11">
                    <div class="name-border">BM</div>
                    <div class="left-distance">
                        <div class="font-21 contacts-span">
                            <span>Bine Maja</span>
                        </div>
                        <a href="#">bine@gmail.com</a>
                    </div>
                </div>
                <div class="assigned mt-11">
                    <div class="name-border2">BB</div>
                    <div class="left-distance">
                        <div class="font-21 contacts-span">
                            <span>Benjamin Bauer</span>
                        </div>
                        <a href="#">benjamin@gmail.com</a>
                    </div>
                </div>
            </div>
            <!-- versteckt solange kein neuer contakt kreiert ist -->
            <div class="d-none">
              <div class="contact-created">
                Contact successfully created
              </div>
            </div>



















            <!-- hier zwischen nur extra viele kontakte zum scrollen testen!!! -->

            <div class="contacts-list">
                <div>
                    <h3 class="font-21">A</h3>
                </div>
            </div>
            <div class="line">
                <img src="./assets/img/contact-line.png" alt="contact-line-img">
            </div>
            <div>
                <div class="assigned mt-11">
                    <div class="name-border">AW</div>
                    <div class="left-distance">
                        <div class="font-21 contacts-span">
                            <span>Albert Wissigkeit</span>
                        </div>
                        <a href="#">albert@gmail.com</a>
                    </div>
                </div>
                <div class="assigned mt-11">
                    <div class="name-border2">AZ</div>
                    <div class="left-distance">
                        <div class="font-21 contacts-span">
                            <span>Anja Zabruck</span>
                        </div>
                        <a href="#">anja@gmail.com</a>
                    </div>
                </div>
            </div>

            <div class="contacts-list">
                <div>
                    <h3 class="font-21">B</h3>
                </div>
            </div>
            <div class="line">
                <img src="./assets/img/contact-line.png" alt="contact-line-img">
            </div>
            <div>
                <div class="assigned mt-11">
                    <div class="name-border">BM</div>
                    <div class="left-distance">
                        <div class="font-21 contacts-span">
                            <span>Bine Maja</span>
                        </div>
                        <a href="#">bine@gmail.com</a>
                    </div>
                </div>
                <div class="assigned mt-11">
                    <div class="name-border2">BB</div>
                    <div class="left-distance">
                        <div class="font-21 contacts-span">
                            <span>Benjamin Bauer</span>
                        </div>
                        <a href="#">benjamin@gmail.com</a>
                    </div>
                </div>
            </div><div class="contacts-list">
                <div>
                    <h3 class="font-21">A</h3>
                </div>
            </div>
            <div class="line">
                <img src="./assets/img/contact-line.png" alt="contact-line-img">
            </div>
            <div>
                <div class="assigned mt-11">
                    <div class="name-border">AW</div>
                    <div class="left-distance">
                        <div class="font-21 contacts-span">
                            <span>Albert Wissigkeit</span>
                        </div>
                        <a href="#">albert@gmail.com</a>
                    </div>
                </div>
                <div class="assigned mt-11">
                    <div class="name-border2">AZ</div>
                    <div class="left-distance">
                        <div class="font-21 contacts-span">
                            <span>Anja Zabruck</span>
                        </div>
                        <a href="#">anja@gmail.com</a>
                    </div>
                </div>
            </div>

       

          

            <!-- scroll test kontakte ende -->
        
            













        </div>
    </section>
</section>
`;
}


/**
 * This is a help function thats olny sources out the HTML code to smaller the code
 * 
 * @returns html code
 */
function renderContactDescriptionHTML() {
    return /*html*/`
    <div id="contactPage"></div>
    <section class="content">
     <div id="ContactDescriptionHeader" class="d-none">
        <span class="mt-11 responsive-hide">Kanban Project Management Tool</span>
        <div class="go-back-contact">
            <div>
                <h2 class="font-47 contact-description-h2">Contacts</h2>
                <span class="font-21">Better with a team</span>
            </div>
                <img  onclick="renderContacts()" src="./assets/img/task-left-arrow.png" alt="left-arrow-img">
        </div>
        <div class="blue-line">
            <img src="./assets/img/blue-line-mobile.png" alt="blue-line-img">
        </div>
      </div>
        <div>
            <div class="contact-info">
                <div class="initials font-27">
                    AM
                </div>
                <div>
                    <div>
                        <h3 class="font-27">Anton Mayer</h3>
                    </div>
                    <div onclick="renderFloatAddTask()" class="add-task">
                        <img src="./assets/img/contact-plus.png" alt="plus-img">
                        <span>Add Task</span>
                    </div>
                </div>
            </div>
            <div class="mb-11">
                <h4 class="font-21">Contact Information</h4>
            </div>
            <div class="mail-mobil">
                <div>
                    <span><b>Email</b></span>
                    <a href="#">antom@gmail.com</a>
                </div>
                <div>
                    <span><b>Mobil</b></span>
                    <a href="#">+49 1111 111 11 1</a>
                </div>
            </div>
        </div>
        <div class="delete-button-contact">
            <img src="./assets/img/task-delete-button.png" alt="delete-img">
        </div>
        <div class="edit-button-contact">
            <img onclick="editContact()" src="./assets/img/task-edit-button.png" alt="edit-img">
        </div>
    </section>
    `;
}


/**
 * This is a help function thats olny sources out the HTML code to smaller the code
 * 
 * @returns html code
 */
function addNewContactHTML() {
    return /*html*/`
    <!-- <section class="content"> -->
    <div class="border">
        <div class="top-bg">
            <div class="x-position">
                <img  onclick="closeEditContact()" src="./assets/img/x-button-white.png" alt="x-button-img">
            </div>
            <div>
                <div>
                    <h2 class="font-32 mt-0 mb-11">Add contact</h2>
                    <span>Tasks are better with a team!</span>
                </div>
                <div>
                    <img src="./assets/img/blue-line-mobile.png" alt="blue-line-img">
                </div>
            </div>
        </div>
        <div class="big-initials">
            <img src="./assets/img/big-character.png" alt="big-character-img">
        </div>
        <form action="" class="form-box">
            <div class="contact-box">
                <div class="name">
                    <div class="name-box">
                        <input class="input-name" type="text" placeholder="Name" required>
                        <img src="./assets/img/charakter-icon.png" alt="charakter-img">
                    </div>
                </div>

                <div class="name">
                    <div class="name-box">
                        <input class="input-name" type="text" placeholder="Email" required>
                        <img src="./assets/img/email-icon.png" alt="email-img">
                    </div>
                </div>

                <div class="name">
                    <div class="name-box">
                        <input class="input-name" type="text" placeholder="Phone" required>
                        <img src="./assets/img/phone-icon.png" alt="phone-img">
                    </div>
                </div>
            </div>
            <!-- <div class="create-contact"> -->
                <div class="create-contact">
                    <b>Create contact</b>
                    <img src="./assets/img/hook-icon.png" alt="hook-img">
                </div>
            <!-- </div> -->
            <button class="mt-11">ADD + just 4 required tests</button>
        </form>
    </div>
<!-- </section> -->
`;
}


/**
 * This is a help function thats olny sources out the HTML code to smaller the code
 * 
 * @returns html code
 */
function editContactHTML() {
    return /*html*/`
    <!-- <section class="content"> -->
    <div class="border">
        <div class="top-bg">
            <div class="x-position">
                <img onclick="closeEditContact()" src="./assets/img/x-button-white.png" alt="x-button-img">
            </div>
            <div>
                <div>
                    <h2 class="font-32 mt-0 mb-11">Edit contact</h2>
                </div>
                <div>
                    <img src="./assets/img/blue-line-mobile.png" alt="blue-line-img">
                </div>
            </div>
        </div>
        <div class="big-initials font-27">
            TW
        </div>
        <form action="">
            <div class="contact-box">
                <div class="name">
                    <div class="name-box">
                        <input class="input-name" type="text" placeholder="name muss mit JS eingefügt werden" required>
                        <img src="./assets/img/charakter-icon.png" alt="charakter-img">
                    </div>
                </div>

                <div class="name">
                    <div class="name-box">
                        <input class="input-name" type="text" placeholder="email muss mit JS eingefügt werden" required>
                        <img src="./assets/img/email-icon.png" alt="email-img">
                    </div>
                </div>

                <div class="name">
                    <div class="name-box">
                        <input class="input-name" type="text" placeholder="phone Nr muss mit JS eingefügt werden" required>
                        <img src="./assets/img/phone-icon.png" alt="phone-img">
                    </div>
                </div>
            </div>
            <div class="del-save">
                <div class="del">
                    Delete
                </div>
                <div class="save">
                    <b>Save</b>
                </div>
            </div>
            <button class="mt-11">ADD + just 4 required tests</button>
        </form>
    </div>
<!-- </section> -->
`;
}


/**
 * This is a help function thats olny sources out the HTML code to smaller the code
 * 
 * @returns html code
 */
function renderContactDescriptionHTMLHeader() {
    return /*html*/`
    <section class="content">
        <span class="mt-11 responsive-hide">Kanban Project Management Tool</span>
        <div class="go-back-contact">
            <div>
                <h2 class="font-47 contact-description-h2">Contacts</h2>
                <span class="font-21">Better with a team</span>
            </div>
                <img src="./assets/img/task-left-arrow.png" alt="left-arrow-img">
        </div>
        <div class="blue-line">
            <img src="./assets/img/blue-line-mobile.png" alt="blue-line-img">
        </div>
    </section>
    `;
}