"use strict";

const tasks = document.querySelector("#tasks");
const input = document.querySelector("#input");

let data = window.localStorage.getItem("todos");

if (data === null) {
  data = { count: 0, tasks: [] };
  data = JSON.stringify(data);
}

console.log(data);

data = JSON.parse(data);

data.tasks.forEach((todo) => {
  let task = document.createElement("li");
  task.innerText = todo;
  tasks.appendChild(task);
});

btn.onclick = () => {
  // create html element & push
  let task = document.createElement("li");
  task.innerText = input.value;
  tasks.appendChild(task);

  // update  localstorage
  data.tasks.push(input.value);
  window.localStorage.setItem("todos", JSON.stringify(data));
};
