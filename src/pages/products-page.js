import { LitElement, html } from 'lit';

class ProductsPage extends LitElement {
  render() {
    return html`
      <div>
        <h1>ProductsPage</h1>
      </div>
    `;
  }
}

customElements.define('products-page', ProductsPage);
