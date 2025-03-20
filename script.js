  // Svar på mild - Legg til 1 knapp //  
  
const addTodo = document.querySelector("#addTodo");

addTodo.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Knappen er trykket!");

  // Steg 1: Hent input verdi
  const userInput = document.querySelector("#userInput").value;
  console.log(userInput);

  // Steg 2: Hent hvor info skal synes på siden
  const todoList = document.querySelector("#todoList");
  console.log(todoList)

  // Steg 3: Lag et elemenet til info som skal synes
  const todoItem = document.createElement("li");
  
  // Steg 4: Sett hvilken info som skal synes
  todoItem.textContent = userInput;

  // Steg 5: Legg element med info til i listen som synes på synes
  todoList.appendChild(todoItem);

 // Steg 6: Tøm userInput feltet ved å hente /copy deler av pkt 1 i Mild
 // const userInput = document.querySelector("#userInput").value; 
  
  document.querySelector("#userInput").value = "";


  // Svar på Medium på innlevering - Lag 2 nye knapper:

  // Steg 1: Lag et element til slett knappen
  
  const deleteButton = document.createElement("button");

  // Steg 2: Gi slett knappentekst innhold
  deleteButton.textContent = "Slett";

  // Steg 3: Legg til slett knapp til gjøremålet
  todoItem.appendChild(deleteButton);

  // Steg 4: Gjøre sånn at slett knapp kan trykkes på
  deleteButton.addEventListener("click", function () {
    console.log("Slett knapp er trykket!");
 
 // Steg 5: Slett gjøremålet fra listen
  todoItem.remove();
})


// Steg 1: Lag et element til slett knappen
const finishButton = document.createElement("button");

// Steg 2: Gi slett knappentekst innhold
finishButton.textContent = "Ferdig";

// Steg 3: Legg til slett knapp til gjøremålet
todoItem.appendChild(finishButton);

// Steg 4: Gjøre sånn at slett knapp kan trykkes på
finishButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Ferdig knapp er trykket!");

// Steg 5: Gir gjøremålet en klasse med styling for å symbolisere ferdig - ferdig med dette gjøremålet
todoItem.classList.add("finished");
})
 
});

