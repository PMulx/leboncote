document.addEventListener("DOMContentLoaded", function () {
  // Sélectionnez le bouton "Reset"
  var resetButton = document.querySelector(".reset");

  // Sélectionnez le formulaire
  var filtersForm = document.querySelector(".filtres__checkbox");

  // Ajoutez un écouteur d'événements au clic du bouton "Reset"
  resetButton.addEventListener("click", function () {
    // Parcourez tous les éléments de case à cocher et décochez-les
    var checkboxes = filtersForm.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = false;
    });
  });
});
