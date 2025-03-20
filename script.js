const addTodo = document.querySelector("#addTodo");

addTodo.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Knappen er trykket!");

  const userInput = document.querySelector("#userInput").value;
  console.log(userInput);
});
