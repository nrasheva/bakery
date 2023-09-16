import { LitElement, html } from 'lit';
import { appHero } from '../components/app-hero.js';

export class ProductsPage extends LitElement {
  render() {
    return html`<div>${appHero('', 'ProductsPage')}</div>`;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('products-page', ProductsPage);
