document.addEventListener("DOMContentLoaded", function () {
  const headerText = "Welcome to Awesome Gaming!";
  const headerElement = document.getElementById("typing-header");
  let index = 0;

  function typeText() {
      if (index < headerText.length) {
          headerElement.textContent += headerText.charAt(index);
          index++;
          setTimeout(typeText, 100);
      }
  }

  typeText();
});

