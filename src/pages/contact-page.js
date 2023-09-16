import { LitElement, html } from 'lit';
import { appHero } from '../components/app-hero.js';

export class ContactPage extends LitElement {
  render() {
    return html`<div>${appHero('', 'ContactPage')}</div>`;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('contact-page', ContactPage);
