function openEditTask(i) {
	document.getElementById('taskViewContainer').classList.add('d-none');
	document.getElementById('editTaskContainer').classList.remove('d-none');
	document.getElementById('editTaskContainer').innerHTML = generateEditTaskHTML(i);

	renderEditTaskContent(i);
	// renderAssignedToAtTaskView(i);
	// generateSubtaskSectionInTaskView(i);
}


let changedSubtasks = [];
let changedSubtaskStatus = [];
let addNewPriority = [];


async function renderEditTaskContent(i) {
	document.getElementById('editTaskTitle').value = contentArray['tasks']['title'][i];
	document.getElementById('editTaskDescription').value = contentArray['tasks']['description'][i];
	document.getElementById('editTaskDueDate').value = contentArray['tasks']['dueDate'][i];
	priority = contentArray['tasks']['priority'][i];	
	changedSubtasks = contentArray['tasks']['subtasks'][i]['subtask'];
	changedSubtaskStatus = contentArray['tasks']['subtasks'][i]['subtaskStatus'];
	changePrioInEditTask(priority);
	generateSubtaskSectionInEditTask(i);
	renderAssignedToInEditTask(i);
}


function changePrioInEditTask(priority) {
	addNewPriority = priority;
	resetPrioColorInEditTask();
	if (addNewPriority == 'urgent') {
		document.getElementById(`changePrioColorFor${priority}`).style.background = '#FF3D00';
		document.getElementById(`changePrioColorFor${priority}`).style.color = 'white';
		document.querySelector(`#changePrioColorFor${priority} img`).src = './assets/img/task-prio-urgent-white.png';
	}
	if (addNewPriority == 'medium') {
		document.getElementById(`changePrioColorFor${priority}`).style.background = '#FFA800';
		document.getElementById(`changePrioColorFor${priority}`).style.color = 'white';
		document.querySelector(`#changePrioColorFor${priority} img`).src = './assets/img/add-task-prio-medium-white.png';
	}
	if (addNewPriority == 'low') {
		document.getElementById(`changePrioColorFor${priority}`).style.background = '#7AE229';
		document.getElementById(`changePrioColorFor${priority}`).style.color = 'white';
		document.querySelector(`#changePrioColorFor${priority} img`).src = './assets/img/add-task-prio-low-white.png';
	}
	console.log(addPriority);
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
	for (let c = 0; c < contentArray['tasks']['subtasks'][i]['subtask'].length; c++) {
		document.getElementById(`editTaskSubtaskContainer`).innerHTML += `
			<div class="subtask-edit-task">
			<img id="editTaskSubtaskStatus${i}${c}" onclick="changeSubtaskStatusInEditTask(${i}, ${c})" src="./assets/img/task-view-subtask-status-${contentArray['tasks']['subtasks'][i]['subtaskStatus'][c]}.svg" alt="">
			<div id="editTaskSubtask${i}${c}" ">${contentArray['tasks']['subtasks'][i]['subtask'][c]}</div>
			<img id="editTaskSubtaskDelete${i}${c}" class="edit-task-subtask-delete-img" src="./assets/img/subtask-delete-btn.svg" alt="">
			</div>
			`;
	}
}


// let changedSubtaskStatus = [];

function changeSubtaskStatusInEditTask(i, c) {
	// changedSubtaskStatus = contentArray['tasks']['subtasks'][i]['subtaskStatus'];
	if (changedSubtaskStatus[c] === 'open') {
		changedSubtaskStatus[c] ='closed';
		document.getElementById(`editTaskSubtaskStatus${i}${c}`).src = './assets/img/task-view-subtask-status-closed.svg';
	} else if (changedSubtaskStatus[c] === 'closed') {
		changedSubtaskStatus[c] = 'open';
		document.getElementById(`editTaskSubtaskStatus${i}${c}`).src = './assets/img/task-view-subtask-status-open.svg';
	}
	console.log(changedSubtaskStatus);
}


function addNewSubtask(i) {
	let editNewSubtask = document.getElementById('addNewSubtaskInEditTask').value;
	contentArray['tasks']['subtasks'][i]['subtask'].push(editNewSubtask);
	contentArray['tasks']['subtasks'][i]['subtaskStatus'].push('open');
	generateSubtaskSectionInEditTask(i);
	document.getElementById('addNewSubtaskInEditTask').value = '';
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
      <div class="option flex">
        <input type="checkbox" id="assignedToOptionsEditTask${i}" value="${contentArray['contacts']['name'][i]}" />
        <div onclick="toggleCheckboxEditTask(${i})" class="width-100">
          ${contentArray['contacts']['name'][i]}
        </div>
      </div>
      `;
    }
}



function toggleCheckboxEditTask(index) {
    let checkbox = document.getElementById(`assignedToOptionsEditTask${index}`);
    checkbox.checked = !checkbox.checked;
    toggleCheckboxColorEditTask(index);
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




function generateEditTaskHTML(i) {
	return  /*html*/`
		<div class="task-background">

			<div class="edit-task-container" onclick="doNotClose(event)">

				<div class="edit-task-input-section">
					<div class="edit-task-header">
						<div>Title</div>
						<input class="edit-task-header-input" type="text" id="editTaskTitle">
					</div>

					<div class="edit-task-header">
						<div>Description</div>
						<textarea class="edit-task-header-textarea" name="" id="editTaskDescription" cols="" rows="0"></textarea>
					</div>

					<div class="edit-task-header">
						<div>Due date</div>
						<input class="edit-task-header-input" type="date" id="editTaskDueDate">
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

					<div id=""></div>
				
					
				</div>

				<div class="edit-task-btn-section">
					<img class="" src="./assets/img/task-view-close-btn.svg" alt="" onclick="clickToCloseEditTask()">
					<img class="" src="./assets/img/edit-task-okay-btn.svg" alt="" onclick="">
				</div>
			</div>
		</div>
	`;
}




// function renderAssignedToAtTaskView(i) {
// 	for (let j = 0; j < contentArray['tasks']['assignedTo'][i]['nameInitials'].length; j++) {
// 		document.getElementById(`taskAssignedTo${i}`).innerHTML += `
// 			<div class="assigned-to-task-view">
// 			<div id="assignedToImageBgColor${i}${j}" class="task-assigned-to-icon task-view-icon">${contentArray['tasks']['assignedTo'][i]['nameInitials'][j]}</div>
// 			<div id="assignedToName${i}" ">${contentArray['tasks']['assignedTo'][i]['name'][j]}</div>
// 			</div>
// 		`;
// 		document.getElementById(`assignedToImageBgColor${i}${j}`).style.background = contentArray['tasks']['assignedTo'][i]['contactImageBgColor'][j];
// 	}
// }


// function generateSubtaskSectionInTaskView(i) {
// 	if (contentArray['tasks']['subtasks'][i]['subtask'].length == 0) {
// 		document.getElementById(`taskViewSubtaskContainerAll${i}`).classList.add('d-none');
// 	} else {
// 		for (let c = 0; c < contentArray['tasks']['subtasks'][i]['subtask'].length; c++) {
// 			document.getElementById(`taskViewSubtaskContainer${i}`).innerHTML += `
// 			<div class="subtask-task-view">
// 			<img id="taskViewSubtaskStatus${i}${c}" class="" src="./assets/img/task-view-subtask-status-${contentArray['tasks']['subtasks'][i]['subtaskStatus'][c]}.svg" alt="">
// 			<div id="taskViewSubtask${i}${c}" ">${contentArray['tasks']['subtasks'][i]['subtask'][c]}</div>
// 			</div>
// 			`;
// 		}
// 	}
// }


function clickToCloseEditTask() {
	document.getElementById('editTaskContainer').classList.add('d-none');
}


// function doNotClose(event) {
// 	event.stopPropagation();
// }

