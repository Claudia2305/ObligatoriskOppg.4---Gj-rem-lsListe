const addTodo = document.querySelector("#addTodo");

addTodo.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Knappen er trykket!");

  // Steg 1: Hent input verdi
  const userInput = document.querySelector("#userInput").value;
  console.log(userInput);

  // Steg 2: Hent hvor info skal synes på siden
  const todoList = document.querySelector("#todoList");

  // Steg 3: Lag et elemenet til info som skal synes
  const todoItem = document.createElememnt("li");
  
  // Steg 4: Sett hvilken info som skal synes
  todoItem.textContent = userInput;

  // Steg 5: Legg element med info til i listen som synes på synes
  todoList.appendChild(todoItem);
});