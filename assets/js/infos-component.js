class IntroComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div>
    <h2> Révolutionnez votre Expérience avec le CSS Avancé </h2>
    <p> 
    Bienvenue sur Le bon côté, où nous vous offrons une expérience utilisateur exceptionnelle grâce à l'utilisation de fonctionnalités CSS avancées. Notre engagement envers une conception élégante et une maintenance simplifiée nous a conduit à intégrer deux nouvelles fonctionnalités révolutionnaires : :has() et le CSS Nesting.</p>
    </div>
    `;
  }
}

customElements.define("intro-component", IntroComponent);

class NestingComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div>
      <h3> CSS Nesting : La Clarté au Cœur de la Conception </h3>
      <p> 
      Imaginez un CSS où la structure reflète la hiérarchie de votre HTML, où la lisibilité est reine et la maintenance est un jeu d'enfant. Grâce au CSS Nesting, nous avons rendu cela possible. Désormais, vos règles CSS peuvent être imbriquées, suivant naturellement la structure de vos balises HTML. Cela signifie un code plus clair, plus concis et moins sujet aux erreurs. Jetez un œil à cet exemple :</p>
      <pre>
      <code>
          .header {
              padding: 2rem 5rem;
              display: flex;
              justify-content: space-evenly;
              align-items: flex-end;

              &amp; .header__logo {
                  width: 12%;
              }

              &amp; .header__title {
                  font-family: "Raleway", sans-serif;
                  color: var(--secondaire);
                  margin: 0;
              }
          }
      </code>
  </pre>
      <p>
      Le CSS Nesting permet d'éviter la répétition inutile de sélecteurs, simplifiant ainsi la maintenance et l'évolutivité de votre application.
      </p>
      </div>
      `;
  }
}

customElements.define("nesting-component", NestingComponent);

class HasComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div>
        <h3>:has() Pseudo-classe : Élevez vos Sélections au Niveau Supérieur</h3>
        <p> 
        Rencontrez :has(), la pseudo-classe qui offre un pouvoir exceptionnel en matière de sélection d'éléments basée sur leur contenu. En utilisant :has(), nous avons pu créer des sélecteurs plus puissants, ciblant spécifiquement les éléments qui contiennent certaines balises. Voici un exemple concret :</p>
        <pre>
        <code>
        .filtres__checkbox:has(input:checked) .reset {
            display: block;
          }
        </code>
        </pre>
        <p>
        Cette approche nous permet de personnaliser le style des sections qui contiennent des titres de niveau 2, offrant un contrôle plus fin sur l'apparence de notre application.
        </p>
        </div>
        `;
  }
}

customElements.define("has-component", HasComponent);

class ConcluComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <div>
          <h3>Pourquoi C'est Révolutionnaire ?</h3>
          <p> 
          En adoptant ces fonctionnalités avant-gardistes, nous avons réussi à transformer notre CSS en un langage de style plus puissant et expressif. Non seulement cela rend votre code plus lisible et structuré, mais cela limite également la nécessité d'utiliser du JavaScript pour des sélections complexes.
          </p>
          <p>
          En résumé, l'utilisation du CSS Nesting et de la pseudo-classe :has() n'est pas simplement une mise à jour de style ; c'est une révolution dans la manière dont nous concevons des interfaces utilisateur. Rejoignez-nous dans cette ère de clarté, de simplicité et de puissance CSS.
          </p>
          </div>
          `;
  }
}

customElements.define("conclu-component", ConcluComponent);
