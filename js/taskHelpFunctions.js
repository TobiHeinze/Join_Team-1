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