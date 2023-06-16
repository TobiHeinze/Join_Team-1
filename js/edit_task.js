function openEditTask(i) {
	document.getElementById('taskViewContainer').classList.add('d-none');
	document.getElementById('editTaskContainer').classList.remove('d-none');
	document.getElementById('editTaskContainer').innerHTML = generateEditTaskHTML(i);

	renderEditTaskContent(i);
	// renderAssignedToAtTaskView(i);
	// generateSubtaskSectionInTaskView(i);
}


async function renderEditTaskContent(i) {
	document.getElementById('editTaskTitle').value = contentArray['tasks']['title'][i];
    document.getElementById('editTaskDescription').value = contentArray['tasks']['description'][i];
    document.getElementById('editTaskDueDate').value = contentArray['tasks']['dueDate'][i];
}

// function renderAssignedToAtEditTask(i) {
// 	for (let j = 0; j < contentArray['tasks']['assignedTo'][i]['nameInitials'].length; j++) {
// 		document.getElementById('editTaskAssignedTo').innerHTML += `
// 			<div id="assignedToImageBgColor${i}${j}" class="task-assigned-to-icon">${contentArray['tasks']['assignedTo'][i]['nameInitials'][j]}</div>
// 	`;
// 		document.getElementById(`assignedToImageBgColor${i}${j}`).style.background = contentArray['tasks']['assignedTo'][i]['contactImageBgColor'][j];
// 	}
// }


function generateEditTaskHTML(i) {
	return `
		<div class="task-background">

			<div class="edit-task-container" onclick="doNotClose(event)">

				<div class="edit-task-input-section">
					<div class="edit-task-header">
						<div>Title</div>
						<input type="text" id="editTaskTitle">
					</div>

					<div class="edit-task-header">
						<div>Description</div>
						<textarea name="" id="editTaskDescription" cols="" rows="0"></textarea>
					</div>

					<div class="edit-task-header">
						<div>Due date</div>
						<input type="date" id="editTaskDueDate">
					</div>

					<div class="edit-task-header">
						<div>Priority</div>
						<input type="text">
					</div>

					<div class="edit-task-header">
						<div>Subtasks</div>
						<input type="text" >
					</div>

					<div class="edit-task-header">
						<div>Assigned to</div>
						<input type="text">
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

