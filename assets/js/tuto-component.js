class TutoComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="popup__tuto" id="popup-overlay">
    <div class="popup__content--tuto" id="popup-content">
      <p id="popup-text"></p>
      <div class="popup__btn">
        <button
          class="popup__btn--prev"
          id="prev-button"
          onclick="prevStep()"
          style="display: none"
        >
          Précédent
        </button>
        <button
          class="popup__btn--next"
          id="next-button"
          onclick="nextStep()"
        >
          Suivant
        </button>
      </div>
    </div>
  </div>
      `;
  }
}

customElements.define("tuto-component", TutoComponent);

let currentStep = 0;

const steps = [
  {
    target: ".filtres__checkbox--divs",
    content:
      "J'ai utilisé le sélecteur :has() pour détecter lorsque la case est cochée, puis j'ai appliqué les styles appropriés au bouton Reset.",
    position: { top: "35%", left: "50%" },
  },
  {
    target: ".article__div:nth-child(4)",
    content:
      "J'ai utilisé le sélecteur :has() pour vérifier s'il n'y a pas d'image. Si c'est le cas, j'ai changé la couleur de fond et redessiné la div en dessous.",
    position: { top: "38%", left: "55%" },
  },
  {
    target: ".article__div:nth-child(4) .warning",
    content:
      "Lorsque vous cliquez sur le bouton 'warning' pour afficher la popup, je vérifie la valeur de l'option sélectionnée avec mon sélecteur :has(). Si c'est 'Autre', j'affiche l'input pour indiquer la raison.",
    position: { top: "55%", left: "55%" },
  },
];
function showPopup() {
  const popup = document.getElementById("popup-overlay");
  const popupContent = document.getElementById("popup-content");
  const popupText = document.getElementById("popup-text");
  const popupTuto = document.querySelector(".popup__tuto");

  const step = steps[currentStep];

  // Retirez la classe .tuto__cible de tous les éléments
  document.querySelectorAll(".tuto__cible").forEach((element) => {
    element.classList.remove("tuto__cible");
  });

  // Ajoutez la classe .tuto__cible à l'élément spécifié dans chaque étape
  const targetElement = document.querySelector(step.target);
  if (targetElement) {
    targetElement.classList.add("tuto__cible");
  }

  if (step.position) {
    popupTuto.style.top = step.position.top;
    popupTuto.style.left = step.position.left;
  }

  popupText.textContent = step.content;

  if (currentStep === 0) {
    document.getElementById("next-button").style.display = "block";
    document.getElementById("prev-button").style.display = "none";
  } else if (currentStep === steps.length - 1) {
    document.getElementById("next-button").style.display = "none";
    document.getElementById("prev-button").style.display = "block";
  } else {
    document.getElementById("next-button").style.display = "block";
    document.getElementById("prev-button").style.display = "block";
  }

  popup.style.display = "block";
}

function hidePopup() {
  document.getElementById("popup-overlay").style.display = "none";
  currentStep = 0;
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showPopup();
  } else {
    hidePopup();
    alert("Guide terminé !");
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showPopup();
  }
}

document.querySelector(".tuto").addEventListener("click", function (event) {
  event.stopPropagation(); // Empêche la propagation de l'événement
  currentStep = 0;
  showPopup();

  // Ajoutez un écouteur d'événements sur le document pour fermer la popup en dehors d'elle
  document.addEventListener("click", closePopupOutside);
});

function closePopupOutside(event) {
  const popup = document.getElementById("popup-overlay");
  const popupContent = document.getElementById("popup-content");

  // Vérifiez si l'élément cliqué est en dehors de la popup
  if (!popupContent.contains(event.target)) {
    document.querySelectorAll(".tuto__cible").forEach((element) => {
      element.classList.remove("tuto__cible");
    });
    hidePopup();
    document.removeEventListener("click", closePopupOutside);
  }
}
