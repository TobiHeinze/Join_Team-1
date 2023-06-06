/**
 * This function resets all divs we fill content in
 * 
 */
function resetContent() {
    document.getElementById("content").innerHTML = ``;
    document.getElementById('contacts-description-content').innerHTML = ``;
    document.getElementById('contacts-content').innerHTML = ``;

    document.getElementById('popUpDiv').classList.add('d-none');
    document.getElementById('popUpDiv').classList.remove('d-flex');
    document.getElementById('popUpDiv').innerHTML = ``;

}

function renderSummary() {
    resetContent();
    document.getElementById("content").innerHTML = /*html*/ `
    
<span class="kanban">Kanban Project Management Tool</span>

<div class= "headlines">
<h1>Summary</h1>
<img class="blue-line-desktop" src="/assets/img/blue-line-desktop.png">
<span class="font-21">Everything in a nutshell!</span> 
</div>
<br> <br>
<img class="blue-line-mobile" src="/assets/img/blue-line-mobile.png">


<div class="summary-content">

    <div>
        <section class="row">
            <div onclick="renderBoard()" class="card-row-1">
                <span class="font-64">5</span>
                <span class="font-16">Tasks in <br> Board</span>
            </div>
            <div onclick="renderBoard()" class="card-row-1">
                <span class="font-64">2</span>
                <span class="font-16">Tasks in <br> Progress</span>
            </div>
            <div onclick="renderBoard()" class="card-row-1">
                <span class="font-64">2</span>
                <span class="font-16">Awaiting <br> Feedback</span>
            </div>
        </section>


        <section class="row">
            <div onclick="renderBoard()" class="card-row-2">
                <div class="card-row-2-left">
                    <div>
                        <img style="padding-top: 10px" src="./assets/img/urgent.png" />
                    </div>
                    <div class="amount">
                        <span class="font-47">1</span>
                        <span class="font-21">Urgent</span>
                    </div>
                </div>
                <div class="card-row-2-middle"></div>
                <div class="card-row-2-right">
                    <span class="font-weight-700 font-16">October 16, 2022</span> <br>
                    <span class="font-16">Upcoming Deadline</span>
                </div>
            </div>
        </section>


        <section class="row">
            <div onclick="renderBoard()" class="card-row-3">
                <div>
                    <img src="/assets/img/pen.png" />
                </div>
                <div class="amount">
                    <span class="font-64 ">1</span>
                    <span class="font-21">To-do</span>
                </div>
            </div>
            <div onclick="renderBoard()" class="card-row-3">
                <div>
                    <img src="/assets/img/check.png" />
                </div>
                <div class="amount">
                    <span class="font-64">1</span>
                    <span class="font-21">Done</span>
                </div>
            </div>
        </section>
    </div>

    <aside id="greeting">
        <span class="font-weight-500 font-47">${getTime()},</span>
        <h1 id="userGreetingName" class="font-weight-700 font-64">Guest</h1>
    </aside>
</div>
    `;
}

function renderBoard() {
    resetContent();
    document.getElementById("content").innerHTML = /*html*/ `
    <span class="kanban-tool-text appear-mobile">Kanban Project Management Tool</span>
<div class="space-between">
	<span class="font-47">Board</span>
	<img src="assets/img/plus-add-task-mobile.svg" alt="">
</div>
<form action="">
	<textarea class="textarea-find-task" name="" id="" cols="" rows="1" placeholder="Find Task"></textarea>
</form>
<p>Content</p>
    `;
}

/**
 * This function renders the AddTask area
 * 
 */
function renderAddTask() {
    resetContent();
    document.getElementById("content").innerHTML = /*html*/ `
    <img class="create-button" src="/assets/img/create-button.png" alt="create task">
    <form class="add-task-scroll">
                <div onclick="renderContacts()" class="add-task-x-position d-none">
                    <img src="/assets/img/x-button-black.png" alt="x-button-img">
                </div>
                <div class="mt-11 responsive-hide">
                  <span >Kanban Project Management Tool</span>
                </div>
                <h2 class="font-47 add-task-h2">Add Task</h2>
                <div class="desktop-size">
                    <div class="add-task-responsive-left">
                        <div class="title">
                            <span>Title</span>
                            <input type="text" placeholder="Enter a Title" required>
                        </div>
                        <div class="description">
                            <span class="mt-11">Description</span>
                            <textarea name="" id="" cols="4" rows="4" placeholder="Enter a Description"
                                required></textarea>
                        </div>
                        <div class="prio">
                            <span class="mt-11 mb-11">Prio</span>
                            <div class="prio-row">
                                <div class="prio-class">
                                    <span>Urgent</span>
                                    <img src="/assets/img/task-prio-urgent.png" alt="urgent-img">
                                </div>
                                <div class="prio-class">
                                    <span>Medium</span>
                                    <img src="/assets/img/task-prio-medium.png" alt="medium-img">
                                </div>
                                <div class="prio-class">
                                    <span>Low</span>
                                    <img src="/assets/img/task-prio-low.png" alt="low-img">
                                </div>
                            </div>
                        </div>
                        <div class="add-task-date">
                            <span class="mt-11">Due date</span>
                            <div class="date-box-add-task">
                                <input class="input-date" type="date" placeholder="dd/mm/yyyy" onmousedown="this.click()">
                                <img src="/assets/img/task-calendar.png" alt="calendar-img" required>
                            </div>
                        </div>
                    </div>
                    <div class="add-task-line-margin">
                    <div class="add-task-vertical-line">
                    </div>
                    </div>
                    <div class="add-task-responsive-right">
                        <div class="category-select-box">
                            <span>Category</span>
                            <select name="category" id="category-task" class="category-select">
                                <option value="">Select task category</option>
                                <option value="orange">Orange</option>
                                <option value="blue">Blue</option>
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                            </select>
                        </div>
                        <div class="assigned-add-task">
                            <span class="mt-11">Assigned to</span>
                            <select name="assigned" id="assigned-task" class="assigned-select">
                                <option value="">Select contacts to assign</option>
                                <option value="orange">name1</option>
                                <option value="blue">name2</option>
                            </select>
                        </div>
                        <div class="subtask">
                            <span class="mt-11">Subtasks</span>
                            <div class="subtask-box">
                                <input class="input-subtask" type="text" placeholder="Add  new subtask">
                                <img src="/assets/img/task-plus.png" alt="plus-img">
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>


                            <!-- test zum scrollen -->

                            <!-- <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 5</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 10</span>
                            </div><div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 10</span>
                            </div> <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 10</span>
                            </div><div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 10</span>
                            </div> <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 10</span>
                            </div><div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 10</span>
                            </div> -->

                            <!-- test zum scrollen ende -->


                        </div>
                    </div>
                </div>
                <div class="task-button-box">
              <div class="clear-task-button">
                <span>Clear</span>
                <img src="./assets/img/x-button-black.png" alt="x-img">
              </div>
              <div class="add-task-button">
                <span>Create Task</span>
                <img src="./assets/img/hook.png" alt="haken-img">
              </div>
            </div>
            </form>
            

            <!-- hier die versionen die ggf. ausgeblendet sind solange nichts hinzugefügt wird: -->
            <div class="d-none">
                <div class="task-added">
                    <!-- task-added wird nur angezeigt wenn der task hinzugefügt wurde, sonst nicht-->
                    <span>Task added to board</span>
                    <img src="/assets/img/task-board.png" alt="board-img">
                </div>
            </div>

            <!-- task-added-to-backlog wird nur angezeigt wenn der task hinzugefügt wurde, sonst nicht-->
            <div class="d-none">
                <div class="task-added-backlog">
                    <span>Task added to backlog</span>
                    <img src="/assets/img/task-backlog.png" alt="backlog-img">
                </div>
            </div>
    `;
}

/**
 * This function renders the contacts area
 * 
 */
function renderContacts() {
    resetContent();
    document.getElementById("contacts-content").innerHTML = /*html*/ `
        <section class="content-contact">
        <section>
            <div class="add-new-contact">
                <img onclick="addNewContact()" src="/assets/img/contact-new.png" alt="new-contact-img">
            </div>

            <div class="overflow-scroll">
                <div class="contacts-list">
                    <div>
                        <h3 class="font-21">A</h3>
                    </div>
                </div>
                <div class="line">
                    <img src="/assets/img/contact-line.png" alt="contact-line-img">
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
                    <img src="/assets/img/contact-line.png" alt="contact-line-img">
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
                    <img src="/assets/img/contact-line.png" alt="contact-line-img">
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
                    <img src="/assets/img/contact-line.png" alt="contact-line-img">
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
                    <img src="/assets/img/contact-line.png" alt="contact-line-img">
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
    document.getElementById('contacts-description-content').innerHTML = /*html*/`
    <section class="content">
        <span class="mt-11 responsive-hide">Kanban Project Management Tool</span>
        <div class="go-back-contact">
            <div>
                <h2 class="font-47 contact-description-h2">Contacts</h2>
                <span class="font-21">Better with a team</span>
            </div>
                <img src="/assets/img/task-left-arrow.png" alt="left-arrow-img">
        </div>
        <div class="blue-line">
            <img src="/assets/img/blue-line-mobile.png" alt="blue-line-img">
        </div>
        <!-- <div>
            <div class="contact-info">
                <div class="initials font-27">
                    AM
                </div>
                <div>
                    <div>
                        <h3 class="font-27">Anton Mayer</h3>
                    </div>
                    <div class="add-task">
                        <img src="/assets/img/contact-plus.png" alt="plus-img">
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
        </div> -->


        <!-- <div class="delete-button">
            <img src="/assets/img/task-delete-button.png" alt="delete-img">
        </div>
        <div class="edit-button">
            <img src="/assets/img/task-edit-button.png" alt="edit-img">
        </div> -->
    </section>
    `;
}

/**
 * This function renders the contact decriptions
 * 
 */
function renderContactDescription() {
    if (window.innerWidth > 800) {
        document.getElementById("contacts-description-content").innerHTML = renderContactDescriptionHTML();
    } else {
        resetContent();
        document.getElementById("content").innerHTML = renderContactDescriptionHTML();
    }
}

/**
 * This function animate a slide from the right to the left
 * 
 * @returns the animation effect
 */
function slideInPopUp() {
    return popUpDiv.animate(
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
    document.getElementById('popUpDiv').innerHTML = /*html*/`
        <!-- <section class="content"> -->
        <div class="border">
            <div class="top-bg">
                <div class="x-position">
                    <img  onclick="closeEditContact()" src="/assets/img/x-button-white.png" alt="x-button-img">
                </div>
                <div>
                    <div>
                        <h2 class="font-32 mt-0 mb-11">Add contact</h2>
                        <span>Tasks are better with a team!</span>
                    </div>
                    <div>
                        <img src="/assets/img/blue-line-mobile.png" alt="blue-line-img">
                    </div>
                </div>
            </div>
            <div class="big-initials">
                <img src="/assets/img/big-character.png" alt="big-character-img">
            </div>
            <form action="" class="form-box">
                <div class="contact-box">
                    <div class="name">
                        <div class="name-box">
                            <input class="input-name" type="text" placeholder="Name" required>
                            <img src="/assets/img/charakter-icon.png" alt="charakter-img">
                        </div>
                    </div>

                    <div class="name">
                        <div class="name-box">
                            <input class="input-name" type="text" placeholder="Email" required>
                            <img src="/assets/img/email-icon.png" alt="email-img">
                        </div>
                    </div>

                    <div class="name">
                        <div class="name-box">
                            <input class="input-name" type="text" placeholder="Phone" required>
                            <img src="/assets/img/phone-icon.png" alt="phone-img">
                        </div>
                    </div>
                </div>
                <!-- <div class="create-contact"> -->
                    <div class="create-contact">
                        <b>Create contact</b>
                        <img src="/assets/img/hook-icon.png" alt="hook-img">
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
function renderContactDescriptionHTML() {
    return /*html*/`
    <section class="content">
        <span class="mt-11 responsive-hide">Kanban Project Management Tool</span>
        <div class="go-back-contact">
            <div>
                <h2 class="font-47 contact-description-h2">Contacts</h2>
                <span class="font-21">Better with a team</span>
            </div>
                <img  onclick="renderContacts()" src="/assets/img/task-left-arrow.png" alt="left-arrow-img">
        </div>
        <div class="blue-line">
            <img src="/assets/img/blue-line-mobile.png" alt="blue-line-img">
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
                        <img src="/assets/img/contact-plus.png" alt="plus-img">
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
            <img src="/assets/img/task-delete-button.png" alt="delete-img">
        </div>
        <div class="edit-button-contact">
            <img onclick="editContact()" src="/assets/img/task-edit-button.png" alt="edit-img">
        </div>
    </section>
    `;
}


function renderFloatAddTask() {
    if (window.innerWidth > 800) {
        document.getElementById("content").innerHTML = addTaskFloat();
    } else {
        resetContent();
        document.getElementById("popUpDiv").innerHTML = renderAddTask();
    }
}
/**
 * This function opens the floating add task editor to add new tasks
 * 
 */
function addTaskFloat() {
    document.getElementById('popUpDiv').classList.remove('d-none');
    document.getElementById('popUpDiv').classList.add('d-flex');
    slideInPopUp();
    document.getElementById('popUpDiv').innerHTML = /*html*/`
    <div class="border">
        <form class="add-task-scroll">
                <!-- man kommt normal über add-task button auf die seite, 
                    wenn man aber vom board auf + drückt dann verschwindet  die span hier drunter und das 
                    X darunter taucht auf ! -->
                <div onclick="closeEditContact()" class="add-task-x-position-float">
                    <img src="/assets/img/x-button-black.png" alt="x-button-img">
                </div>
                <div class="mt-11 responsive-hide">
                  <span >Kanban Project Management Tool</span>
                </div>
                <!-- hier drüber wird je nach ansicht die span /x-button div ein & ausgeblendet -->
                <h2 class="font-47 add-task-h2">Add Task</h2>
                <div class="desktop-size">
                    <div class="add-task-responsive-left">
                        <div class="title">
                            <span>Title</span>
                            <input type="text" placeholder="Enter a Title" required>
                        </div>
                        <div class="description">
                            <span class="mt-11">Description</span>
                            <textarea name="" id="" cols="4" rows="4" placeholder="Enter a Description"
                                required></textarea>
                        </div>
                        <div class="prio">
                            <span class="mt-11 mb-11">Prio</span>
                            <div class="prio-row">
                                <div class="prio-class">
                                    <span>Urgent</span>
                                    <img src="/assets/img/task-prio-urgent.png" alt="urgent-img">
                                </div>
                                <div class="prio-class">
                                    <span>Medium</span>
                                    <img src="/assets/img/task-prio-medium.png" alt="medium-img">
                                </div>
                                <div class="prio-class">
                                    <span>Low</span>
                                    <img src="/assets/img/task-prio-low.png" alt="low-img">
                                </div>
                            </div>
                        </div>
                        <div class="add-task-date">
                            <span class="mt-11">Due date</span>
                            <div class="date-box-add-task">
                                <input class="input-date" type="date" placeholder="dd/mm/yyyy" onmousedown="this.click()">
                                <img src="/assets/img/task-calendar.png" alt="calendar-img" required>
                            </div>
                        </div>
                    </div>
                    <div class="add-task-line-margin">
                    <div class="add-task-vertical-line">
                    </div>
                    </div>
                    <div class="add-task-responsive-right">
                        <div class="category-select-box">
                            <span>Category</span>
                            <select name="category" id="category-task" class="category-select">
                                <option value="">Select task category</option>
                                <option value="orange">Orange</option>
                                <option value="blue">Blue</option>
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                            </select>
                        </div>
                        <div class="assigned-add-task">
                            <span class="mt-11">Assigned to</span>
                            <select name="assigned" id="assigned-task" class="assigned-select">
                                <option value="">Select contacts to assign</option>
                                <option value="orange">name1</option>
                                <option value="blue">name2</option>
                            </select>
                        </div>
                        <div class="subtask">
                            <span class="mt-11">Subtasks</span>
                            <div class="subtask-box">
                                <input class="input-subtask" type="text" placeholder="Add  new subtask">
                                <img src="/assets/img/task-plus.png" alt="plus-img">
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>


                            <!-- test zum scrollen -->
<!-- 
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 5</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 10</span>
                            </div><div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 10</span>
                            </div> <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 10</span>
                            </div><div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 10</span>
                            </div> <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 10</span>
                            </div><div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 10</span>
                            </div> -->

                            <!-- test zum scrollen ende -->


                        </div>
                    </div>
                </div>
                <div class="task-button-box">
              <div class="clear-task-button">
                <span>Clear</span>
                <img src="./assets/img/x-button-black.png" alt="x-img">
              </div>
              <div class="add-task-button">
                <span>Create Task</span>
                <img src="./assets/img/hook.png" alt="haken-img">
              </div>
            </div>
            </form>
</div>
    `;
}

/**
 * This function opens the edit contact area to edit contacts
 * 
 */
function editContact() {
    document.getElementById('popUpDiv').classList.remove('d-none');
    document.getElementById('popUpDiv').classList.add('d-flex');
    slideInPopUp();
  document.getElementById('popUpDiv').innerHTML = /*html*/`
        <!-- <section class="content"> -->
        <div class="border">
            <div class="top-bg">
                <div class="x-position">
                    <img onclick="closeEditContact()" src="/assets/img/x-button-white.png" alt="x-button-img">
                </div>
                <div>
                    <div>
                        <h2 class="font-32 mt-0 mb-11">Edit contact</h2>
                    </div>
                    <div>
                        <img src="/assets/img/blue-line-mobile.png" alt="blue-line-img">
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
                            <img src="/assets/img/charakter-icon.png" alt="charakter-img">
                        </div>
                    </div>

                    <div class="name">
                        <div class="name-box">
                            <input class="input-name" type="text" placeholder="email muss mit JS eingefügt werden" required>
                            <img src="/assets/img/email-icon.png" alt="email-img">
                        </div>
                    </div>

                    <div class="name">
                        <div class="name-box">
                            <input class="input-name" type="text" placeholder="phone Nr muss mit JS eingefügt werden" required>
                            <img src="/assets/img/phone-icon.png" alt="phone-img">
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
 * This function close the edit contact window
 * 
 */
function closeEditContact() {
    document.getElementById('popUpDiv').classList.add('d-none');
    document.getElementById('popUpDiv').classList.remove('d-flex');
  document.getElementById('popUpDiv').innerHTML = ``;
}

function renderLegalNotice() {
    resetContent();
    document.getElementById("content").innerHTML = /*html*/ `
     <div class="overflow-scroll">
    <div class="help-container">

<div class="over-headline">
    <span>Kanban Project Management Tool</span>
    <img class="go-back" onclick="renderSummary()" src="/assets/img/go-back.png"> 
</div>

<h1 class="headline font-64">Legal Notice</h1>




<h3 style="margin-bottom: 50px;"><u> This Legal Notice complies with the German laws under § 5 TMG and § 55
        RStV.</u></h3>
<b>Responsible for Content:</b>

<p>Annika Rothe <br>
    Bei der Kirche, 9 <br>
    23749 Grube</p>


<p>Tobias Heinze <br>
   Holzhäuser Straße 65<br>
   04299 Leipzig</p>


<p>Albert W..hat ever^^ <br>
    <br>
</p>


<b>Contact:</b> <br> <br>
Phone: <br>
E-Mail:


 
<h2>Liability for Content</h2>

The contents of our website have been created with the greatest possible care. However, we cannot guarantee the
contents' accuracy, completeness, or topicality. According to Section 7, paragraph 1 of the TMG <br>
(Telemediengesetz -
German Telemedia Act), we as service providers are liable for our content on these pages by general laws.
However,
according to Sections 8 to 10 of the TMG, we service providers are not <br> obliged to monitor external
information
transmitted or stored or investigate circumstances pointing to illegal activity. Obligations to remove or block
the
use
of information under general laws remain unaffected. <br> However, a liability in this regard is only possible
from the
moment of knowledge of a specific infringement. Upon notification of such violations, we will remove the content
immediately.

<h2>Liability for Links</h2>

Our website contains links to external websites, over whose contents we have no control. Therefore, we cannot
accept
any
liability for these external contents. The respective provider or operator of the websites <br> is always
responsible for
the
contents of the linked pages. The linked pages were checked for possible legal violations at the time of
linking.
Illegal contents were not identified at the time of linking. <br> However, permanent monitoring of the contents
of the
linked
pages is not reasonable without specific indications of a violation. Upon notification of violations, we will
remove
such links immediately.

<h2>Copyright</h2>

The contents and works on these pages created by the site operator are subject to German copyright law. The
duplication,
processing, distribution, and any kind of utilization outside the limits of copyright require <br> the written
consent of
the
respective author or creator. Downloads and copies of these pages are only permitted for private, non-commercial
use. In
so far as the contents on this site were not created by the operator, <br> the copyrights of third parties are
respected.
In
particular, third-party content is marked as such. Should you become aware of a copyright infringement, please
inform us
accordingly. Upon notification of violations, <br> we will remove such contents immediately. <br>

Last Updated: [05/30/2023]
</div>
</div>

    `;
}

function renderHelp() {
    resetContent();
    document.getElementById("content").innerHTML = /*html*/ `
   <div class="help-container">

<div class="over-headline">
<span>Kanban Project Management Tool</span>
<img class="go-back" onclick="renderSummary()" src="/assets/img/go-back.png">
</div>
<h1 class="headline font-64">Help</h1> 


<h2>What is Join?</h2>

<b>Join</b>  is a project initiated by the <b> Developer Academy</b>, aimed at providing hands-on experience with Git in the context of a complex project. <br> The "Join" project was collaboratively executed by a team of three individuals over a period of three weeks.
<br>
<h3> How to use it:</h3>
<b class= "font-27">1.</b>  You have the option to either create an account or use guest access to log in. Follow the instructions provided on the homepage. <br>Once logged in, you will be directed to the "Summary" page, where you can find an overview of all tasks. Click on the overview to access the board or use the navigation on the left. <br> <br>
<b class= "font-27">2.</b> There are multiple ways to add new tasks. For instance, you can utilize the "Add Task" option in the menu or use the "Add Task" button located at the top right of the "Board" interface. To modify or delete a task, simply click on it. <br> <br>
<b class= "font-27">3.</b> You can view all existing contacts. Click on a name to access further information. Additionally, you can directly assign tasks to contacts by clicking on "+ Add Task." For editing or deleting contacts, use the "Edit" option, and to create a new contact, select "New Contact."
</div>
    `;
}