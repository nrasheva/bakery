import { LitElement, html, css } from 'lit';

class AppNavigation extends LitElement {
  static properties = {
    height: { type: Number },
    isVisible: { type: Boolean },
  };

  static styles = css`
    nav {
      align-items: center;
      background-color: rgba(0, 0, 0, 0.75);
      display: flex;
      height: 65px;
      inset: 0;
      justify-content: space-between;
      padding: 0 10vw;
      position: fixed;
    }

    .nav-logo {
      color: white;
    }

    .nav-content {
      display: flex;
    }

    .nav-items {
      align-items: center;
      display: flex;
      gap: 2rem;
    }

    .nav-items > a {
      color: white;
      cursor: pointer;
      text-decoration: none;
    }

    .hamburger-menu {
      background: none;
      border: none;
    }

    .bar {
      background-color: white;
      height: 1px;
      margin: 7px 0;
      transition: all 0.5s;
      width: 35px;
    }

    .visible .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .visible .bar:nth-child(2) {
      opacity: 0;
      transform: translateX(50%);
    }

    .visible .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }

    @media only screen and (min-width: 1200px) {
      .nav-content {
        flex: 1;
        justify-content: center;
      }

      .hamburger-menu {
        display: none;
      }
    }

    @media only screen and (max-width: 768px) {
      .nav-items {
        background-color: orange;
        flex-direction: column;
        inset: 65px 0 0 0;
        padding: 5vw 10vw;
        position: absolute;
      }

      .hamburger-menu {
        display: unset;
      }

      .hidden {
        display: none;
      }

      .nav-items > a {
        width: 100%;
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();

    this._handleResize();

    window.addEventListener('resize', this._handleResize);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this._handleResize);
  }

  _handleResize = () => {
    const { matches: isDesktop } = window.matchMedia('(min-width: 1200px)');

    this.height = isDesktop ? 65 : window.innerHeight - 65;
  };

  handleClick = () => {
    this.isVisible = !this.isVisible;
  };

  render() {
    return html`
      <nav>
        <span class="nav-logo">Bakery</span>
        <div class="nav-content">
          <div
            class="nav-items ${this.isVisible ? '' : 'hidden'}"
            style="min-height: ${this.height}px;"
          >
            <a href="/" @click=${this.handleClick}>Home</a>
            <a href="/products" @click=${this.handleClick}>Products</a>
            <a href="/about" @click=${this.handleClick}>About</a>
            <a href="/contact" @click=${this.handleClick}>Contact</a>
          </div>
          <button
            class="hamburger-menu ${this.isVisible ? 'visible' : ''}"
            @click=${this.handleClick}
          >
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </button>
        </div>
      </nav>
    `;
  }
}

customElements.define('app-navigation', AppNavigation);
