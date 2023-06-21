function openEditTask(i) {
	document.getElementById('taskViewContainer').classList.add('d-none');
	document.getElementById('editTaskContainer').classList.remove('d-none');
	document.getElementById('editTaskContainer').innerHTML = generateEditTaskHTML(i);

	renderEditTaskContent(i);
}


let editTitle = [];
let editDescription = [];
let editPriority = [];
let editdueDate = [];
let editSubtask = [];
let editSubtaskStatus = [];
let editAssignedToName = [];
let editAssignedToNameInitials = [];
let editAssignedToContactImageBgColor = [];


async function renderEditTaskContent(i) {
	renderArraysForEditTask(i);

	document.getElementById(`editTaskTitle${i}`).value = editTitle;
	document.getElementById(`editTaskDescription${i}`).value = editDescription;
	document.getElementById(`editTaskDueDate${i}`).value = editdueDate;

	changePrioInEditTask(editPriority);
	generateSubtaskSectionInEditTask(i);
	renderAssignedToInEditTask(i);
}


function renderArraysForEditTask(i) {
	editTitle = contentArray['tasks']['title'][i];
	editDescription = contentArray['tasks']['description'][i];
	editPriority = contentArray['tasks']['priority'][i];
	editdueDate = contentArray['tasks']['dueDate'][i];
	editSubtask = contentArray['tasks']['subtasks'][i]['subtask'];
	editSubtaskStatus = contentArray['tasks']['subtasks'][i]['subtaskStatus'];
	editAssignedToName = contentArray['tasks']['assignedTo'][i]['name'];
	editAssignedToNameInitials = contentArray['tasks']['assignedTo'][i]['nameInitials'];
	editAssignedToContactImageBgColor = contentArray['tasks']['assignedTo'][i]['contactImageBgColor'];
}


function changePrioInEditTask(priority) {
	editPriority = priority;
	resetPrioColorInEditTask();
	if (editPriority == 'urgent') {
		document.getElementById(`changePrioColorFor${priority}`).style.background = '#FF3D00';
		document.getElementById(`changePrioColorFor${priority}`).style.color = 'white';
		document.querySelector(`#changePrioColorFor${priority} img`).src = './assets/img/task-prio-urgent-white.png';
	}
	if (editPriority == 'medium') {
		document.getElementById(`changePrioColorFor${priority}`).style.background = '#FFA800';
		document.getElementById(`changePrioColorFor${priority}`).style.color = 'white';
		document.querySelector(`#changePrioColorFor${priority} img`).src = './assets/img/add-task-prio-medium-white.png';
	}
	if (editPriority == 'low') {
		document.getElementById(`changePrioColorFor${priority}`).style.background = '#7AE229';
		document.getElementById(`changePrioColorFor${priority}`).style.color = 'white';
		document.querySelector(`#changePrioColorFor${priority} img`).src = './assets/img/add-task-prio-low-white.png';
	}
}


function resetPrioColorInEditTask() {
	document.getElementById(`changePrioColorForurgent`).style.background = 'white';
	document.getElementById(`changePrioColorForurgent`).style.color = 'black';
	document.querySelector(`#changePrioColorForurgent img`).src = './assets/img/task-prio-urgent.png';

	document.getElementById(`changePrioColorFormedium`).style.background = 'white';
	document.getElementById(`changePrioColorFormedium`).style.color = 'black';
	document.querySelector(`#changePrioColorFormedium img`).src = './assets/img/task-prio-medium.png';

	document.getElementById(`changePrioColorForlow`).style.background = 'white';
	document.getElementById(`changePrioColorForlow`).style.color = 'black';
	document.querySelector(`#changePrioColorForlow img`).src = './assets/img/task-prio-low.png';
}


function generateSubtaskSectionInEditTask(i) {
	document.getElementById(`editTaskSubtaskContainer`).innerHTML = '';
	for (let c = 0; c < editSubtask.length; c++) {
		document.getElementById(`editTaskSubtaskContainer`).innerHTML += `
			<div class="subtask-edit-task">
			<img id="editTaskSubtaskStatus${i}${c}" onclick="changeSubtaskStatusInEditTask(${i}, ${c})" src="./assets/img/task-view-subtask-status-${contentArray['tasks']['subtasks'][i]['subtaskStatus'][c]}.svg" alt="">
			<div id="editTaskSubtask${i}${c}" ">${contentArray['tasks']['subtasks'][i]['subtask'][c]}</div>
			<img id="editTaskSubtaskDelete${i}${c}" onclick="deleteSubtaskInEditTask(${i}, ${c})" class="edit-task-subtask-delete-img" src="./assets/img/subtask-delete-btn.svg" alt="">
			</div>
			`;
	}
}


function changeSubtaskStatusInEditTask(i, c) {
	if (editSubtaskStatus[c] === 'open') {
		editSubtaskStatus[c] = 'closed';
		document.getElementById(`editTaskSubtaskStatus${i}${c}`).src = './assets/img/task-view-subtask-status-closed.svg';
	} else if (editSubtaskStatus[c] === 'closed') {
		editSubtaskStatus[c] = 'open';
		document.getElementById(`editTaskSubtaskStatus${i}${c}`).src = './assets/img/task-view-subtask-status-open.svg';
	}
}


function addNewSubtask(i) {
	let editNewSubtask = document.getElementById('addNewSubtaskInEditTask').value;
	editSubtask.push(editNewSubtask);
	editSubtaskStatus.push('open');
	generateSubtaskSectionInEditTask(i);
	document.getElementById('addNewSubtaskInEditTask').value = '';
}


function deleteSubtaskInEditTask(i, c) {
	editSubtask.splice(c, 1);
	editSubtaskStatus.splice(c, 1);
	generateSubtaskSectionInEditTask(i);
}


function renderAssignedToInEditTask(param) {
	document.getElementById('checkboxes3').innerHTML += /*html*/`
    <div onclick="addNewContact('${param}')" class="option flex">
      <div class="width-100">Invite new Contact
      </div>
    </div>
  `;
	for (let i = 0; i < contentArray['contacts']['name'].length; i++) {
		document.getElementById('checkboxes3').innerHTML += /*html*/`
      <div class="option flex" onclick="toggleCheckboxEditTask(${i})">
        <input  type="image" src="./assets/img/assigned-to-unchecked-btn.svg" id="assignedToOptionsEditTask${i}" value="${contentArray['contacts']['name'][i]}">
        <div class="width-100">
          ${contentArray['contacts']['name'][i]}
        </div>
      </div>
      `;
		if (editAssignedToName.includes(contentArray['contacts']['name'][i])) {
			document.getElementById(`assignedToOptionsEditTask${i}`).src = "./assets/img/assigned-to-checked-btn.svg";
			toggleCheckboxColorEditTask(i);
		}
	}
}


function toggleCheckboxEditTask(i) {
	let checkbox = document.getElementById(`assignedToOptionsEditTask${i}`);

	if (checkbox.src.includes("unchecked")) {
		checkbox.src = "./assets/img/assigned-to-checked-btn.svg";
		if (editAssignedToName.indexOf((contentArray['contacts']['name'][i])) == -1) {
			editAssignedToName.push((contentArray['contacts']['name'][i]));
			editAssignedToNameInitials.push((contentArray['contacts']['nameInitials'][i]));
			editAssignedToContactImageBgColor.push((contentArray['contacts']['contactImageBgColor'][i]));
		}
	} else if (checkbox.src.includes("checked")) {
		checkbox.src = "./assets/img/assigned-to-unchecked-btn.svg";
		if (editAssignedToName.indexOf((contentArray['contacts']['name'][i])) > -1) {
			index = editAssignedToName.indexOf((contentArray['contacts']['name'][i]));
			editAssignedToName.splice(index, 1);
			editAssignedToNameInitials.splice(index, 1);
			editAssignedToContactImageBgColor.splice(index, 1);
		}
	}
	toggleCheckboxColorEditTask(i);
}


function toggleCheckboxColorEditTask(index) {
	if (!document.getElementById(`colorAlreadyAddedEditTask${index}`)) {
		document.getElementById('renderAddContactInitialsEditTask').innerHTML += /*html*/`
    <div id="clearColorAlreadyAddedEditTask${index}">
    <div id="colorAlreadyAddedEditTask${index}" class="circle-add-task" style="background-color: ${contentArray['contacts']['contactImageBgColor'][index]}">
    ${contentArray['contacts']['nameInitials'][index]}
    </div>
    `;
	} else if (document.getElementById(`clearColorAlreadyAddedEditTask${index}`)) {
		removeDivByIdEditTask(`clearColorAlreadyAddedEditTask${index}`);
	}
}


function removeDivByIdEditTask(divId) {
	let div = document.getElementById(divId);
	if (div) {
		div.remove();
	}
}


function clickToCloseEditTask() {
	document.getElementById('editTaskContainer').classList.add('d-none');
}


function doNotClose(event) {
	event.stopPropagation();
}


async function submitEditTask(i) {
	editTitle = document.getElementById(`editTaskTitle${i}`).value;
	editDescription = document.getElementById(`editTaskDescription${i}`).value;
	editdueDate = document.getElementById(`editTaskDueDate${i}`).value;

	contentArray['tasks']['priority'][i] = editPriority;
	contentArray['tasks']['title'][i] = editTitle;
	contentArray['tasks']['description'][i] = editDescription;
	contentArray['tasks']['dueDate'][i] = editdueDate;

	await setItem(key, contentArray);
	await getItem(key);
	clickToCloseEditTask();
	renderBoard();
}


function generateEditTaskHTML(i) {
	return  /*html*/`
		<div class="task-background">

			<div class="edit-task-container" onclick="doNotClose(event)">

				<div class="edit-task-input-section">
					<div class="edit-task-header">
						<div>Title</div>
						<input class="edit-task-header-input" type="text" id="editTaskTitle${i}">
					</div>

					<div class="edit-task-header">
						<div>Description</div>
						<textarea class="edit-task-header-textarea" name="" id="editTaskDescription${i}" cols="" rows="0"></textarea>
					</div>

					<div class="edit-task-header">
						<div>Due date</div>
						<input class="edit-task-header-input" type="date" id="editTaskDueDate${i}">
					</div>

					<div class="edit-task-header">
						<div>Priority</div>
						<div class="prio-row-edit-task">
           					 <div id="changePrioColorForurgent" onclick="changePrioInEditTask('urgent')" class="prio-class-edit-task">
              					<span>Urgent</span>
             					<img src="./assets/img/task-prio-urgent.png" alt="urgent-img">
            				</div>
            				<div id="changePrioColorFormedium" onclick="changePrioInEditTask('medium')" class="prio-class-edit-task">
             					<span>Medium</span>
              					<img src="./assets/img/task-prio-medium.png" alt="medium-img">
           					</div>
            				<div id="changePrioColorForlow" onclick="changePrioInEditTask('low')" class="prio-class-edit-task">
              					<span>Low</span>
            					<img src="./assets/img/task-prio-low.png" alt="low-img">
          					</div>
       					</div>
					</div>

					<div class="edit-task-header">
						<div>Subtasks</div>
						<form class="form-edit-task" onsubmit="addNewSubtask(${i}); return false;"  action="">
							<textarea id="addNewSubtaskInEditTask" required class="textarea-subtask" minlength="1" name="" id="" cols="" rows="1"
							placeholder="Add new subtask"></textarea>
							<input id="addNewSubtaskBtn" type="image" src="./assets/img/task-plus.png" alt="">
						</form>
						<div id="editTaskSubtaskContainer" class="edit-task-subtask-container"></div>
					</div>

					<div class="edit-task-header">
						<div>Assigned to</div>
						<div class="multiselect">
        					<div class="select-box-edit-task" onclick="showCheckboxes(3)" id="selectBox3">
          					<div class="flex">
            				<div>Select contacts to assign</div>
            				<div class="arrow">&#9660;</div>
          				</div>
          				<div class="overSelect"></div>
       					 </div>
        				<div id="checkboxes3" class="flex-checkboxes">
        				</div>
      					</div>
      					<div id="renderAddContactInitialsEditTask"></div>
					</div>
					
				</div>

				<div class="edit-task-btn-section">
					<img class="" src="./assets/img/task-view-close-btn.svg" alt="" onclick="clickToCloseEditTask()">
					<img class="" src="./assets/img/edit-task-okay-btn.svg" onmouseover="this.src='./assets/img/edit-task-okay-btn-hover.svg'" onmouseout="this.src='./assets/img/edit-task-okay-btn.svg'" alt="" onclick="submitEditTask(${i})">
				</div>
			</div>
		</div>
	`;
}
