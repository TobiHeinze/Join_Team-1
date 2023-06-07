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


function updateTaskArray() {
    let taskstatus = document.getElementById('addTaskStatus').value;
    contentArray[0]['tasks'][0]['taskStatus'].push(taskstatus);




    for (let i = 0; i < contentArray[0]['tasks'][0]['title'].length + 1; i++) {

        for (let j = 0; j < 4; j++) {
            if (contentArray[0]['tasks'][0]['taskStatus'][i] == j) {
                // document.getElementById(taskStatus${j}).innerHTML += generateBoardHTML(i);
            }
        }
    }
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