class ButtonHamburger extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get styles () {
    return `
      :host {
        display: block;
        width: 2rem;
        height: 2rem;
        background-color: #3B3A32;
        border-radius: 50%;
        position: relative;
      }

      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1.3rem;
        height: 2px;
        border-radius: 2px;
        background-color: Tomato;
        transition: all .5s ease-in-out;
      }

      span.primer { transform: translate(-50%, calc(-50% - 7px)); }

      span.cuarto { transform: translate(-50%, calc(-50% + 7px)); }
    `
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadowRoot.innerHTML = `
      <style>${ButtonHamburger.styles}</style>

      <span class="primer"></span>
      <span class="segundo"></span>
      <span class="tercero"></span>
      <span class="cuarto"></span>
    `
  }
}

customElements.define('button-hamburger', ButtonHamburger)
