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
        // hier sollte am besten auch renderaddtask gerendert werden und nicht extra der floating style!
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

// die farbpunkte auswählbar machen mit onclick oder so
function addNewCategory() {
    document.getElementById('selectBox1').classList.add('d-none');
    document.getElementById('checkboxes1').classList.add('d-none');
    document.getElementById('renderAddNewCategory').innerHTML = /*html*/`
    <div class="new-category">
    <input id="newCategoryValue" type="text" placeholder="New category name">
    <img onclick="closeNewCategory()" src="./assets/img/black-x-button.png" alt="x-img">
    <img onclick="addNewCategoryToArray()" src="./assets/img/black-hook.png" alt="hook-img">
    </div>
    `;
    for (let i = 0; i < contentArray['settings']['categoryBgColor'].length; i++) {
        document.getElementById('addColorToNewCategory').innerHTML += /*html*/`
        <div onclick="" class="circle" style="background-color: ${contentArray['settings']['categoryBgColor'][i]}">
    `;   
    }
}

function closeNewCategory() {
    document.getElementById('renderAddNewCategory').innerHTML = ``;
    document.getElementById('selectBox1').classList.remove('d-none');
    document.getElementById('checkboxes1').classList.remove('d-none');
    document.getElementById('addColorToNewCategory').innerHTML = ``;
}

function addNewCategoryToArray() {
    let category = document.getElementById('newCategoryValue').value;
    contentArray['settings']['categoryName'].push(category);
    // category color auch hinzufügen !
    document.getElementById('renderAddNewCategory').innerHTML = ``;
    document.getElementById('selectBox1').classList.remove('d-none');
    document.getElementById('checkboxes1').classList.remove('d-none');
    document.getElementById('addColorToNewCategory').innerHTML = ``;
    console.log('das ist die neue kategorie:', category);
    categoryOption(contentArray['settings']['categoryName'].length -1);
}


/**
 * This function renders the category in the header of the drowdown menu
 * 
 */
function categoryOption(index) {
    document.getElementById('categoryOptionShowSelected').innerHTML = /*html*/`
      <div>${contentArray['settings']['categoryName'][index]}
          <div class="circle" style="background-color: ${contentArray['settings']['categoryBgColor'][index]}">
          </div>
      </div>
    `;
    document.getElementById('checkboxes1').style.display = "none";
    document.getElementById('selectBox1').style.borderRadius = "10px";
    expanded[0] = false;
}


/**
 * This function renders the assigned to options inside the drowdown menu
 * 
 */
function renderAddTaskAssignedToOptions() {
    document.getElementById('checkboxes2').innerHTML += /*html*/`
    <div onclick="addNewContact()" class="option flex">
      <div class="width-100">Invite new Contact</div>
    </div>
  `;
    for (let i = 0; i < contentArray['contacts']['name'].length; i++) {
        document.getElementById('checkboxes2').innerHTML += /*html*/`
        <div class="option flex">
        <input type="checkbox" id="assignedToOptions${i}" value="${contentArray['contacts']['name'][i]}" />
        <div onclick="toggleCheckbox(${i})" class="width-100">
        ${contentArray['contacts']['name'][i]}
      </div>
      </div>
      `;
    }
    
}


function toggleCheckbox(index) {
    let checkbox = document.getElementById(`assignedToOptions${index}`);
    checkbox.checked = !checkbox.checked;
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
    contentArray['tasks']['categoryName'].push(addTaskStatus);
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