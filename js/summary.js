/**
 * This function renders the summary area
 * 
 */
function renderSummary() {
  document.getElementById('mainContainer').classList.remove('d-none');
  resetContent();
  document.getElementById("content").innerHTML = renderSummaryHTML();
}

/**
 * This function returns the html code
 * 
 * @returns html code
 */
function renderSummaryHTML() {
  return /*html*/`
  <span class="kanban">Kanban Project Management Tool</span>

  <div class= "headlines">
  <h1>Summary</h1>
  <img class="blue-line-desktop" src="/assets/img/blue-line-desktop.png">
  <span class="font-21">Everything in a nutshell!</span> 
  </div>
  <br> <br>
  <img class="blue-line-mobile" src="/assets/img/blue-line-mobile.png">
  
  
  <div class="summary-content">
  
    <div>
        <section class="row">
            <div onclick="renderBoard()" class="card-row-1">
                <span class="font-64">5</span>
                <span class="font-16">Tasks in <br> Board</span>
            </div>
            <div onclick="renderBoard()" class="card-row-1">
                <span class="font-64">2</span>
                <span class="font-16">Tasks in <br> Progress</span>
            </div>
            <div onclick="renderBoard()" class="card-row-1">
                <span class="font-64">2</span>
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
                        <span class="font-47">1</span>
                        <span class="font-21">Urgent</span>
                    </div>
                </div>
                <div class="card-row-2-middle"></div>
                <div class="card-row-2-right">
                    <span class="font-weight-700 font-16">October 16, 2022</span> <br>
                    <span class="font-16">Upcoming Deadline</span>
                </div>
            </div>
        </section>
  
  
        <section class="row">
            <div onclick="renderBoard()" class="card-row-3">
                <div>
                    <img src="/assets/img/pen.png" />
                </div>
                <div class="amount">
                    <span class="font-64 ">1</span>
                    <span class="font-21">To-do</span>
                </div>
            </div>
            <div onclick="renderBoard()" class="card-row-3">
                <div>
                    <img src="/assets/img/check.png" />
                </div>
                <div class="amount">
                    <span class="font-64">1</span>
                    <span class="font-21">Done</span>
                </div>
            </div>
        </section>
    </div>
  
    <aside id="greeting">
        <span class="font-weight-500 font-47">${getTime()},</span>
        <h1 id="userGreetingName" class="font-weight-700 font-64">Guest</h1>
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