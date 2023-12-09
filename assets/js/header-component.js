class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header class="header">
          <img class="header__logo" src="/assets/images/logo.png" alt="Logo leboncôté" />
          <h1 class="header__title">Leboncôté</h1>
        </header>
      `;
  }
}

customElements.define("header-component", HeaderComponent);
