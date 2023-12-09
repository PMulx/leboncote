class ArticleComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="articles">
    <div class="article__div">
      <img
        class="article__div--img"
        src="/assets/images/vitality.png"
        alt="Maillot Vitality"
      />
      <div class="article__div--infos">
        <h3>Maillot Vitality</h3>
        <div>
          <svg
          class="like"
            width="26"
            height="22"
            viewBox="0 0 26 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.125 1.33334C4.83437 1.33334 2.16666 4.00105 2.16666 7.29168C2.16666 13.25 9.20833 18.6667 13 19.9266C16.7917 18.6667 23.8333 13.25 23.8333 7.29168C23.8333 4.00105 21.1656 1.33334 17.875 1.33334C15.86 1.33334 14.0779 2.3338 13 3.8651C12.4506 3.0825 11.7207 2.44381 10.8721 2.00311C10.0235 1.56241 9.0812 1.33267 8.125 1.33334Z"
              stroke="#444C5C"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            class="warning"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.6625 3.75H10.3375L3.75 10.3375V19.6625L10.3375 26.25H19.6625L26.25 19.6625V10.3375L19.6625 3.75ZM23.75 18.625L18.625 23.75H11.375L6.25 18.625V11.375L11.375 6.25H18.625L23.75 11.375V18.625Z"
              fill="#FF7171"
            />
            <path
              d="M15 21.25C15.6904 21.25 16.25 20.6904 16.25 20C16.25 19.3096 15.6904 18.75 15 18.75C14.3096 18.75 13.75 19.3096 13.75 20C13.75 20.6904 14.3096 21.25 15 21.25Z"
              fill="#FF7171"
            />
            <path d="M13.75 8.75H16.25V17.5H13.75V8.75Z" fill="#FF7171" />
          </svg>
        </div>
      </div>
    </div>
    <div class="article__div">
      <img
        class="article__div--img"
        src="/assets/images/real.png"
        alt="Maillot Real Madrid"
      />
      <div class="article__div--infos">
        <h3>Maillot Real</h3>
        <div>
          <svg
          class="like"
            width="26"
            height="22"
            viewBox="0 0 26 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.125 1.33334C4.83437 1.33334 2.16666 4.00105 2.16666 7.29168C2.16666 13.25 9.20833 18.6667 13 19.9266C16.7917 18.6667 23.8333 13.25 23.8333 7.29168C23.8333 4.00105 21.1656 1.33334 17.875 1.33334C15.86 1.33334 14.0779 2.3338 13 3.8651C12.4506 3.0825 11.7207 2.44381 10.8721 2.00311C10.0235 1.56241 9.0812 1.33267 8.125 1.33334Z"
              stroke="#444C5C"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            class="warning"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.6625 3.75H10.3375L3.75 10.3375V19.6625L10.3375 26.25H19.6625L26.25 19.6625V10.3375L19.6625 3.75ZM23.75 18.625L18.625 23.75H11.375L6.25 18.625V11.375L11.375 6.25H18.625L23.75 11.375V18.625Z"
              fill="#FF7171"
            />
            <path
              d="M15 21.25C15.6904 21.25 16.25 20.6904 16.25 20C16.25 19.3096 15.6904 18.75 15 18.75C14.3096 18.75 13.75 19.3096 13.75 20C13.75 20.6904 14.3096 21.25 15 21.25Z"
              fill="#FF7171"
            />
            <path d="M13.75 8.75H16.25V17.5H13.75V8.75Z" fill="#FF7171" />
          </svg>
        </div>
      </div>
    </div>
    <div class="article__div">
      <img
        class="article__div--img"
        src="/assets/images/prime.png"
        alt="T-shirt Narcissique"
      />
      <div class="article__div--infos">
        <h3>T-shirt Narcissique</h3>
        <div>
          <svg
          class="like"
            width="26"
            height="22"
            viewBox="0 0 26 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.125 1.33334C4.83437 1.33334 2.16666 4.00105 2.16666 7.29168C2.16666 13.25 9.20833 18.6667 13 19.9266C16.7917 18.6667 23.8333 13.25 23.8333 7.29168C23.8333 4.00105 21.1656 1.33334 17.875 1.33334C15.86 1.33334 14.0779 2.3338 13 3.8651C12.4506 3.0825 11.7207 2.44381 10.8721 2.00311C10.0235 1.56241 9.0812 1.33267 8.125 1.33334Z"
              stroke="#444C5C"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            class="warning"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.6625 3.75H10.3375L3.75 10.3375V19.6625L10.3375 26.25H19.6625L26.25 19.6625V10.3375L19.6625 3.75ZM23.75 18.625L18.625 23.75H11.375L6.25 18.625V11.375L11.375 6.25H18.625L23.75 11.375V18.625Z"
              fill="#FF7171"
            />
            <path
              d="M15 21.25C15.6904 21.25 16.25 20.6904 16.25 20C16.25 19.3096 15.6904 18.75 15 18.75C14.3096 18.75 13.75 19.3096 13.75 20C13.75 20.6904 14.3096 21.25 15 21.25Z"
              fill="#FF7171"
            />
            <path d="M13.75 8.75H16.25V17.5H13.75V8.75Z" fill="#FF7171" />
          </svg>
        </div>
      </div>
    </div>
    <div class="article__div">
      <div class="article__div--infos">
        <h3>Maillot KC</h3>
        <div>
          <svg
          class="like"
            width="26"
            height="22"
            viewBox="0 0 26 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.125 1.33334C4.83437 1.33334 2.16666 4.00105 2.16666 7.29168C2.16666 13.25 9.20833 18.6667 13 19.9266C16.7917 18.6667 23.8333 13.25 23.8333 7.29168C23.8333 4.00105 21.1656 1.33334 17.875 1.33334C15.86 1.33334 14.0779 2.3338 13 3.8651C12.4506 3.0825 11.7207 2.44381 10.8721 2.00311C10.0235 1.56241 9.0812 1.33267 8.125 1.33334Z"
              stroke="#444C5C"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            class="warning"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.6625 3.75H10.3375L3.75 10.3375V19.6625L10.3375 26.25H19.6625L26.25 19.6625V10.3375L19.6625 3.75ZM23.75 18.625L18.625 23.75H11.375L6.25 18.625V11.375L11.375 6.25H18.625L23.75 11.375V18.625Z"
              fill="#FF7171"
            />
            <path
              d="M15 21.25C15.6904 21.25 16.25 20.6904 16.25 20C16.25 19.3096 15.6904 18.75 15 18.75C14.3096 18.75 13.75 19.3096 13.75 20C13.75 20.6904 14.3096 21.25 15 21.25Z"
              fill="#FF7171"
            />
            <path d="M13.75 8.75H16.25V17.5H13.75V8.75Z" fill="#FF7171" />
          </svg>
        </div>
      </div>
    </div>
  </div>
          `;
  }
}

customElements.define("article-component", ArticleComponent);
