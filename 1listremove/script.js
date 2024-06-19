const list = []; //list panel for later
const $listgrp = document.getElementById("list-group");
let list_group = document.querySelector("ul");

var moment = require("moment"); // CJS 방식
//import moment from "moment"; // ESM 방식
const locale = "ko";
moment.locale(locale);

const d = new Date();
console.log("🚀>>  d:", d.toLocaleString());

const m = moment();
console.log("🚀>>  m:", m.format("LLL"));
console.log("🚀>>  m:", m.format("dddd"));
console.log("🚀>>  m:", m.format("YYYY-MM-DD (ddd) hh:mm:ss"));
console.log("🚀>>  m:", m.fromNow());

const writtenDate = moment("2024-04-30");
console.log("🚀>>  writtenDate:", writtenDate.fromNow());

function appendTodo(t) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.className = "close";
  span.innerHTML = "X";
  span.addEventListener("click", function () {
    this.parentElement.style.display = "none";
  });
  li.innerText = document.getElementById("inp").value;
  li.appendChild(span);
  list_group.insertBefore(li, list_group.firstChild);
}

function submitForm(evt) {
  evt.preventDefault();
  appendTodo(evt);
  document.getElementById("inp").value = " ";
}

function closeAll(evt) {
  list_group.innerHTML = "";
}
