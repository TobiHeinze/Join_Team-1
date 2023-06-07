/**
 * This is a help function thats olny sources out the HTML code to smaller the code
 * 
 * @returns html code
 */
function renderAddTaskHTML() {
    return /*html*/ `
    <img class="create-button" src="./assets/img/create-button.png" alt="create task">
    <form class="add-task-scroll" onsubmit="updateTaskArray(); return false;" >
                <div onclick="renderContacts()" class="add-task-x-position d-none">
                    <img src="./assets/img/x-button-black.png" alt="x-button-img">
                </div>
                <div class="mt-11 responsive-hide">
                  <span >Kanban Project Management Tool</span>
                </div>
                <h2 class="font-47 add-task-h2">Add Task</h2>
                <div class="desktop-size">
                    <div class="add-task-responsive-left">
                        <div class="title">
                            <span>Title</span>
                            <input id="addTitle" type="text" placeholder="Enter a Title" required>
                        </div>
                        <div class="description">
                            <span class="mt-11">Description</span>
                            <textarea name="" id="addDescription" cols="4" rows="4" placeholder="Enter a Description"
                                ></textarea>
                        </div>
                        <div class="prio">
                            <span class="mt-11 mb-11">Prio</span>
                            <div class="prio-row">
                                <div class="prio-class">
                                    <span>Urgent</span>
                                    <img src="./assets/img/task-prio-urgent.png" alt="urgent-img">
                                </div>
                                <div class="prio-class">
                                    <span>Medium</span>
                                    <img src="./assets/img/task-prio-medium.png" alt="medium-img">
                                </div>
                                <div class="prio-class">
                                    <span>Low</span>
                                    <img src="./assets/img/task-prio-low.png" alt="low-img">
                                </div>
                            </div>
                        </div>
                        <div class="add-task-date">
                            <span class="mt-11">Due date</span>
                            <div class="date-box-add-task">
                                <input class="input-date" type="date" placeholder="dd/mm/yyyy" onmousedown="this.click()">
                                <img src="./assets/img/task-calendar.png" alt="calendar-img" required>
                            </div>
                        </div>
                    </div>
                    <div class="add-task-line-margin">
                    <div class="add-task-vertical-line">
                    </div>
                    </div>
                    <div class="add-task-responsive-right">
                        <div class="category-select-box">
                            <span>Category</span>
                            <select name="category" id="category-task" class="category-select">
                                <option value="">Select task category</option>
                                <option value="orange">Orange</option>
                                <option value="blue">Blue</option>
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                            </select>
                        </div>
                        <div class="assigned-add-task">
                            <span class="mt-11">Assigned to</span>
                            <select name="assigned" id="assigned-task" class="assigned-select">
                                <option value="">Select contacts to assign</option>
                                <option value="orange">name1</option>
                                <option value="blue">name2</option>
                            </select>
                        </div>
                        <div class="subtask">
                            <span class="mt-11">Subtasks</span>
                            <div class="subtask-box">
                                <input class="input-subtask" type="text" placeholder="Add  new subtask">
                                <img src="./assets/img/task-plus.png" alt="plus-img">
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>


                            <!-- test zum scrollen -->

                            <!-- <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 5</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 10</span>
                            </div><div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 10</span>
                            </div> <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 10</span>
                            </div><div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 10</span>
                            </div> <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 10</span>
                            </div><div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 10</span>
                            </div> -->

                            <!-- test zum scrollen ende -->


                        </div>
                    </div>
                </div>
                <div class="task-button-box">
              <div class="clear-task-button">
                <span>Clear</span>
                <img src="./assets/img/x-button-black.png" alt="x-img">
              </div>
              <button class="add-task-button">
                <span>Create Task</span>
                <img src="./assets/img/hook.png" alt="haken-img">
</button>
            </div>
            </form>
            

            <!-- hier die versionen die ggf. ausgeblendet sind solange nichts hinzugefügt wird: -->
            <div class="d-none">
                <div class="task-added">
                    <!-- task-added wird nur angezeigt wenn der task hinzugefügt wurde, sonst nicht-->
                    <span>Task added to board</span>
                    <img src="./assets/img/task-board.png" alt="board-img">
                </div>
            </div>

            <!-- task-added-to-backlog wird nur angezeigt wenn der task hinzugefügt wurde, sonst nicht-->
            <div class="d-none">
                <div class="task-added-backlog">
                    <span>Task added to backlog</span>
                    <img src="./assets/img/task-backlog.png" alt="backlog-img">
                </div>
            </div>
    `;
}


/**
 * This is a help function thats olny sources out the HTML code to smaller the code
 * 
 * @returns html code
 */
function addTaskFloatHTML() {
    return /*html*/`
    <div class="border">
        <form class="add-task-scroll">
                <!-- man kommt normal über add-task button auf die seite, 
                    wenn man aber vom board auf + drückt dann verschwindet  die span hier drunter und das 
                    X darunter taucht auf ! -->
                <div onclick="closeEditContact()" class="add-task-x-position-float">
                    <img src="./assets/img/x-button-black.png" alt="x-button-img">
                </div>
                <div class="mt-11 responsive-hide">
                  <span >Kanban Project Management Tool</span>
                </div>
                <!-- hier drüber wird je nach ansicht die span /x-button div ein & ausgeblendet -->
                <h2 class="font-47 add-task-h2">Add Task</h2>
                <div class="desktop-size">
                    <div class="add-task-responsive-left">
                        <div class="title">
                            <span>Title</span>
                            <input type="text" placeholder="Enter a Title" required>
                        </div>
                        <div class="description">
                            <span class="mt-11">Description</span>
                            <textarea name="" id="" cols="4" rows="4" placeholder="Enter a Description"
                                required></textarea>
                        </div>
                        <div class="prio">
                            <span class="mt-11 mb-11">Prio</span>
                            <div class="prio-row">
                                <div class="prio-class">
                                    <span>Urgent</span>
                                    <img src="./assets/img/task-prio-urgent.png" alt="urgent-img">
                                </div>
                                <div class="prio-class">
                                    <span>Medium</span>
                                    <img src="./assets/img/task-prio-medium.png" alt="medium-img">
                                </div>
                                <div class="prio-class">
                                    <span>Low</span>
                                    <img src="./assets/img/task-prio-low.png" alt="low-img">
                                </div>
                            </div>
                        </div>
                        <div class="add-task-date">
                            <span class="mt-11">Due date</span>
                            <div class="date-box-add-task">
                                <input class="input-date" type="date" placeholder="dd/mm/yyyy" onmousedown="this.click()">
                                <img src="./assets/img/task-calendar.png" alt="calendar-img">
                            </div>
                        </div>
                    </div>
                    <div class="add-task-line-margin">
                    <div class="add-task-vertical-line">
                    </div>
                    </div>
                    <div class="add-task-responsive-right">
                        <div class="category-select-box">
                            <span>Category</span>
                            <select name="category" id="category-task" class="category-select">
                                <option value="">Select task category</option>
                                <option value="orange">Orange</option>
                                <option value="blue">Blue</option>
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                            </select>
                        </div>
                        <div class="assigned-add-task">
                            <span class="mt-11">Assigned to</span>
                            <select name="assigned" id="assigned-task" class="assigned-select">
                                <option value="">Select contacts to assign</option>
                                <option value="orange">name1</option>
                                <option value="blue">name2</option>
                            </select>
                        </div>
                        <div class="subtask">
                            <span class="mt-11">Subtasks</span>
                            <div class="subtask-box">
                                <input class="input-subtask" type="text" placeholder="Add  new subtask">
                                <img src="./assets/img/task-plus.png" alt="plus-img">
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>


                            <!-- test zum scrollen -->
<!-- 
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 5</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 10</span>
                            </div><div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 10</span>
                            </div> <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 10</span>
                            </div><div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 10</span>
                            </div> <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 10</span>
                            </div><div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 1</span>
                            </div>
                            <div>
                                <input type="checkbox">
                                <span>Subtask 10</span>
                            </div> -->

                            <!-- test zum scrollen ende -->


                        </div>
                    </div>
                </div>
                <div class="task-button-box">
              <div class="clear-task-button">
                <span>Clear</span>
                <img src="./assets/img/x-button-black.png" alt="x-img">
              </div>
              <div class="add-task-button">
                <span>Create Task</span>
                <img src="./assets/img/hook.png" alt="haken-img">
              </div>
            </div>
            </form>
</div>
    `;
}