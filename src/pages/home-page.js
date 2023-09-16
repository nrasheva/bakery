import { LitElement, html } from 'lit';
import { appHero } from '../components/app-hero.js';

export class HomePage extends LitElement {
  render() {
    return html`<div>${appHero('', 'HomePage')}</div>`;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('home-page', HomePage);
