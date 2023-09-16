import { html } from 'lit-html';

export const appHero = (image, text) => html`<style>
    .hero {
      background-color: rgba(0, 0, 0, 0.5);
      display: grid;
      height: 60vh;
      place-items: center;
    }
  </style>
  <div class="hero">
    <h1>${text}</h1>
  </div>`;
