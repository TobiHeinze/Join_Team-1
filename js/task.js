/**
 * This function renders the AddTask area
 * 
 */
function renderAddTask() {
    resetContent();
    document.getElementById("content").innerHTML = renderAddTaskHTML();
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

    let addCategoryName = document.getElementById("addCategoryName").value;
    contentArray['tasks']['categoryName'].push(addCategoryName);
    console.log(addCategoryName);

    let addAssignedTo = document.getElementById("addAssignedTo").value;
    contentArray['tasks']['assignedTo'].push(addAssignedTo);
    console.log(addAssignedTo);

    // setItem(key, contentArray);
}


// function updateTaskHTML() {
//     for (let i = 0; i < contentArray[0]['tasks'][0]['title'].length + 1; i++) {

//         for (let j = 0; j < 4; j++) {
//             if (contentArray[0]['tasks'][0]['taskStatus'][i] == j) {
//                 document.getElementById(taskStatus${j}).innerHTML += generateBoardHTML(i);
//             }
//         }
//     }
// }