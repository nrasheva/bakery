import { LitElement, html } from 'lit';

class AppNavigation extends LitElement {
  render() {
    return html`
      <nav>
        <a href="/">Home</a>
        <a href="/products">Products</a>
      </nav>
    `;
  }
}

customElements.define('app-navigation', AppNavigation);
