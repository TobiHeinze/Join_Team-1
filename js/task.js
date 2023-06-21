let category = [];
let randomBgColor = [];
currentSubtasks = [];
currentSubtaskStatus = [];
let addPriority = [];


/**
 * This function renders the addtask area
 * 
 * @param {*} param this parameter is where addtask is opended and give it to the next pages to handle the page
 */
async function renderAddTask(param) {
    contentArray = await getItem(key);
    resetContent();
    currentSubtasks = [];
    currentSubtaskStatus = [];
    document.getElementById("content").innerHTML = renderAddTaskHTML(param);
    renderAddTaskCategoryOptions();
    renderAddTaskAssignedToOptions(param);
    grayBackgroundForCurrentPage('addTaskBackgroundSidebar');
}


/**
 * This function renders the add task popup when klick in the contact area to give a special contact a task
 * 
 * @param {*} page this parameter is the opened page
 */
async function renderFloatAddTask(param) {
    contentArray = await getItem(key);
    if (window.innerWidth > 800) {
        document.getElementById('popUpDiv').classList.remove('d-none');
        document.getElementById('popUpDiv').classList.add('d-flex');
        slideInPopUp();
        currentSubtasks = [];
        currentSubtaskStatus = [];
        document.getElementById('popUpDiv').innerHTML = addTaskFloatHTML();
        renderAddTaskCategoryOptions();
        renderAddTaskAssignedToOptions(param);
    } else {
        document.getElementById("popUpDiv").innerHTML = await renderAddTask(param);
        document.getElementById('addXButtonTask').classList.remove('d-none');
    }
}


let expanded = [false, false];
/**
 * This function shows or hide the dropwdown menus
 * 
 * @param {*} index  is the number in the array
 */
function showCheckboxes(index) {
    let checkboxes = document.getElementById("checkboxes" + index);
    document.getElementById(`selectBox${index}`).style.borderBottomLeftRadius = "0";
    document.getElementById(`selectBox${index}`).style.borderBottomRightRadius = "0";
    if (!expanded[index - 1]) {
        checkboxes.style.display = "block";
        expanded[index - 1] = true;
    } else {
        document.getElementById(`selectBox${index}`).style.borderRadius = "10px";
        checkboxes.style.display = "none";
        expanded[index - 1] = false;
    }
}


/**
 * This function renders the category options inside the drowdown menu
 * 
 */
function renderAddTaskCategoryOptions() {
    document.getElementById('checkboxes1').innerHTML += /*html*/`
    <div onclick="addNewCategory()" class="option flex">
      <div class="width-100">New category</div>
    </div>
  `;
    for (let i = 0; i < contentArray['settings']['categoryName'].length; i++) {
        document.getElementById('checkboxes1').innerHTML += /*html*/`
        <div class="option" onclick="categoryOption(${i})">${contentArray['settings']['categoryName'][i]}
          <div class="circle" style="background-color: ${contentArray['settings']['categoryBgColor'][i]}">
          </div>
        </div>
        `;
    }
}


/**
 * This function modify the dropdown category menu to add a new category
 * 
 */
function addNewCategory() {
    document.getElementById('selectBox1').classList.add('d-none');
    document.getElementById('checkboxes1').classList.add('d-none');
    if (document.getElementById('renderAddNewCategory') !== null) {
        renderAddNewCategoryHTML();
    }
    if (document.getElementById('renderAddNewCategoryFloat') !== null) {
        renderAddNewCategoryHTMLFloat();
    }
}


/**
 * This function outsources html code
 * 
 * @returns html code
 */
function renderAddNewCategoryHTML() {
    return document.getElementById(`renderAddNewCategory`).innerHTML = /*html*/`
    <div class="new-category">
      <input id="newCategoryValue" type="text" placeholder="New category name">
      <img onclick="closeNewCategory()" src="./assets/img/black-x-button.png" alt="x-img">
      <img onclick="addNewCategoryToArray()" src="./assets/img/black-hook.png" alt="hook-img">
    </div>
  `;
}


/**
 * This function outsources html code
 * 
 * @returns html code
 */
function renderAddNewCategoryHTMLFloat() {
    return  document.getElementById('renderAddNewCategoryFloat').innerHTML = /*html*/`
    <div class="new-category-float">
      <input id="newCategoryValue" type="text" placeholder="New category name">
      <img onclick="closeNewCategoryFloat()" src="./assets/img/black-x-button.png" alt="x-img">
      <img onclick="addNewCategoryToArray()" src="./assets/img/black-hook.png" alt="hook-img">
    </div>
  `;
}


/**
 * This function close the add new category inputfield and go back to the dropdown menu
 * 
 */
function closeNewCategory() {
    document.getElementById('renderAddNewCategory').innerHTML = ``;
    document.getElementById('selectBox1').classList.remove('d-none');
    document.getElementById('checkboxes1').classList.remove('d-none');
    document.getElementById('addColorToNewCategory').innerHTML = ``;
}


/**
 * This function close the add new category inputfield and go back to the dropdown menu
 * 
 */
function closeNewCategoryFloat() {
    document.getElementById('renderAddNewCategoryFloat').innerHTML = ``;
    document.getElementById('selectBox1').classList.remove('d-none');
    document.getElementById('checkboxes1').classList.remove('d-none');
    document.getElementById('addColorToNewCategory').innerHTML = ``;
}


/**
 * This function add a new category to the array with a random color
 * 
 */
function addNewCategoryToArray() {
    category = [];
    category = document.getElementById('newCategoryValue').value;
    if (category.length < 2) {
        alert("The category must contain at least 2 characters.");
        return;
      }
    if (document.getElementById('renderAddNewCategory') !== null) {
        document.getElementById('renderAddNewCategory').innerHTML = ``;
    }
    if (document.getElementById('renderAddNewCategoryFloat') !== null) {
        document.getElementById('renderAddNewCategoryFloat').innerHTML = ``;
    }
    document.getElementById('selectBox1').classList.remove('d-none');
    document.getElementById('checkboxes1').classList.remove('d-none');
    document.getElementById('addColorToNewCategory').innerHTML = ``;
    categoryOption2();
}


/**
 * This function renders the category in the header of the drowdown menu
 * 
 * @param {*} index  this is the position in the array
 */
function categoryOption(index) {
    document.getElementById('addNewCategoryOption').innerHTML = ``;
    document.getElementById('categoryOptionShowSelected').innerHTML = /*html*/`
    <div class="flex align-center">
      <div id="categoryOptionShowSelected2">${contentArray['settings']['categoryName'][index]}
      </div>
      <div id="addNewCategoryColor" class="circle" style="background-color: ${contentArray['settings']['categoryBgColor'][index]}">
      </div>
      </div>
    `;
    document.getElementById('checkboxes1').style.display = "none";
    document.getElementById('selectBox1').style.borderRadius = "10px";
    expanded[0] = false;
}


/**
 * This function is a help function that added the name and a random color to show in the category dropdown menu
 * 
 */
function categoryOption2() {
    randomBgColor = addRandomBackgroundColorToNewCategory();
    document.getElementById('categoryOptionShowSelected').innerHTML = ``;
    document.getElementById('addNewCategoryOption').innerHTML = /*html*/`
    <div class="flex align-center">
      <div id="newCategoryName">${category}
      </div>
      <div id="addNewCategoryColor" class="circle" style="background-color: ${randomBgColor}">
      </div>
    </div>
    `;
    document.getElementById('checkboxes1').style.display = "none";
    document.getElementById('selectBox1').style.borderRadius = "10px";
    expanded[0] = false;
}


/**
 * This function renders the assigned to options inside the drop down menu
 * 
 */
function renderAddTaskAssignedToOptions(param) {
    document.getElementById('checkboxes2').innerHTML += /*html*/`
    <div onclick="addNewContact('${param}')" class="option flex">
      <div class="width-100">Invite new Contact
      </div>
    </div>
  `;
    for (let i = 0; i < contentArray['contacts']['name'].length; i++) {
        document.getElementById('checkboxes2').innerHTML += /*html*/`
      <div class="option flex">
        <input type="checkbox" onclick="toggleCheckboxColor(${i})" id="assignedToOptions${i}" value="${contentArray['contacts']['name'][i]}" />
        <div onclick="toggleCheckbox(${i})" class="width-100">
          ${contentArray['contacts']['name'][i]}
        </div>
      </div>
      `;
    }
}


/**
 * This function mark the checkboxes with a hook when toogle
 * 
 * @param {*} index 
 */
function toggleCheckbox(index) {
    let checkbox = document.getElementById(`assignedToOptions${index}`);
    checkbox.checked = !checkbox.checked;
    checkbox.setAttribute("checked", checkbox.checked);
    toggleCheckboxColor(index);
}


/**
 * This function is a help function that renders a div with name initials and colors when name is toggled
 * 
 * @param {*} index is the position in the array
 */
function toggleCheckboxColor(index) {
    if (!document.getElementById(`colorAlreadyAdded${index}`)) {
    document.getElementById('renderAddContactInitials').innerHTML += /*html*/`
    <div id="clearColorAlreadyAdded${index}">
    <div id="colorAlreadyAdded${index}" class="circle-add-task" style="background-color: ${contentArray['contacts']['contactImageBgColor'][index]}">
    ${contentArray['contacts']['nameInitials'][index]}
    </div>
    `;
    } else if (document.getElementById(`clearColorAlreadyAdded${index}`)) {
        removeDivById(`clearColorAlreadyAdded${index}`);
    }
}


/**
 * This function is a help function that delete a div with a special id
 * 
 * @param {*} divId this is the special id that should be deleted
 */
function removeDivById(divId) {
    let div = document.getElementById(divId);
    if (div) {
        div.remove();
    }
}


/**
 * This function gives back a random color from the given colors in the array
 * 
 */
function addRandomBackgroundColorToNewCategory() {
    randomBgColor = [];
    random = Math.floor(Math.random() * contentArray['settings']['categoryBgColor'].length);
    return contentArray['settings']['categoryBgColor'][random];
}


/**
 * This is a help function for adding a task to get the title
 * 
 */
function processTitle() {
    let addTitle = document.getElementById('addTitle').value;
    contentArray['tasks']['title'].push(addTitle);
}


/**
 * This is a help function for adding a task to get the description
 * 
 */
function processDescription() {
    let addDescription = document.getElementById('addDescription').value;
    contentArray['tasks']['description'].push(addDescription);
}


/**
 * This is a help function for adding a task to get the due date
 * 
 */
function processDueDate() {
    let addDueDate = document.getElementById('addDueDate').value;
    contentArray['tasks']['dueDate'].push(addDueDate);
}


/**
 * This is a help function for adding a task to get the category with the color special: there is a difference between new added categorys and existing categorys
 * 
 */
function processCategory() {
    if (document.getElementById('categoryOptionShowSelected').textContent.trim() === "Select task category") {
        contentArray['tasks']['categoryName'].push(""); //adding empty string when select task category is still selected
        contentArray['tasks']['categoryBgColor'].push("");
    } else {
        if (document.getElementById('categoryOptionShowSelected').innerHTML == "") {
            //add new category to settings and push to category task 
            let addNewCategory = document.getElementById('newCategoryName').innerHTML;
            contentArray['tasks']['categoryName'].push(addNewCategory.trim());
            contentArray['settings']['categoryName'].push(addNewCategory.trim());
            contentArray['settings']['categoryBgColor'].push(randomBgColor); // add random background color
        } else {
            //add only task category option from given options
            let addTaskStatus = document.getElementById('categoryOptionShowSelected2').innerHTML;
            contentArray['tasks']['categoryName'].push(addTaskStatus.trim());
        }
        //takes the color from the category
        let colorId = document.getElementById('addNewCategoryColor');
        let styleColor = window.getComputedStyle(colorId);
        let backgroundColor = styleColor.getPropertyValue('background-color');
        contentArray['tasks']['categoryBgColor'].push(backgroundColor);
    }
}


/**
 * This is a help function for adding a task to set the task option 
 * 
 */
function processTaskOption() {
    // task option is where the task is shown (to do, in progess, awaiting feedback, done) the 0 is for the to do area
    contentArray['tasks']['taskStatus'].push('0');
}


/**
 * This is a help function for adding a task to get the assigned to persons with their name initials and their color
 * 
 */
function processAssignedTo() {
    let selectedNames = [];
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        let selectedName = checkbox.value;
        selectedNames.push(selectedName);
    });
    let nameInitials = [];
    let contactImageBgColor = [];
    if (selectedNames.length > 0) {
        processSelectedNames(selectedNames, nameInitials, contactImageBgColor);
    } else {
        contentArray['tasks']['assignedTo'].push({
            "name": [],
            "nameInitials": [],
            "contactImageBgColor": [],
        });
    }
}


/**
 * This function is a help function and sources out the getting of the name and pushing it into the array
 * 
 * @param {*} selectedNames all names for specific contact
 * @param {*} nameInitials the name initials list for specific contact
 * @param {*} contactImageBgColor the background color list for specific contact
 */
function processSelectedNames(selectedNames, nameInitials, contactImageBgColor) {
    selectedNames.forEach(selectedName => {
        let contactIndex = contentArray['contacts']['name'].indexOf(selectedName);
        let initials = contentArray['contacts']['nameInitials'][contactIndex];
        let bgColor = contentArray['contacts']['contactImageBgColor'][contactIndex];
        nameInitials.push(initials);
        contactImageBgColor.push(bgColor);
    });
    contentArray['tasks']['assignedTo'].push({
        "name": selectedNames,
        "nameInitials": nameInitials,
        "contactImageBgColor": contactImageBgColor
    });
}


/**
 * This is a help function for adding a task to get the added subtask if there are some
 * 
 */
function processSubtasks() {
    if (currentSubtasks.length > 0) {
        contentArray['tasks']['subtasks'].push({
            "subtask": currentSubtasks,
            "subtaskStatus": currentSubtaskStatus,
        });
    } else {
        contentArray['tasks']['subtasks'].push({
            "subtask": [],
            "subtaskStatus": [],
        });
    }
}


/**
 * This is a help function for adding a task to get the choosen priority
 * 
 */
function processPriority() {
    if (addPriority.length === 0) {
        addPriority = "low";
        contentArray['tasks']['priority'].push(addPriority);
    } else {
        contentArray['tasks']['priority'].push(addPriority);
    }
}


/**
 * This is a help function to set a timeout in a async function where we can use await with
 * 
 */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


/**
 * This function saves onclick when everything in the form is required in the renderAddTaskHTML function
 * 
 */
async function updateTaskArray() {
    await getItem(key);
    processTitle();
    processDescription();
    processDueDate();
    processCategory();
    processTaskOption();
    processAssignedTo();
    processSubtasks();
    processPriority();
    document.getElementById("addTaskCreatedDiv").classList.add("show");
    await delay(2000);
    document.getElementById("addTaskCreatedDiv").classList.remove("show");
    await setItem(key, contentArray);
    renderBoardContent();
    renderBoard();
}


/**
 * This function add subtasks to the subtask add area
 * 
 */
function addSubtask() {
    let subtask = document.getElementById('inputAddSubtaskContent').value;
    if (subtask === '') {
        return;
    }
    document.getElementById('addSubtaskContent').innerHTML = ``;
    document.getElementById('inputAddSubtaskContent').value = ``;
    currentSubtasks.push(subtask);
    currentSubtaskStatus.push('open');
    for (let i = 0; i < currentSubtasks.length; i++) {
        document.getElementById('addSubtaskContent').innerHTML += /*html*/`
        <div id="addedCurrentSubtask${i}">
            - ${currentSubtasks[i]}
        </div>
    `;
    }
}


/**
 * This function select the choosen priority status to the addPriority array
 * 
 * @param {string} priority this parameter comes from the three diffrent priority types when klick on them to select and give a name, urgent, medium, low with color and a changed image
 */
function addPrio(priority) {
    addPriority = priority;
    resetPrioColor();
    if (addPriority == 'urgent') {
        document.getElementById(`changePrioColor${priority}`).style.background = '#FF3D00';
        document.getElementById(`changePrioColor${priority}`).style.color = 'white';
        document.querySelector(`#changePrioColor${priority} img`).src = './assets/img/task-prio-urgent-white.png';
    }
    if (addPriority == 'medium') {
        document.getElementById(`changePrioColor${priority}`).style.background = '#FFA800';
        document.getElementById(`changePrioColor${priority}`).style.color = 'white';
        document.querySelector(`#changePrioColor${priority} img`).src = './assets/img/add-task-prio-medium-white.png';
    }
    if (addPriority == 'low') {
        document.getElementById(`changePrioColor${priority}`).style.background = '#7AE229';
        document.getElementById(`changePrioColor${priority}`).style.color = 'white';
        document.querySelector(`#changePrioColor${priority} img`).src = './assets/img/add-task-prio-low-white.png';
    }    
}


/**
 * This function is a helpfunction and reset the color of all prioritys before adding the new priority
 * 
 */
function resetPrioColor() {
    document.getElementById(`changePrioColorurgent`).style.background = 'white';
    document.getElementById(`changePrioColorurgent`).style.color = 'black';
    document.querySelector(`#changePrioColorurgent img`).src = './assets/img/task-prio-urgent.png';

    document.getElementById(`changePrioColormedium`).style.background = 'white';
    document.getElementById(`changePrioColormedium`).style.color = 'black';
    document.querySelector(`#changePrioColormedium img`).src = './assets/img/task-prio-medium.png';

    document.getElementById(`changePrioColorlow`).style.background = 'white';
    document.getElementById(`changePrioColorlow`).style.color = 'black';
    document.querySelector(`#changePrioColorlow img`).src = './assets/img/task-prio-low.png';
}