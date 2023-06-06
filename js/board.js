function renderBoard() {
    resetContent();
    document.getElementById("content").innerHTML = /*html*/ `
<span class="kanban-tool-text appear-mobile">Kanban Project Management Tool</span>

<div class="board-header-mobile">
	<span class="font-47">Board</span>
	<img src="assets/img/plus-add-task-mobile.svg" alt="">
</div>

<form class="form-find-task" onsubmit=" ; return false;">
	<textarea required class="textarea-find-task" minlength="2" name="" id="" cols="" rows="1"
		placeholder="Find Task"></textarea>
	<input type="image" src="assets/img/find-task-lens.svg" alt="">
</form action="">


<div class="all-task-container">
	<div class="task-section-container">
		<div class="header-task-status">
			<span class="task-status-description">To do</span>
			<img src="assets/img/add-task-button-mobile.svg" alt="">
		</div>

		<div id="taskStatus0" class="task-container-mobile">
			<span id="taskCategoryName" class="task-category-name">Design</span>
			<span id="taskTitle" class="task-title">Website redesign</span>
			<span id="taskDescription" class="task-description">Modify the contents of the main website.
				Adjust the UI to the company s brand design</span>
			<div id="taskProgressBarContainer" class="progress-bar-container-hide">
				<div class="progress-bar-container">
					<div id="taskProgressBar"></div>
					<div id="taskProgressBarCounter">0/2 Done</div>
				</div>
			</div>
			<div class="task-assigned-to-prio-image">
				<div id="taskAssignedTo" class="display">
					<div class="task-assigned-to-icon">AR</div>
					<div class="task-assigned-to-icon">AW</div>
					<div class="task-assigned-to-icon">TH</div>
				</div>
				<img id="taskPrioImage" class="task-prio-image" src="assets/img/task-prio-low.png"
					alt="">
			</div>
		</div>
	</div>

	<div class="task-section-container">
		<div class="header-task-status">
			<span class="task-status-description">In progress</span>
			<img src="assets/img/add-task-button-mobile.svg" alt="">
		</div>
		<div id="taskStatus1" class="task-container-mobile-empty">No task In progress</div>
	</div>

	<div class="task-section-container">
		<div class="header-task-status">
			<span class="task-status-description">Awaiting feedback</span>
			<img src="assets/img/add-task-button-mobile.svg" alt="">
		</div>
		<div id="taskStatus2" class="task-container-mobile-empty">No tasks Awaiting feedback</div>
	</div>

	<div class="task-section-container">
		<div class="header-task-status">
			<span class="task-status-description">Done</span>
			<img src="assets/img/add-task-button-mobile.svg" alt="">
		</div>
		<div id="taskStatus3" class="task-container-mobile-empty">No tasks Done</div>
	</div>
</div>
    `;
}