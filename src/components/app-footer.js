import { LitElement, html, css } from 'lit';

class AppFooter extends LitElement {
  static properties = {
    year: { type: Number },
  };

  static styles = css`
    footer {
      align-items: center;
      background-color: black;
      display: flex;
      height: 65px;
      justify-content: space-between;
      padding: 0 10vw;
    }

    .footer-content {
      color: white;
      display: flex;
      gap: 2rem;
    }

    .footer-content > a {
      color: white;
      text-decoration: none;
    }
  `;

  constructor() {
    super();
    this.year = new Date().getFullYear();
  }

  render() {
    return html`
      <footer>
        <div class="footer-content">
          <p>&copy; ${this.year} Nadezhda Rasheva</p>
        </div>
        <div class="footer-content">
          <a href="/contact">Contact</a>
        </div>
      </footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);
