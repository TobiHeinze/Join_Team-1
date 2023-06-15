/**
 * This function renders the summary area
 *
 */
async function renderSummary(i) {
  contentArray = await getItem(key);
  document.getElementById("mainContainer").classList.remove("d-none");
  resetContent();
  searchUrgendDate();
  countTasks();
  document.getElementById("content").innerHTML = renderSummaryHTML();
  updateGreetingName(i);
}


/**
 * This function greets the logged in person or guest on the summary page
 *
 */
function updateGreetingName(i) {
  var loggedInName = contentArray['users']['name'][i];
  var loggedInPhoto = contentArray['users']['photo'][i];
  if (contentArray['users']['name'].includes(loggedInName)) {
    document.getElementById('userGreetingName').innerHTML = ``;
    document.getElementById('userGreetingName').innerHTML = `${loggedInName}`;
    document.getElementById('userImage').src = `./assets/img/${loggedInPhoto}-image-header.png`;
  } else {
    document.getElementById('userGreetingName').innerHTML = `Guest`;
    document.getElementById('userImage').src = "./assets/img/guest-image-header.png";
  }
}


let numberOfTasksToDo = [];
let numberOfTasksInProgress = [];
let numberOfTasksAwaiting = [];
let numberOfTasksDone = [];

function countTasks() {
  numberOfTasksToDo = [];
  numberOfTasksInProgress = [];
  numberOfTasksAwaiting = [];
  numberOfTasksDone = [];
  for (let i = 0; i < contentArray['tasks']['taskStatus'].length; i++) {
    let taskStatus = contentArray['tasks']['taskStatus'][i];

    if (taskStatus === '0') {
      numberOfTasksToDo.push(taskStatus);
    } else if (taskStatus === '1') {
      numberOfTasksInProgress.push(taskStatus);
    } else if (taskStatus === '2') {
      numberOfTasksAwaiting.push(taskStatus);
    } else if (taskStatus === '3') {
      numberOfTasksDone.push(taskStatus);
    }
  }
}


let closestUrgentDate;
let urgentCounter = [];
let closestUrgentDateString;

function searchUrgendDate() {
  urgentCounter = [];
  const today = new Date();
  let closestUrgentDiff = Infinity;

  for (let i = 0; i < contentArray['tasks']['priority'].length; i++) {
    if (contentArray['tasks']['priority'][i] === 'urgent') {
      const dueDate = new Date(contentArray['tasks']['dueDate'][i]);
      const timeDiff = dueDate.getTime() - today.getTime();

      if (timeDiff >= 0 && timeDiff < closestUrgentDiff) {
        closestUrgentDiff = timeDiff;
        closestUrgentDate = dueDate;
      }
      urgentCounter.push(dueDate);
    }
  }
  closestUrgentDateString = closestUrgentDate ? closestUrgentDate.toLocaleDateString('en-EN', { month: 'long', day: '2-digit', year: 'numeric' }) : 'No date available';
  console.log(`Das nächste Datum mit der Priorität "urgent" ist: ${closestUrgentDate}`);
  console.log(`Anzahl der Vorkommen von "urgent": ${urgentCounter.length}`);
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
  <h1>Summary</h1>
  <img class="blue-line-vertical" src="./assets/img/blue-line-vertical.png">
  <span class="font-21">Everything in a nutshell!</span> 
  </div>
  <br> <br>
  <img class="summary-line-horizontal" src="./assets/img/blue-line-horizontal.png">
  
  
  <div class="summary-content">
  
    <div>
        <section class="row">
            <div onclick="renderBoard()" class="card-row-1">
                <span class="font-64">${contentArray['tasks']['title'].length}</span>
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
                        <span class="font-47">${urgentCounter.length}</span>
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
  </div>
    `;
}

/**
 * Returns the current date in the format "DD.MM.YYYY".
 *
 * @return {string} The current date in the format "DD.MM.YYYY".
 */
function getDate() {
  const now = new Date(); // Erstellt ein neues Date-Objekt, das das aktuelle Datum und die aktuelle Uhrzeit repräsentiert
  const date = now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  // Verwendet die toLocaleDateString-Methode, um das Datum im britischen Format mit Tag, Monat und Jahr zurückzugeben
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
  // Verwendet die toLocaleDateString-Methode, um das Datum im britischen Format mit Jahr, Monat und Tag zurückzugeben
  // Anschließend wird der Bindestrich entfernt, um das gewünschte Format "YYYYMMDD" zu erhalten
  return date;
}

/**
 * Returns a greeting based on the current time of day.
 *
 * @return {string} A greeting string ("Good morning", "Good afternoon", "Good evening", or "Good night").
 */
function getTime() {
  const now = new Date();
  const hour = now.getHours(); // Holt die aktuelle Stunde aus dem Date-Objekt
  let greeting = "Good ";

  if (hour >= 4 && hour < 12) {
    greeting += "morning"; // Fügt "morning" zur Begrüßung hinzu, wenn es zwischen 4 und 12 Uhr ist
  } else if (hour >= 12 && hour < 18) {
    greeting += "afternoon"; // Fügt "afternoon" zur Begrüßung hinzu, wenn es zwischen 12 und 18 Uhr ist
  } else if (hour >= 18 && hour < 22) {
    greeting += "evening"; // Fügt "evening" zur Begrüßung hinzu, wenn es zwischen 18 und 22 Uhr ist
  } else {
    greeting += "night"; // Fügt "night" zur Begrüßung hinzu, für alle anderen Zeiten
  }

  return greeting;
}


