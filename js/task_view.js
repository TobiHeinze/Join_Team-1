function openTaskView(i) {
	document.getElementById('taskViewContainer').classList.remove('d-none');
	document.getElementById('taskViewContainer').innerHTML = generateTaskViewHTML(i);

	changeStyleOfTaskView(i);
	renderAssignedToAtTaskView(i);
	generateSubtaskSectionInTaskView(i);
}


function generateTaskViewHTML(index) {
	return `
	<div class="task-background">

	<div class="task-view-container" onclick="doNotClose(event)">
		<div class="task-view-space-between">
			<span id="taskViewCategoryName${index}"
				class="task-view-category-name">${contentArray['tasks']['categoryName'][index]}</span>
				<img class="" src="./assets/img/task-view-close-btn.svg" alt="" onclick="clickToCloseTaskView()">	
		</div>
		<span id="taskTitle${index}" class="task-view-title">${contentArray['tasks']['title'][index]}</span>
		<span id="taskDescription${index}"
			class="task-view-description">${contentArray['tasks']['description'][index]}</span>
		<span id="taskDueDate${index}" class="task-view-due-date"><b>Due date:</b> ${contentArray['tasks']['dueDate'][index]}</span>
		<div class="task-view-priority">
			<span id="taskViewPriority${index}"><b>Priority:</b></span>
			<img id="taskViewPrioImage${index}" class="task-view-prio-image" src="./assets/img/task-view-prio-${contentArray['tasks']['priority'][index]}.svg" alt="">
		</div>
		
		<div id="taskViewSubtaskContainerAll${index}"><b>Subtasks:</b>
			<div id="taskViewSubtaskContainer${index}" class="task-view-subtask-container"></div>
		</div>

		<div class="task-view-change-section">
			<div id="taskAssignedToTaskView${index}"><b>Assigned to:</b></div>
			<div class="task-view-change-img">
				<img class="" src="./assets/img/task-view-desktop-delete-btn.svg" onmouseover="this.src='./assets/img/task-view-desktop-delete-btn-hover.svg'" onmouseout="this.src='./assets/img/task-view-desktop-delete-btn.svg'" alt="" onclick="deleteCurrentTask(${index})">
				<img class="" src="./assets/img/task-view-desktop-edit-btn.svg" onmouseover="this.src='./assets/img/task-view-desktop-edit-btn-hover.svg'" onmouseout="this.src='./assets/img/task-view-desktop-edit-btn.svg'" alt="" onclick="openEditTask(${index})">
			</div>
		</div>
		
	</div>

	</div>
	`;
}


function changeStyleOfTaskView(i) {
	document.getElementById(`taskViewCategoryName${i}`).style.background = contentArray['tasks']['categoryBgColor'][i];
}


function renderAssignedToAtTaskView(i) {
	for (let j = 0; j < contentArray['tasks']['assignedTo'][i]['nameInitials'].length; j++) {
		document.getElementById(`taskAssignedToTaskView${i}`).innerHTML += `
			<div class="assigned-to-task-view">
			<div id="assignedToImageBgColorTaskView${i}${j}" class="task-assigned-to-icon task-view-icon">${contentArray['tasks']['assignedTo'][i]['nameInitials'][j]}</div>
			<div id="assignedToName${i}" ">${contentArray['tasks']['assignedTo'][i]['name'][j]}</div>
			</div>
		`;
		document.getElementById(`assignedToImageBgColorTaskView${i}${j}`).style.background = contentArray['tasks']['assignedTo'][i]['contactImageBgColor'][j];
	}
}


function generateSubtaskSectionInTaskView(i) {
	if (contentArray['tasks']['subtasks'][i]['subtask'].length == 0) {
		document.getElementById(`taskViewSubtaskContainerAll${i}`).classList.add('d-none');
	} else {
		for (let c = 0; c < contentArray['tasks']['subtasks'][i]['subtask'].length; c++) {
			document.getElementById(`taskViewSubtaskContainer${i}`).innerHTML += `
			<div class="subtask-task-view">
			<img id="taskViewSubtaskStatus${i}${c}" class="" src="./assets/img/task-view-subtask-status-${contentArray['tasks']['subtasks'][i]['subtaskStatus'][c]}.svg" alt="">
			<div id="taskViewSubtask${i}${c}" ">${contentArray['tasks']['subtasks'][i]['subtask'][c]}</div>
			</div>
			`;
		}
	}
}


function clickToCloseTaskView() {
	document.getElementById('taskViewContainer').classList.add('d-none');
}


function doNotClose(event) {
	event.stopPropagation();
}

async function deleteCurrentTask(i) {
	if (confirm('Delete This Task?') == true) {
		contentArray['tasks']['taskStatus'].splice(i, 1);
		contentArray['tasks']['title'].splice(i, 1);
		contentArray['tasks']['description'].splice(i, 1);
		contentArray['tasks']['priority'].splice(i, 1);
		contentArray['tasks']['dueDate'].splice(i, 1);
		contentArray['tasks']['categoryName'].splice(i, 1);
		contentArray['tasks']['categoryBgColor'].splice(i, 1);
		contentArray['tasks']['subtasks'].splice(i, 1);
		contentArray['tasks']['assignedTo'].splice(i, 1);

		await setItem(key, contentArray);
		await getItem(key);
		clickToCloseTaskView();
		renderBoard();
	}
}