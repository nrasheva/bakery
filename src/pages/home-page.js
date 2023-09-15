import { LitElement, html } from 'lit';

class HomePage extends LitElement {
  render() {
    return html`
      <div>
        <h1>HomePage</h1>
      </div>
    `;
  }
}

customElements.define('home-page', HomePage);
