document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const warnings = document.querySelectorAll(".warning");
  const close = document.getElementById("popup__close");
  const valid = document.getElementById("popup__validate");
  const issueTypeSelect = document.getElementById("issueTypeSelect");
  const otherField = document.getElementById("otherIssueInput");
  const errorMessage = document.getElementById("error-message");

  warnings.forEach((warning) => {
    warning.addEventListener("click", () => {
      popup.style.display = "block";
    });
  });
  close.addEventListener("click", () => {
    popup.style.display = "none";
  });
  valid.addEventListener("click", () => {
    if (
      issueTypeSelect.value === "autres" &&
      otherField.style.display !== "none" &&
      otherField.value.trim() === ""
    ) {
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
      popup.style.display = "none";
    }
  });
});
