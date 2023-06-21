/**
 * This is a help function thats olny sources out the HTML code to smaller the code
 * 
 * @param {*} param is a string where opened the site
 * @returns html code
 */
function renderAddTaskHTML(param) {
    return /*html*/ `
<div id="smallAddTaskDoNotCloseWhenThisId"></div>
<div onclick="checkIfParam('${param}')" id="addXButtonTask" class="add-task-x-position d-none">
  <img src="./assets/img/x-button-black.png" alt="x-button-img">
</div>
<div class="mt-11 responsive-hide">
  <span>Kanban Project Management Tool</span>
</div>
<h2 class="font-47 add-task-h2">Add Task</h2>
<div id="contactCreatedDiv" class="contact-created">
    Contact successfully created
</div>
<form id="myAddForm" class="add-task-scroll" onsubmit="updateTaskArray(); return false;">
  <button class="create-button"> Create <img src="./assets/img/hook.png" alt="create task"></button>
  <div class="desktop-size">
    <div class="add-task-responsive-left">
      <div class="title">
        <span>Title</span>
        <input id="addTitle" type="text" placeholder="Enter a Title" required>
      </div>
      <div class="description">
        <span class="mt-11">Description</span>
        <textarea name="" id="addDescription" cols="4" rows="4" placeholder="Enter a Description" required></textarea>
      </div>
      <div class="prio">
        <span class="mt-11 mb-11">Priority</span>
        <div class="prio-row">
            <div id="changePrioColorurgent" onclick="addPrio('urgent')" class="prio-class">
              <span id="addPrioUrgent">Urgent</span>
              <img src="./assets/img/task-prio-urgent.png" alt="urgent-img">
            </div>
            <div id="changePrioColormedium" onclick="addPrio('medium')" class="prio-class">
              <span>Medium</span>
              <img src="./assets/img/task-prio-medium.png" alt="medium-img">
            </div>
            <div id="changePrioColorlow" onclick="addPrio('low')" class="prio-class">
              <span>Low</span>
            <img src="./assets/img/task-prio-low.png" alt="low-img">
          </div>
        </div>
      </div>
      <div class="add-task-date">
        <span class="mt-11">Due date</span>
        <div class="date-box-add-task">
          <input id="addDueDate" class="input-date" type="date" placeholder="dd/mm/yyyy" required>
          <img src="./assets/img/task-calendar.png" alt="calendar-img">
        </div>
      </div>
    </div>
    <div class="add-task-line-margin">
      <div class="add-task-vertical-line">
      </div>
    </div>
    <div class="add-task-responsive-right">
      <div class="mb-11">Category</div>
      <div id="renderAddNewCategory">
      </div>
      <div class="multiselect">
        <div class="selectBox" onclick="showCheckboxes(1)" id="selectBox1">
          <div class="flex">
            <div id="categoryOptionShowSelected">Select task category</div>
            <div id="addNewCategoryOption">
            </div>
            <div class="arrow">&#9660;</div>
          </div>
          <div class="overSelect"></div>
        </div>
        <div id="checkboxes1" class="flex-checkboxes">
        </div>
      </div>
      <div id="addColorToNewCategory">
      </div>
      <div class="mb-11 mt-11">Assigned to</div>
      <div class="multiselect">
        <div class="selectBox" onclick="showCheckboxes(2)" id="selectBox2">
          <div class="flex">
            <div>Select contacts to assign</div>
            <div class="arrow">&#9660;</div>
          </div>
          <div class="overSelect"></div>
        </div>
        <div id="checkboxes2" class="flex-checkboxes">
        </div>
      </div>
      <div id="renderAddContactInitials"></div>
      <div class="subtask">
        <span class="mt-11">Subtasks</span>
        <div class="subtask-box">
          <input id="inputAddSubtaskContent" class="input-subtask" type="text" placeholder="Add new subtask">
          <img src="./assets/img/task-plus.png" alt="plus-img" onclick="addSubtask()">
        </div>
        <div id="addSubtaskContent">
        </div>
      </div>
    </div>
  </div>
  <div class="task-button-box">
    <div onmouseover="changeImage(true)" onmouseout="changeImage(false)" onclick="renderAddTask()" class="clear-task-button">
      <span>Clear</span>
      <img id="myImgX" src="./assets/img/x-button-black2.png" alt="x-img">
    </div>
    <button class="add-task-button">
      <span>Create Task</span>
      <img src="./assets/img/hook.png" alt="haken-img">
    </button>
  </div>
</form>
<div id="addTaskCreatedDiv" class="contact-created">
  <span>Task added to board</span>
  <img src="./assets/img/task-board.png" alt="board-img">
</div>
    `;
}


/**
 * This is a help function thats olny sources out the HTML code to smaller the code
 * 
 * @param {*} param is a string where opened the site
 * @returns html code
 */
function addTaskFloatHTML(param) {
    return /*html*/`
<div id="hideFloatAddTask" class="border">
  <div onclick="closeEditContact()" class="add-task-x-position-float">
    <img src="./assets/img/x-button-black.png" alt="x-button-img">
  </div>
  <div class="mt-11 responsive-hide">
    <span>Kanban Project Management Tool</span>
  </div>
  <div style="width: 614px;" class="flex">
    <h2 class="font-47 add-task-h2">Add Task</h2>
  </div>
  <div id="contactCreatedDiv" class="contact-created">
    Contact successfully created
  </div>
  <form id="myAddForm" class="add-task-scroll" onsubmit="updateTaskArray(); return false;">
    <button class="create-button2"><img class="create-button" src="./assets/img/create-button.png"
        alt="create task"></button>
    <div class="desktop-size">
      <div class="add-task-responsive-left">
        <div class="title">
          <span>Title</span>
          <input id="addTitle" type="text" placeholder="Enter a Title" required>
        </div>
        <div class="description">
          <span class="mt-11">Description</span>
          <textarea name="" id="addDescription" cols="4" rows="4" placeholder="Enter a Description" required></textarea>
        </div>
        <div class="prio">
          <span class="mt-11 mb-11">Priority</span>
          <div class="prio-row">
            <div id="changePrioColorurgent" onclick="addPrio('urgent')" class="prio-class">
              <span id="addPrioUrgent">Urgent</span>
              <img src="./assets/img/task-prio-urgent.png" alt="urgent-img">
            </div>
            <div id="changePrioColormedium" onclick="addPrio('medium')" class="prio-class">
              <span>Medium</span>
              <img src="./assets/img/task-prio-medium.png" alt="medium-img">
            </div>
            <div id="changePrioColorlow" onclick="addPrio('low')" class="prio-class">
              <span>Low</span>
            <img src="./assets/img/task-prio-low.png" alt="low-img">
          </div>
        </div>
      </div>
        <div class="add-task-date">
          <span class="mt-11">Due date</span>
          <div class="date-box-add-task">
            <input id="addDueDate" class="input-date" type="date" placeholder="dd/mm/yyyy" required>
            <img src="./assets/img/task-calendar.png" alt="calendar-img">
          </div>
        </div>
      </div>
      <div class="add-task-line-margin">
        <div class="add-task-vertical-line">
        </div>
      </div>
      <div class="add-task-responsive-right">
        <div class="mb-11">Category</div>
        <div id="renderAddNewCategoryFloat">
        </div>
        <div class="multiselect">
          <div class="selectBoxFloat" onclick="showCheckboxes(1)" id="selectBox1">
            <div class="flex">
              <div id="categoryOptionShowSelected">Select task category</div>
              <div id="addNewCategoryOption">
              </div>
              <div class="arrow">&#9660;</div>
            </div>
            <div class="overSelect"></div>
          </div>
          <div id="checkboxes1" class="flex-checkboxes-float">
          </div>
        </div>
        <div id="addColorToNewCategory">
        </div>
        <div class="mb-11 mt-11">Assigned to</div>
        <div class="multiselect">
          <div class="selectBoxFloat" onclick="showCheckboxes(2)" id="selectBox2">
            <div class="flex">
              <div>Select contacts to assign</div>
              <div class="arrow">&#9660;</div>
            </div>
            <div class="overSelect"></div>
          </div>
          <div id="checkboxes2" class="flex-checkboxes-float">
          </div>
        </div>
        <div id="renderAddContactInitials"></div>
        <div class="subtask">
          <span class="mt-11">Subtasks</span>
          <div class="subtask-box">
            <input id="inputAddSubtaskContent" class="input-subtask" type="text" placeholder="Add new subtask">
            <img src="./assets/img/task-plus.png" alt="plus-img" onclick="addSubtask()">
          </div>
          <div id="addSubtaskContent">
          </div>
        </div>
      </div>
    </div>
    <div class="task-button-box">
      <div onmouseover="changeImage(true)" onmouseout="changeImage(false)" onclick="renderFloatAddTask()" class="clear-task-button">
        <span>Clear</span>
        <img id="myImgX" src="./assets/img/x-button-black2.png" alt="x-img">
      </div>
      <button class="add-task-button">
        <span>Create Task</span>
        <img src="./assets/img/hook.png" alt="haken-img">
      </button>
    </div>
  </form>
  <div id="addTaskCreatedDiv" class="contact-created">
    <span>Task added to board</span>
    <img src="./assets/img/task-board.png" alt="board-img">
  </div>
</div>
    `;
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
  return document.getElementById('renderAddNewCategoryFloat').innerHTML = /*html*/`
  <div class="new-category-float">
    <input id="newCategoryValue" type="text" placeholder="New category name">
    <img onclick="closeNewCategoryFloat()" src="./assets/img/black-x-button.png" alt="x-img">
    <img onclick="addNewCategoryToArray()" src="./assets/img/black-hook.png" alt="hook-img">
  </div>
`;
}