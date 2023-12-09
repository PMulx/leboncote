class FilterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <form action="" class="filtres__checkbox">
      <div class="filtres__title--div">
        <h2 class="filtres__title">Filtres</h2>
        <p class="reset">Reset</p>
      </div>
      <div class="filtres__checkbox--divs">
        <div class="filtres__checkbox--div">
          <input type="checkbox" name="sport" />
          <label class="filtres__checkbox--label"> Sport </label>
        </div>
        <div class="filtres__checkbox--div">
          <input type="checkbox" name="e-sport" />
          <label class="filtres__checkbox--label"> E-sport </label>
        </div>
        <div class="filtres__checkbox--div">
          <input type="checkbox" name="autres" />
          <label class="filtres__checkbox--label"> Autres </label>
        </div>
      </div>
    </form>
  `;
  }

  get resetButtonElement() {
    return this.querySelector(".reset");
  }

  get checkboxesElements() {
    return this.querySelectorAll("input[type='checkbox']");
  }
}

customElements.define("filter-component", FilterComponent);

document.addEventListener("DOMContentLoaded", () => {
  const filterComponent = document.querySelector("filter-component");

  filterComponent.resetButtonElement.addEventListener("click", () => {
    filterComponent.checkboxesElements.forEach((checkbox) => {
      checkbox.checked = false;
    });
  });
});
