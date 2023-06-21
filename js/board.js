let currentDraggedElement;

async function renderBoardContent() {
  contentArray = await getItem(key);
  emptyBordContainer();
  for (let i = 0; i < contentArray["tasks"]["title"].length; i++) {
    for (let j = 0; j < 4; j++) {
      if (contentArray["tasks"]["taskStatus"][i] == j) {
        document.getElementById(`taskStatus${j}`).innerHTML +=
          generateBoardHTML(i);
      }
      checkForEmptyTaskSection(j);
    }
    changeStyleOfTask(i);
    renderAssignedToAtTasks(i);
    checkForLengthOfAssignedToAtTasks(i);
    generateSubtaskSection(i);
  }
}

let dragMiniMenu = 'close';
function openDragMiniMenu(index) {
	if (dragMiniMenu === 'open') {
		document.getElementById(`dragMiniMenu${index}`).classList.add('d-none');
		dragMiniMenu = 'close';
	} else {
		document.getElementById(`dragMiniMenu${index}`).classList.remove('d-none');
		dragMiniMenu = 'open';
	}
}

function doOpenMiniMenu(event) {
	event.stopPropagation();
}

async function changeTaskStatusMobil(index, i) {
	contentArray['tasks']['taskStatus'][index] = i;
	dragMiniMenu = 'close';
	await setItem(key, contentArray);
	await getItem(key);
	renderBoard();
}

function generateBoardHTML(index) {
	return /*html*/`
	<div id="taskNumber${index}" onclick="openTaskView(${index})" class="task-container-mobile hover" draggable="true" ondrag="animateDraggedElement(${index})" ondragstart="startDragging(${index})">
		<div class="flex between">
		  <span id="taskCategoryName${index}" class="task-category-name">${contentArray['tasks']['categoryName'][index]}</span>
		  <img onclick="openDragMiniMenu(${index}); doOpenMiniMenu(event)" src="./assets/img/go-back-arrow-blue.png" alt="change-category">
		</div>
		<div onclick="doOpenMiniMenu(event)" id="dragMiniMenu${index}" class="drag-mini-menu-box d-none">
		  <div id="showedDragMiniMenu" class="drag-mini-menu">
			<b>Move to:</b>
			<a onclick="changeTaskStatusMobil(${index},'0')">To Do</a>
			<a onclick="changeTaskStatusMobil(${index},'1')">In Progress</a>
			<a onclick="changeTaskStatusMobil(${index},'2')">Awaiting Feedback</a>
			<a onclick="changeTaskStatusMobil(${index},'3')">Done</a>
		  </div>
		</div>
		<span id="taskTitle${index}" class="task-title">${contentArray['tasks']['title'][index]}</span>
		<span id="taskDescription${index}" class="task-description">${contentArray['tasks']['description'][index]}</span>
		<div id="taskProgressBarContainer${index}" class="progress-bar-container">
				<div id="taskProgressBar${index}" class="taskProgressBar">
					<div id="taskProgressBarDone${index}" class="task-progress-bar-done"></div>
				</div>
				<div id="taskProgressBarCounter${index}" class="taskProgressBarCounter"></div>
		</div>
		<div class="task-assigned-to-prio-image">
			<div id="taskAssignedTo${index}" class="display"></div>
			<img id="taskPrioImage${index}" class="task-prio-image" src="./assets/img/task-prio-${contentArray["tasks"]["priority"][index]}.png" alt="">
		</div>
	</div>
	`;
}

function emptyBordContainer() {
  for (let j = 0; j < 4; j++) {
    document.getElementById(`taskStatus${j}`).innerHTML = ``;
  }
}

function checkForEmptyTaskSection(j) {
  if (contentArray["tasks"]["taskStatus"].includes(j.toString())) {
    document.getElementById(`taskStatusEmpty${j}`).classList.add("d-none");
  }
}

function changeStyleOfTask(i) {
  document.getElementById(`taskCategoryName${i}`).style.background =
    contentArray["tasks"]["categoryBgColor"][i];
}

function renderAssignedToAtTasks(i) {
  for (
    let j = 0;
    j < contentArray["tasks"]["assignedTo"][i]["nameInitials"].length;
    j++
  ) {
    document.getElementById(`taskAssignedTo${i}`).innerHTML += `
			<div id="assignedToImageBgColor${i}${j}" class="task-assigned-to-icon">${contentArray["tasks"]["assignedTo"][i]["nameInitials"][j]}</div>
	`;
    document.getElementById(`assignedToImageBgColor${i}${j}`).style.background =
      contentArray["tasks"]["assignedTo"][i]["contactImageBgColor"][j];
  }
}

function checkForLengthOfAssignedToAtTasks(i) {
  let assignedToLength =
    contentArray["tasks"]["assignedTo"][i]["nameInitials"].length;
  if (assignedToLength > 3) {
    for (let index = 3; index < assignedToLength; index++) {
      document
        .getElementById(`assignedToImageBgColor${i}${index}`)
        .classList.add("d-none");
    }
    let additionalLength = assignedToLength - 2;
    document.getElementById(
      `assignedToImageBgColor${i}2`
    ).innerHTML = `+${additionalLength}`;
    document.getElementById(`assignedToImageBgColor${i}2`).style.background =
      "#2A3647";
  }
}

function generateSubtaskSection(i) {
  let subtaskLength = contentArray["tasks"]["subtasks"][i]["subtask"].length;
  let subtaskDone = contentArray["tasks"]["subtasks"][i][
    "subtaskStatus"
  ].filter((x) => x === "closed").length;
  let percent = (subtaskDone / subtaskLength) * 100;
  if (contentArray["tasks"]["subtasks"][i]["subtask"].length == 0) {
    document
      .getElementById(`taskProgressBarContainer${i}`)
      .classList.add("d-none");
  } else {
    document.getElementById(
      `taskProgressBarDone${i}`
    ).style = `width: ${percent}%;`;
    document.getElementById(
      `taskProgressBarCounter${i}`
    ).innerHTML = `${subtaskDone}/${subtaskLength} Done`;
  }
}

function startDragging(id) {
  currentDraggedElement = id;
}

function allowDrop(event) {
  event.preventDefault();
}

function moveTo(taskStatus) {
  contentArray["tasks"]["taskStatus"][currentDraggedElement] = taskStatus;
  setItem(key, contentArray);
  renderBoard();
}

function animateDraggedElement(id) {
  document
    .getElementById(`taskNumber${id}`)
    .classList.add("task-container-animation");
}

function searchTasks() {
	document.getElementById('searchTasksLens').classList.add('d-none');
	document.getElementById('searchTasksResetBtn').classList.remove('d-none');
	let searchTerm = document.getElementById('searchField').value.toLowerCase();
	for (let i = 0; i < contentArray['tasks']['title'].length; i++) {
		document.getElementById(`taskNumber${i}`).classList.add('d-none');
		let titleOfTask = contentArray['tasks']['title'][i].toLowerCase();
		let descriptionOfTask = contentArray['tasks']['description'][i].toLowerCase();

		if (titleOfTask.includes(searchTerm) || descriptionOfTask.includes(searchTerm)) {
			document.getElementById(`taskNumber${i}`).classList.remove('d-none');
		}
	}
}

function resetSearchTasks() {
	document.getElementById('searchTasksLens').classList.remove('d-none');
	document.getElementById('searchTasksResetBtn').classList.add('d-none');
	document.getElementById('searchField').value = ``;
	renderBoard();
}

function renderBoard() {
  resetContent();
  document.getElementById("content").innerHTML = /*html*/ `
<div id="contactCreatedDiv" class="contact-created">
    Contact successfully created
</div>
<span class="kanban-tool-text appear-mobile">Kanban Project Management Tool</span>

<div class="board-header-section">
	<div class="board-header-mobile">
		<span class="font-47">Board</span>
		<img  src="./assets/img/plus-add-task-mobile.svg" alt="add task" onclick="renderFloatAddTask('board')" onmouseover="this.src='./assets/img/big-plus-blue.svg'"  onmouseout="this.src='./assets/img/plus-add-task-mobile.svg'">
	</div>

	<div class="board-find-section">
		<form class="form-find-task" onkeyup="searchTasks(); return false;"  action="">
			<textarea id="searchField" required class="textarea-find-task" minlength="2" name="" id="" cols="" rows="1"
			placeholder="Find Task"></textarea>
			<input type="image" src="./assets/img/find-task-lens.svg" alt="" id="searchTasksLens">
			<img class="d-none" src="./assets/img/task-view-close-btn.svg" alt="" id="searchTasksResetBtn" onclick="resetSearchTasks()">
		</form>
		<div onclick="renderFloatAddTask('board')" id="boardFindSectionImage">
			<span>Add task</span>
			<img src="./assets/img/add-task-btn-white.svg" alt=""add taks>
		</div>
	</div>
</div>

<div class="all-task-container">
	<div class="task-section-container" ondrop="moveTo('0')" ondragover="allowDrop(event)">
		<div class="header-task-status">
			<span class="task-status-description">To do</span>
			<img onclick="renderFloatAddTask('board')" src="./assets/img/add-task-button-mobile.svg" alt="add" onmouseover="this.src='./assets/img/plus-blue.png'"  onmouseout="this.src='./assets/img/add-task-button-mobile.svg'">
		</div>
		<div id="taskStatus0"></div>
		<div id="taskStatusEmpty0" class="task-container-mobile-empty">No tasks To do</div>
	</div>

	<div class="task-section-container" ondrop="moveTo('1')" ondragover="allowDrop(event)">
		<div class="header-task-status">
			<span class="task-status-description">In progress</span>
			<img onclick="renderFloatAddTask('board')" src="./assets/img/add-task-button-mobile.svg" alt="add" onmouseover="this.src='./assets/img/plus-blue.png'" onmouseout="this.src='./assets/img/add-task-button-mobile.svg'">
		</div>
		<div id="taskStatus1"></div>
		<div id="taskStatusEmpty1" class="task-container-mobile-empty">No tasks In progress</div>
	</div>

	<div class="task-section-container" ondrop="moveTo('2')" ondragover="allowDrop(event)">
		<div class="header-task-status">
			<span class="task-status-description">Awaiting feedback</span>
			<img onclick="renderFloatAddTask('board')" src="./assets/img/add-task-button-mobile.svg" alt="add" onmouseover="this.src='./assets/img/plus-blue.png'" onmouseout="this.src='./assets/img/add-task-button-mobile.svg'">
		</div>
		<div id="taskStatus2"></div>
		<div id="taskStatusEmpty2" class="task-container-mobile-empty">No tasks Awaiting feedback</div>
	</div>

	<div class="task-section-container" ondrop="moveTo('3')" ondragover="allowDrop(event)">
		<div class="header-task-status">
			<span class="task-status-description">Done</span>
			<img onclick="renderFloatAddTask('board')" src="./assets/img/add-task-button-mobile.svg" alt="add" onmouseover="this.src='./assets/img/plus-blue.png'" onmouseout="this.src='./assets/img/add-task-button-mobile.svg'">
		</div>
		<div id="taskStatus3"></div>
		<div id="taskStatusEmpty3" class="task-container-mobile-empty">No tasks Done</div>
	</div>
</div>
    `;
  renderBoardContent();
  grayBackgroundForCurrentPage("boardBackgroundSidebar");
}
