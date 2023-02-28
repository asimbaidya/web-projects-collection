"use strict";

const tasks = [];

const get_ele = (txt, tag) => {
  const ele = document.createElement(tag);
  const txt_node = document.createTextNode(txt);
  ele.appendChild(txt_node);
  return ele;
};

const update_ui = (todo) => {
  todo = get_ele("", "div");
  todo.appendChild(input_task);
  const list = get_ele("", "ol");
  tasks.forEach((task) => {
    const li = get_ele(task, "li");
    list.appendChild(li);
  });
  todo.appendChild(list);
  return todo;
};

const input_task = get_ele("", "input");

input_task.onkeyup = (k) => {
  if (k.key === "Enter" || k.keyCode === 12) {
    console.log(`The input was: ${input_task.value}`);
    if (input_task.value !== "") {
      tasks.push(input_task.value);
      const new_ui = update_ui();
      todo.innerHTML = "";
      todo.appendChild(new_ui);
    }
    input_task.value = "";
  }
};

let todo = document.getElementById("todo");

todo.appendChild(input_task);
