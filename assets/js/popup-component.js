class PopupComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="popup" class="popup">
        <h2>Signaler ce produit</h2>
        <div class="popup__box">
          <p>Dites nous quel est le problème</p>
          <p>
            <select class="popup__box--select" name="" id="issueTypeSelect">
              <option value="0">
                Ce produit n'est pas dans la bonne catégorie
              </option>
              <option value="autres">Autres</option>
            </select>
          </p>

          <p class="popup__other--field">
            <label for="">Dites-nous</label>
            <input
              type="text"
              class="popup__other--input"
              id="otherIssueInput"
            />
          </p>

          <div
            class="popup__error"
            id="error-message"
            style="display: none; color: red"
          >
            Veuillez renseigner la raison.
          </div>

          <div class="popup__box--btn">
            <button id="popup__validate">Envoyer le signalement</button>
            <button id="popup__close">Annuler</button>
          </div>
        </div>
      </div>
    `;
  }

  get popupElement() {
    return this.querySelector("#popup");
  }

  get closeElement() {
    return this.querySelector("#popup__close");
  }

  get validateElement() {
    return this.querySelector("#popup__validate");
  }

  get issueTypeSelectElement() {
    return this.querySelector("#issueTypeSelect");
  }

  get otherFieldElement() {
    return this.querySelector("#otherIssueInput");
  }

  get errorMessageElement() {
    return this.querySelector("#error-message");
  }
}

customElements.define("popup-component", PopupComponent);

document.addEventListener("DOMContentLoaded", () => {
  const popupComponent = document.querySelector("popup-component");

  const warnings = document.querySelectorAll(".warning");

  warnings.forEach((warning) => {
    warning.addEventListener("click", () => {
      popupComponent.popupElement.style.display = "block";
    });
  });

  popupComponent.closeElement.addEventListener("click", () => {
    popupComponent.popupElement.style.display = "none";
  });

  popupComponent.validateElement.addEventListener("click", () => {
    if (
      popupComponent.issueTypeSelectElement.value === "autres" &&
      popupComponent.otherFieldElement.style.display !== "none" &&
      popupComponent.otherFieldElement.value.trim() === ""
    ) {
      popupComponent.errorMessageElement.style.display = "block";
    } else {
      popupComponent.errorMessageElement.style.display = "none";
      popupComponent.popupElement.style.display = "none";
    }
  });
});
