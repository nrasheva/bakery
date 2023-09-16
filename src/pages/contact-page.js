import { LitElement, html } from 'lit';

class ContactPage extends LitElement {
  render() {
    return html`
      <div>
        <h1>ContactPage</h1>
      </div>
    `;
  }
}

customElements.define('contact-page', ContactPage);
