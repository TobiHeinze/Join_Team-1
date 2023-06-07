
function updateHTML() {
	for (let i = 0; i < contentArray['tasks']['title'].length + 1; i++) {

		for (let j = 0; j < 4; j++) {
			if (contentArray['tasks']['taskStatus'][i] == j) {
				document.getElementById(`taskStatus${j}`).innerHTML += generateBoardHTML(i);
			}
		}
	}
}






function generateBoardHTML(index) {
	return `
	<div id="taskNumber${index}" class="task-container-mobile">
		<span id="taskCategoryName${index}" class="task-category-name">${contentArray['tasks']['categoryName'][index]}</span>
		<span id="taskTitle${index}" class="task-title">${contentArray['tasks']['title'][index]}</span>
		<span id="taskDescription${index}" class="task-description">${contentArray['tasks']['description'][index]}</span>
		<div id="taskProgressBarContainer${index}" class="progress-bar-container-hide">
			<div class="progress-bar-container">
				<div id="taskProgressBar${index}" class="taskProgressBar"></div>
				<div id="taskProgressBarCounter${index}" class="taskProgressBarCounter">0/2 Done</div>
			</div>
		</div>
		<div class="task-assigned-to-prio-image">
			<div id="taskAssignedTo${index}" class="display">
				<div class="task-assigned-to-icon">AR</div>
				<div class="task-assigned-to-icon">AW</div>
				<div class="task-assigned-to-icon">TH</div>
			</div>
			<img id="taskPrioImage${index}" class="task-prio-image" src="assets/img/task-prio-low.png" alt="">
		</div>
	</div>
	`;
}





function renderBoard() {
	resetContent();
	document.getElementById("content").innerHTML = /*html*/ `

<span class="kanban-tool-text appear-mobile">Kanban Project Management Tool</span>

<div class="board-header-mobile">
	<span class="font-47">Board</span>
	<img src="./assets/img/plus-add-task-mobile.svg" alt="">
</div>

<form class="form-find-task" onsubmit=" ; return false;">
	<textarea required class="textarea-find-task" minlength="2" name="" id="" cols="" rows="1"
		placeholder="Find Task"></textarea>
	<input type="image" src="./assets/img/find-task-lens.svg" alt="">
</form action="">


<div class="all-task-container">
	<div class="task-section-container">
		<div class="header-task-status">
			<span class="task-status-description">To do</span>
			<img src="./assets/img/add-task-button-mobile.svg" alt="">
		</div>
		<div id="taskStatus0"></div>
		<div id="taskStatusEmpty0" class="task-container-mobile-empty">No tasks To do</div>
	</div>

	<div class="task-section-container">
		<div class="header-task-status">
			<span class="task-status-description">In progress</span>
			<img src="./assets/img/add-task-button-mobile.svg" alt="">
		</div>
		<div id="taskStatus1"></div>
		<div id="taskStatusEmpty1" class="task-container-mobile-empty">No tasks In progress</div>
	</div>

	<div class="task-section-container">
		<div class="header-task-status">
			<span class="task-status-description">Awaiting feedback</span>
			<img src="./assets/img/add-task-button-mobile.svg" alt="">
		</div>
		<div id="taskStatus2"></div>
		<div id="taskStatusEmpty2" class="task-container-mobile-empty">No tasks Awaiting feedback</div>
	</div>

	<div class="task-section-container">
		<div class="header-task-status">
			<span class="task-status-description">Done</span>
			<img src="./assets/img/add-task-button-mobile.svg" alt="">
		</div>
		<div id="taskStatus3"></div>
		<div id="taskStatusEmpty3" class="task-container-mobile-empty">No tasks Done</div>
	</div>
</div>
    `;

	updateHTML();
}