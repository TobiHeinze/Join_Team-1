/**
 * This function renders the summary area
 *
 * @param {*} i this parameter is the position in the array
 */
async function renderSummary(i) {
  contentArray = await getItem(key);
  document.getElementById("mainContainer").classList.remove("d-none");
  resetContent();
  searchUrgentDate();
  countTasks();
  document.getElementById("content").innerHTML = renderSummaryHTML();
  updateGreetingName(i);
  grayBackgroundForCurrentPage("summaryBackgroundSidebar");
}

/**
 * This function greets the logged in person or guest on the summary page
 *
 * @param {*} i this parameter is the position in the array
 */
function updateGreetingName(i) {
  let loggedInName = contentArray["users"]["name"][i];
  let loggedInPhoto = contentArray["users"]["photo"][i];
  if (contentArray["users"]["name"].includes(loggedInName)) {
    document.getElementById("userGreetingName").innerHTML = ``;
    document.getElementById("userGreetingName").innerHTML = `${loggedInName}`;
    document.getElementById(
      "userImage"
    ).src = `./assets/img/${loggedInPhoto}-image-header.png`;
  } else {
    document.getElementById("userGreetingName").innerHTML = `Guest`;
    document.getElementById("userImage").src =
      "./assets/img/guest-image-header.png";
  }
}

let numberOfTasksToDo = [];
let numberOfTasksInProgress = [];
let numberOfTasksAwaiting = [];
let numberOfTasksDone = [];
/**
 * This function is counting the tasks and pushes them into the arrays to show them later
 */
function countTasks() {
  numberOfTasksToDo = [];
  numberOfTasksInProgress = [];
  numberOfTasksAwaiting = [];
  numberOfTasksDone = [];
  for (let i = 0; i < contentArray["tasks"]["taskStatus"].length; i++) {
    let taskStatus = contentArray["tasks"]["taskStatus"][i];

    if (taskStatus === "0") {
      numberOfTasksToDo.push(taskStatus);
    } else if (taskStatus === "1") {
      numberOfTasksInProgress.push(taskStatus);
    } else if (taskStatus === "2") {
      numberOfTasksAwaiting.push(taskStatus);
    } else if (taskStatus === "3") {
      numberOfTasksDone.push(taskStatus);
    }
  }
}

let closestUrgentDate;
let urgentCounter = [];
let closestUrgentDateString;

/**
 * This function compares all dates from the urgent priority and the closest date near today will be shown
 */
function searchUrgentDate() {
  urgentCounter = [];
  const today = new Date();
  let closestUrgentDiff = Infinity;

  for (let i = 0; i < contentArray["tasks"]["priority"].length; i++) {
    if (contentArray["tasks"]["priority"][i] === "urgent") {
      const dueDate = new Date(contentArray["tasks"]["dueDate"][i]);
      const timeDiff = dueDate.getTime() - today.getTime();

      if (timeDiff >= 0 && timeDiff < closestUrgentDiff) {
        closestUrgentDiff = timeDiff;
        closestUrgentDate = dueDate;
      }
      urgentCounter.push(dueDate);
    }
  }
  closestUrgentDateString = closestUrgentDate
    ? closestUrgentDate.toLocaleDateString("en-EN", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      })
    : "No urgent task";
}


/**
 * Returns the current date in the format "DD.MM.YYYY".
 *
 * @return {string} The current date in the format "DD.MM.YYYY".
 */
function getDate() {
  const now = new Date();
  const date = now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return date;
}


/**
 * Returns the current date in the format "YYYYMMDD".
 *
 * @return {string} The current date in the format "YYYYMMDD".
 */
function getDate1() {
  const now = new Date();
  const date = now
    .toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/-/g, "");
  return date;
}


/**
 * Returns a greeting based on the current time of day.
 *
 * @return {string} A greeting string ("Good morning", "Good afternoon", "Good evening", or "Good night").
 */
function getTime() {
  const now = new Date();
  const hour = now.getHours();
  let greeting = "Good ";
  if (hour >= 4 && hour < 12) {
    greeting += "morning";
  } else if (hour >= 12 && hour < 18) {
    greeting += "afternoon";
  } else if (hour >= 18 && hour < 22) {
    greeting += "evening";
  } else {
    greeting += "night";
  }
  return greeting;
}



/**
 * This function returns the html code
 *
 * @returns html code
 */
function renderSummaryHTML() {
  return /*html*/ `
  <span class="kanban">Kanban Project Management Tool</span>
  <div class= "headlines">
  <h1 class="summary-h1">Summary</h1>
  <img class="blue-line-vertical" src="./assets/img/blue-line-vertical.png">
  <span style="margin-top: -10px;" class="font-21">Everything in a nutshell!</span> 
  </div>
  <br> <br>
  <img class="summary-line-horizontal" src="./assets/img/blue-line-horizontal.png">
  <div class="summary-content">
    <div><section class="row">
            <div onclick="renderBoard()" class="card-row-1">
                <span class="font-64">${
                  contentArray["tasks"]["title"].length
                }</span>
                <span class="font-16">Tasks in <br> Board</span>
            </div>
            <div onclick="renderBoard()" class="card-row-1">
                <span class="font-64">${numberOfTasksInProgress.length}</span>
                <span class="font-16">Tasks in <br> Progress</span>
            </div>
            <div onclick="renderBoard()" class="card-row-1">
                <span class="font-64">${numberOfTasksAwaiting.length}</span>
                <span class="font-16">Awaiting <br> Feedback</span>
            </div>
        </section>
        <section class="row">
            <div onclick="renderBoard()" class="card-row-2">
                <div class="card-row-2-left">
                    <div>
                        <img style="padding-top: 10px" src="./assets/img/urgent.png" />
                    </div>
                    <div class="amount">
                        <span class="font-61">${urgentCounter.length}</span>
                        <span class="font-21">Urgent</span>
                    </div>
                </div>
                <div class="card-row-2-middle"></div>
                <div class="card-row-2-right">
                    <span class="font-weight-700 font-16">${closestUrgentDateString}</span> <br>
                    <span class="font-16">Upcoming Deadline</span>
                </div>
            </div>
        </section>
        <section class="row">
            <div onclick="renderBoard()" class="card-row-3">
                <div>
                    <img src="./assets/img/pen.png" />
                </div>
                <div class="amount">
                    <span class="font-64 ">${numberOfTasksToDo.length}</span>
                    <span class="font-21">To-do</span>
                </div>
            </div>
            <div onclick="renderBoard()" class="card-row-3">
                <div>
                    <img src="./assets/img/check.png" />
                </div>
                <div class="amount">
                    <span class="font-64">${numberOfTasksDone.length}</span>
                    <span class="font-21">Done</span>
                </div>
            </div>
        </section>
    </div>
    <aside id="greeting">
        <span class="font-weight-500 font-47">${getTime()},</span>
        <h1 id="userGreetingName" class="font-weight-700 font-64"></h1>
    </aside>
  </div>`;
}