/**
 * This function renders the AddTask area
 * 
 */
async function renderAddTask() {
    contentArray = await getItem(key);
    resetContent();
    document.getElementById("content").innerHTML = renderAddTaskHTML();
    renderAddTaskCategoryOptions();
    renderAddTaskAssignedToOptions();
}


/**
 * This function renders the add task popup when klick in the contact area to give a special contact a task
 * 
 */
function renderFloatAddTask() {
    if (window.innerWidth > 800) {
        document.getElementById("content").innerHTML = addTaskFloat();
        // document.getElementById("popUpDiv").innerHTML = renderAddTask();
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
    // hier könnten wir vllt noch den selben addtask einbauen wir  normal nur den mit media query 
    // verändern dann müsste man ids nicht doppelt vergeben
    document.getElementById('popUpDiv').innerHTML = addTaskFloatHTML();
}


/**
 * This function shows or hide the dropwdown menus
 * 
 */
let expanded = [false, false];

function showCheckboxes(index) {
    let checkboxes = document.getElementById("checkboxes" + index);
    if (!expanded[index - 1]) {
        checkboxes.style.display = "block";
        expanded[index - 1] = true;
    } else {
        checkboxes.style.display = "none";
        expanded[index - 1] = false;
    }
}


/**
 * This function renders the category options inside the drowdown menu
 * 
 */
function renderAddTaskCategoryOptions() {
    for (let i = 0; i < contentArray['tasks']['categoryName'].length; i++) {
        // const element = contentArray['tasks']['categoryName'][i];
        document.getElementById('checkboxes1').innerHTML += /*html*/`
        <label onclick="categoryOption(${i})">${contentArray['tasks']['categoryName'][i]}<div class="circle" style="background-color: ${contentArray['tasks']['categoryBgColor'][i]}"></div></label>
        `;
    }
}


/**
 * This function renders the category in the header of the drowdown menu
 * 
 */
function categoryOption(index) {
    document.getElementById('categoryOptionShowSelected').innerHTML = `
      ${contentArray['tasks']['categoryName'][index]}
    `;
    document.getElementById('checkboxes1').style.display = "none";
    expanded[0] = false;
}


/**
 * This function renders the assigned to options inside the drowdown menu
 * 
 */
function renderAddTaskAssignedToOptions() {
    for (let i = 0; i < contentArray['contacts']['name'].length; i++) {
        document.getElementById('checkboxes2').innerHTML += /*html*/`
        <label for="assignedToOptions${i}">
        <input type="checkbox" id="assignedToOptions${i}" value="${contentArray['contacts']['name'][i]}" />
          ${contentArray['contacts']['name'][i]}
        </label>
      `;
    }
}


/**
 * This function saves onclick when everything in the form is required in the renderAddTaskHTML function
 * 
 */
function updateTaskArray() {
    let addTitle = document.getElementById('addTitle').value;
    contentArray['tasks']['title'].push(addTitle);
    console.log(addTitle);

    let addDescription = document.getElementById('addDescription').value;
    contentArray['tasks']['description'].push(addDescription);
    console.log(addDescription);

    let addDueDate = document.getElementById('addDueDate').value;
    contentArray['tasks']['dueDate'].push(addDueDate);
    console.log(addDueDate);

    // task category options 
    let addTaskStatus = document.getElementById('categoryOptionShowSelected').value;
    contentArray['tasks']['choosenCategoryName'].push(addTaskStatus);
    console.log(addTaskStatus);

    // task option ( in progress/ done / awainting feedback) eine null ist immer To Do (feld 1 bzw 0 )
    contentArray['tasks']['taskStatus'].push('0');
    

    // assigned to selector 
    let selectedNames = [];
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        let selectedName = checkbox.value;
        selectedNames.push(selectedName);
    });
    contentArray['tasks']['assignedTo'].push({
        "name": selectedNames,
        "nameInitials": [], // Hier kannst du weitere entsprechende Werte hinzufügen
        "contactImageBgColor": [] // Hier kannst du weitere entsprechende Werte hinzufügen
      });
    console.log(selectedNames);

    // subtask
    contentArray['tasks']['subtasks'].push({
        "subtask": currentSubtasks,
        "subtaskStatus": currentSubtaskStatus, //automatisch auf open bei hinzufügen
      });
      console.log(currentSubtasks);
      console.log(currentSubtaskStatus);

    // prio
    contentArray['tasks']['priority'].push(addPriority);
    console.log(addPriority);

    setItem(key, contentArray);
}


/**
 * This function added subtasks to the subtask add area
 * 
 */
currentSubtasks = [];
currentSubtaskStatus = [];
function addSubtask() {
    let subtask = document.getElementById('inputAddSubtaskContent').value;
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


let addPriority = [];
/**
 * This function select the choosen priority status to the addPriority array
 * 
 * @param {*} priority this parameter comes from the three diffrent priority types when klick on them to select
 */
function addPrio(priority) {
    addPriority = [priority];
    console.log(addPriority);
}