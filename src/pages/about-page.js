import { LitElement, html } from 'lit';
import { appHero } from '../components/app-hero.js';

export class AboutPage extends LitElement {
  render() {
    return html`<div>${appHero('', 'AboutPage')}</div>`;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('about-page', AboutPage);
