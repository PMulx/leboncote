class HomeComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section class="home">
  <a class="discover" href="/public/shop.html">
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.75 15V23.7087C3.75 26.5962 6.9175 28.42 9.49625 27.0187L13.5 24.8412M3.75 9.99999V6.29124C3.75 3.40374 6.9175 1.57999 9.49625 2.98124L25.5113 11.6912C26.1116 12.0105 26.6138 12.4871 26.964 13.07C27.3142 13.6528 27.4992 14.32 27.4992 15C27.4992 15.68 27.3142 16.3471 26.964 16.93C26.6138 17.5129 26.1116 17.9895 25.5113 18.3087L17.5038 22.6637"
        stroke="#E3E7F0"
        stroke-width="1.875"
        stroke-linecap="round"
      />
    </svg>
    Découvrir
  </a>
  <button class="install" id="pwaInstall">
    Installer l'application
  </button>
</section>;`;
  }
}

customElements.define("home-component", HomeComponent);
