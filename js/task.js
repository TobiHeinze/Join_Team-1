/**
 * This function renders the AddTask area
 * 
 */
async function renderAddTask() {
    contentArray = await getItem(key);
    resetContent();
    currentSubtasks = [];
    currentSubtaskStatus = [];
    document.getElementById("content").innerHTML = renderAddTaskHTML();
    renderAddTaskCategoryOptions();
    renderAddTaskAssignedToOptions();
}


/**
 * This function renders the add task popup when klick in the contact area to give a special contact a task
 * 
 */
async function renderFloatAddTask() {
    contentArray = await getItem(key);
    if (window.innerWidth > 800) {
        document.getElementById('popUpDiv').classList.remove('d-none');
        document.getElementById('popUpDiv').classList.add('d-flex');
        slideInPopUp();
        currentSubtasks = [];
    currentSubtaskStatus = [];
        document.getElementById('popUpDiv').innerHTML = addTaskFloatHTML();
        renderAddTaskCategoryOptions();
    renderAddTaskAssignedToOptions();
    } else {
        document.getElementById("popUpDiv").innerHTML = await renderAddTask();
        document.getElementById('addXButtonTask').classList.remove('d-none');
    }
}



// alte version zum aufrufen des add task im contacts bereich
// /**
//  * This function renders the add task popup when klick in the contact area to give a special contact a task
//  * 
//  */
// function renderFloatAddTask() {
//     if (window.innerWidth > 800) {
//         document.getElementById("content").innerHTML = addTaskFloat();
//         // hier sollte am besten auch renderaddtask gerendert werden und nicht extra der floating style!
//         // document.getElementById("popUpDiv").innerHTML = renderAddTask();
//     } else {
//         resetContent();
//         document.getElementById("popUpDiv").innerHTML = renderAddTask();
//     }
// }


// /**
//  * This function opens the floating add task editor to add new tasks
//  * 
//  */
// function addTaskFloat() {
//     document.getElementById('popUpDiv').classList.remove('d-none');
//     document.getElementById('popUpDiv').classList.add('d-flex');
//     slideInPopUp();
//     // hier könnten wir vllt noch den selben addtask einbauen wir  normal nur den mit media query 
//     // verändern dann müsste man ids nicht doppelt vergeben
//     document.getElementById('popUpDiv').innerHTML = renderAddTask();
// }


/**
 * This function shows or hide the dropwdown menus
 * 
 */
let expanded = [false, false];

function showCheckboxes(index) {
    let checkboxes = document.getElementById("checkboxes" + index);
    document.getElementById(`selectBox${index}`).style.borderBottomLeftRadius = "0";
    document.getElementById(`selectBox${index}`).style.borderBottomRightRadius = "0";
    if (!expanded[index - 1]) {
        checkboxes.style.display = "block";
        expanded[index - 1] = true;
    } else {
        document.getElementById(`selectBox${index}`).style.borderRadius = "10px";
        checkboxes.style.display = "none";
        expanded[index - 1] = false;
    }
}


/**
 * This function renders the category options inside the drowdown menu
 * 
 */
function renderAddTaskCategoryOptions() {
    document.getElementById('checkboxes1').innerHTML += /*html*/`
    <div onclick="addNewCategory()" class="option flex">
      <div class="width-100">New category</div>
    </div>
  `;
    for (let i = 0; i < contentArray['settings']['categoryName'].length; i++) {
        document.getElementById('checkboxes1').innerHTML += /*html*/`
        <div class="option" onclick="categoryOption(${i})">${contentArray['settings']['categoryName'][i]}
          <div class="circle" style="background-color: ${contentArray['settings']['categoryBgColor'][i]}">
          </div>
        </div>
        `;
    }
}

// die farbpunkte auswählbar machen mit onclick oder so
function addNewCategory() {
    document.getElementById('selectBox1').classList.add('d-none');
    document.getElementById('checkboxes1').classList.add('d-none');
    if (document.getElementById('renderAddNewCategory') !== null) {
        document.getElementById('renderAddNewCategory').innerHTML = /*html*/`
          <div class="new-category">
            <input id="newCategoryValue" type="text" placeholder="New category name">
            <img onclick="closeNewCategory()" src="./assets/img/black-x-button.png" alt="x-img">
            <img onclick="addNewCategoryToArray()" src="./assets/img/black-hook.png" alt="hook-img">
          </div>
        `;
      }
      
      if (document.getElementById('renderAddNewCategoryFloat') !== null) {
        document.getElementById('renderAddNewCategoryFloat').innerHTML = /*html*/`
          <div class="new-category-float">
            <input id="newCategoryValue" type="text" placeholder="New category name">
            <img onclick="closeNewCategory()" src="./assets/img/black-x-button.png" alt="x-img">
            <img onclick="addNewCategoryToArray()" src="./assets/img/black-hook.png" alt="hook-img">
          </div>
        `;
      }
    // war mal dafür da color in kategorien auszuwählen, aber das passiert nun random
    // for (let i = 0; i < contentArray['settings']['categoryBgColor'].length; i++) {
    //     document.getElementById('addColorToNewCategory').innerHTML += /*html*/`
    //     <div onclick="" class="circle" style="background-color: ${contentArray['settings']['categoryBgColor'][i]}">
    // `;
    // }
}

function closeNewCategory() {
    document.getElementById('renderAddNewCategory').innerHTML = ``;
    document.getElementById('renderAddNewCategoryFloat').innerHTML = ``;
    document.getElementById('selectBox1').classList.remove('d-none');
    document.getElementById('checkboxes1').classList.remove('d-none');
    document.getElementById('addColorToNewCategory').innerHTML = ``;
}
let category = [];
function addNewCategoryToArray() {
    category = [];
    category = document.getElementById('newCategoryValue').value;
    // contentArray['settings']['categoryName'].push(category);
    // category color auch hinzufügen !
    if (document.getElementById('renderAddNewCategory') !== null) {
    document.getElementById('renderAddNewCategory').innerHTML = ``;
    }
    if (document.getElementById('renderAddNewCategoryFloat') !== null) {
    document.getElementById('renderAddNewCategoryFloat').innerHTML = ``;
    }
    document.getElementById('selectBox1').classList.remove('d-none');
    document.getElementById('checkboxes1').classList.remove('d-none');
    document.getElementById('addColorToNewCategory').innerHTML = ``;
    console.log('das ist die neue kategorie:', category);
    categoryOption2();
}


/**
 * This function renders the category in the header of the drowdown menu
 * 
 */
function categoryOption(index) {
    document.getElementById('addNewCategoryOption').innerHTML = ``;
    document.getElementById('categoryOptionShowSelected').innerHTML = /*html*/`
    <div class="flex align-center">
      <div id="categoryOptionShowSelected2">${contentArray['settings']['categoryName'][index]}
      </div>
      <div id="addNewCategoryColor" class="circle" style="background-color: ${contentArray['settings']['categoryBgColor'][index]}">
      </div>
      </div>
    `;
    document.getElementById('checkboxes1').style.display = "none";
    document.getElementById('selectBox1').style.borderRadius = "10px";
    expanded[0] = false;
}

let randomBgColor = [];
function categoryOption2() {
    randomBgColor = addRandomBackgroundColorToNewCategory();
    console.log('hier wird die randombg color gespcihert categoryoption2 function:', randomBgColor);
    document.getElementById('categoryOptionShowSelected').innerHTML = ``;
    document.getElementById('addNewCategoryOption').innerHTML = /*html*/`
    <div class="flex align-center">
      <div id="newCategoryName">${category}
      </div>
      <!-- hier wird die color wahrscheinlich random reingegeben über die if mit js befehl -->
      <div id="addNewCategoryColor" class="circle" style="background-color: ${randomBgColor}">
      </div>
    </div>
    `;
    document.getElementById('checkboxes1').style.display = "none";
    document.getElementById('selectBox1').style.borderRadius = "10px";
    expanded[0] = false;
}


/**
 * This function renders the assigned to options inside the drowdown menu
 * 
 */
function renderAddTaskAssignedToOptions() {
    document.getElementById('checkboxes2').innerHTML += /*html*/`
    <div onclick="addNewContact()" class="option flex">
      <div class="width-100">Invite new Contact</div>
    </div>
  `;
    for (let i = 0; i < contentArray['contacts']['name'].length; i++) {
        document.getElementById('checkboxes2').innerHTML += /*html*/`
        <div class="option flex">
        <input type="checkbox" id="assignedToOptions${i}" value="${contentArray['contacts']['name'][i]}" />
        <div onclick="toggleCheckbox(${i})" class="width-100">
        ${contentArray['contacts']['name'][i]}
      </div>
      </div>
      `;
    }

}


function toggleCheckbox(index) {
    let checkbox = document.getElementById(`assignedToOptions${index}`);
    checkbox.checked = !checkbox.checked;
}

/**
 * This function gives back a random color from the given colors in the array
 * 
 */
function addRandomBackgroundColorToNewCategory() {
    randomBgColor = [];
    random = Math.floor(Math.random() * contentArray['settings']['categoryBgColor'].length);
    return contentArray['settings']['categoryBgColor'][random];
}

// enter in form validation verhindern

// const formAddTask = document.getElementById('myForm');
// formAddTask.addEventListener('keydown', function (e) {
//     if (e.key === 'Enter') {
//         e.preventDefault();
//     }
// });

// document.getElementById("myForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Verhindert das Standardverhalten des Formulars, also das Absenden per Enter
//     console.log("Enter-Taste gedrückt");
//   });

// document.addEventListener("DOMContentLoaded", function() {
//     var form = document.getElementById("myAddForm");
//     if (form) {
//       form.addEventListener("submit", function(event) {
//         event.preventDefault();
//         console.log("Enter-Taste gedrückt");
//       });
//     } else {
//       console.log("Das Formular mit der ID 'myAddForm' wurde nicht gefunden.");
//     }
//   });

// function handleInputKeyDown(event) {
//     if (event.key === "Enter") {
//       event.preventDefault();
//       // Hier können Sie den gewünschten Code ausführen, der bei Drücken der Eingabetaste im Input-Feld ausgeführt werden soll
//       // Zum Beispiel:
//       console.log("Enter-Taste gedrückt im Input-Feld mit ID:", event.target.id);
//     }
//   }

//   // Input-Felder auswählen und Event-Listener hinzufügen
//   var inputFields = document.querySelectorAll("input");
//   inputFields.forEach(function(input) {
//     input.addEventListener("keydown", handleInputKeyDown);
//   });

/**
 * This function saves onclick when everything in the form is required in the renderAddTaskHTML function
 * 
 */
async function updateTaskArray() {
    // await getItem(key);
    let addTitle = document.getElementById('addTitle').value;
    contentArray['tasks']['title'].push(addTitle);
    console.log(addTitle);

    let addDescription = document.getElementById('addDescription').value;
    contentArray['tasks']['description'].push(addDescription);
    console.log(addDescription);

    let addDueDate = document.getElementById('addDueDate').value;
    contentArray['tasks']['dueDate'].push(addDueDate);
    console.log(addDueDate);




    //  zur add new category wird eine random color hinzugefügt noch!
    if (document.getElementById('categoryOptionShowSelected').textContent.trim() === "Select task category") {
        contentArray['tasks']['categoryName'].push(""); // Leerer String übergeben für keine kategorie
        contentArray['tasks']['categoryBgColor'].push(""); //leerer string für keine farbe übergeben
    } else {
        if (document.getElementById('categoryOptionShowSelected').innerHTML == "") {
            //add new category to settings and push to category task 
            let addNewCategory = document.getElementById('newCategoryName').innerHTML;
            // let addNewCategory = addNewCategory1.trim();
            contentArray['tasks']['categoryName'].push(addNewCategory.trim());
            contentArray['settings']['categoryName'].push(addNewCategory.trim());
            contentArray['settings']['categoryBgColor'].push(randomBgColor); // hier wird die random background color gespeichert
            console.log('add new category name:', addNewCategory);
        } else {
            //add only task category option from given options
            let addTaskStatus = document.getElementById('categoryOptionShowSelected2').innerHTML;
            contentArray['tasks']['categoryName'].push(addTaskStatus.trim());
            console.log('add given category:', addTaskStatus);
            // hier wird auch die farbe zur jeweiligen kategorie hinzugefügt
        }
        // zieht die farbe der kategorie raus
        let colorId = document.getElementById('addNewCategoryColor');
        let styleColor = window.getComputedStyle(colorId);
        let backgroundColor = styleColor.getPropertyValue('background-color');
        contentArray['tasks']['categoryBgColor'].push(backgroundColor);
        console.log('das ist die farbe die mitgegeben wird:', backgroundColor);
    }




    // task option ( in progress/ done / awainting feedback) eine null ist immer To Do (feld  0 )
    contentArray['tasks']['taskStatus'].push('0');





    // assigned to selector 
    let selectedNames = [];
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        let selectedName = checkbox.value;
        selectedNames.push(selectedName);
    });

    let nameInitials = [];
    let contactImageBgColor = [];

    if (selectedNames.length > 0) {
        selectedNames.forEach(selectedName => {
            let contactIndex = contentArray['contacts']['name'].indexOf(selectedName);
            let initials = contentArray['contacts']['nameInitials'][contactIndex];
            let bgColor = contentArray['contacts']['contactImageBgColor'][contactIndex];

            nameInitials.push(initials);
            contactImageBgColor.push(bgColor);
        });

        contentArray['tasks']['assignedTo'].push({
            "name": selectedNames,
            "nameInitials": nameInitials,
            "contactImageBgColor": contactImageBgColor
        });
    } else {
        contentArray['tasks']['assignedTo'].push({
            "name": [],
            "nameInitials": [],
            "contactImageBgColor": [],
        });
    }
    console.log(selectedNames);
    console.log(nameInitials);
    console.log(contactImageBgColor);






    // subtask
    if (currentSubtasks.length > 0) {
        contentArray['tasks']['subtasks'].push({
            "subtask": currentSubtasks,
            "subtaskStatus": currentSubtaskStatus, //automatisch auf open bei hinzufügen
        });
        console.log(currentSubtasks);
        console.log(currentSubtaskStatus);
    } else {
        contentArray['tasks']['subtasks'].push({
            "subtask": [],
            "subtaskStatus": [],
        });
    }

    // prio
    if (addPriority.length === 0) {
        addPriority = "low";
        contentArray['tasks']['priority'].push(addPriority);
        console.log("ohne ausgewählte prio immer low: ", addPriority);
    } else {
        contentArray['tasks']['priority'].push(addPriority);
        console.log("standart mit ausgewählert prio: ", addPriority);
    }


    await setItem(key, contentArray);
    renderBoardContent();
    renderBoard();
}


/**
 * This function added subtasks to the subtask add area
 * 
 */
currentSubtasks = [];
currentSubtaskStatus = [];
function addSubtask() {
    let subtask = document.getElementById('inputAddSubtaskContent').value;
    if (subtask === '') {
        return console.log('gib einen subtask ein'); // Beendet die Funktion, wenn der Wert leer ist
    }
    document.getElementById('addSubtaskContent').innerHTML = ``;
    document.getElementById('inputAddSubtaskContent').value = ``;
    currentSubtasks.push(subtask);
    currentSubtaskStatus.push('open');
    for (let i = 0; i < currentSubtasks.length; i++) {
        document.getElementById('addSubtaskContent').innerHTML += /*html*/`
        <div id="addedCurrentSubtask${i}">
            - ${currentSubtasks[i]}
        </div>
    `;
    }
}


let addPriority = [];
/**
 * This function select the choosen priority status to the addPriority array
 * 
 * @param {string} priority this parameter comes from the three diffrent priority types when klick on them to select and give a name, urgent, medium, low
 */
function addPrio(priority) {
    addPriority = priority;
    console.log(addPriority);
}