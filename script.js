const btn = document.querySelector(".btn");
const dropDown = document.querySelector(".dropdown-content");
const btn_1 = document.querySelector(".btn-1");
const dropDown_2 = document.querySelector(".dropdown-content-1");
const thread_a = document.getElementById("thread-a");
const thread_a_sec = document.getElementById("thread-a-section");
const thread_a_icon_1 = document.getElementById("thread-a-icon-1");
const introduction = document.getElementById("introduction");
const introductionIcon = document.getElementById("introduction-icon");
const introduction_sec = document.querySelector(".introduction-sec");

btn.addEventListener("click", () => {
  if (dropDown.classList.contains("none")) {
    dropDown.classList.remove("none");
  } else {
    dropDown.classList.add("none");
  }
});

btn_1.addEventListener("click", () => {
  if (dropDown_2.classList.contains("none")) {
    dropDown_2.classList.remove("none");
  } else {
    dropDown_2.classList.add("none");
  }
});

thread_a.addEventListener("click", () => {
  if (!thread_a_sec.classList.contains("none")) {
    thread_a_sec.classList.add("none");
  } else {
    thread_a_sec.classList.remove("none");
  }

  if (thread_a_icon_1.classList.contains("fa-chevron-up")) {
    thread_a_icon_1.classList.remove("fa-chevron-up");
    thread_a_icon_1.classList.add("fa-chevron-down");
  } else if (thread_a_icon_1.classList.contains("fa-chevron-down")) {
    thread_a_icon_1.classList.remove("fa-chevron-down");
    thread_a_icon_1.classList.add("fa-chevron-up");
  }
});

introduction.addEventListener("click", () => {
  if (!introduction_sec.classList.contains("none")) {
    introduction_sec.classList.add("none");
  } else {
    introduction_sec.classList.remove("none");
  }

  if (introductionIcon.classList.contains("fa-chevron-up")) {
    introductionIcon.classList.remove("fa-chevron-up");
    introductionIcon.classList.add("fa-chevron-down");
  } else if (introductionIcon.classList.contains("fa-chevron-down")) {
    introductionIcon.classList.remove("fa-chevron-down");
    introductionIcon.classList.add("fa-chevron-up");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var mainDiv = document.getElementById("mainDiv");

  mainDiv.addEventListener("click", function () {
    mainDiv.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var mainDiv1 = document.getElementById("mainDiv-1");

  mainDiv1.addEventListener("click", function () {
    mainDiv1.classList.toggle("active");
  });
});

const tasks = document.getElementById("tasks");
const task_Title = document.getElementById("task_title");
const task_Description = document.getElementById("task_description");
const assets_title = document.querySelectorAll(".asset-title");
const asset_description = document.querySelectorAll(".asset_description");

fetch("test.json")
  .then((response) => response.json())
  .then((data) => {
    const taskTitle = data.tasks[0].task_title;
    const taskDescription = data.tasks[0].task_description;
    task_Title.innerHTML = `${taskTitle}`;
    task_Description.innerHTML = `${taskDescription}`;
    tasks.insertAdjacentHTML(
      "beforeend",
      `<li class="mb-4"><strong>${taskTitle}</strong></li>`
    );

    // Access and loop through the assets array
    const assets = data.tasks[0].assets;
    assets.forEach((asset, index) => {
      assets_title[index].innerHTML = asset.asset_title;
      asset_description[
        index
      ].innerHTML = `<strong>Description : </strong>${asset.asset_description}`;
      tasks.insertAdjacentHTML("beforeend", `<li>${asset.asset_title}</li>`);
    });
  })
  .catch((error) => {
    console.error("Error reading the JSON file:", error);
  });
