document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript loaded!");

  const toggleButton = document.getElementById("dark-mode-toggle");
  const body = document.body;

  if (!toggleButton) {
    console.error("Button not found!");
    return;
  }

  console.log("Button found!");

  // Check for saved mode in localStorage
  if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    console.log("Dark mode enabled from localStorage");
  }

  toggleButton.addEventListener("click", function () {
    console.log("Button clicked!");
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      localStorage.setItem("dark-mode", "disabled");
      console.log("Dark mode disabled");
    } else {
      body.classList.add("dark-mode");
      localStorage.setItem("dark-mode", "enabled");
      console.log("Dark mode enabled");
    }
  });
});
