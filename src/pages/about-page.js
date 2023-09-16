import { LitElement, html } from 'lit';

class AboutPage extends LitElement {
  render() {
    return html`
      <div>
        <h1>AboutPage</h1>
      </div>
    `;
  }
}

customElements.define('about-page', AboutPage);
