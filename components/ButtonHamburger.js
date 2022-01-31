import './FloatOption.js'

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

      span.segundo-mod, span.tercer-mod {
        background-color: Red;
        width: 1.6rem;
        height: 3px;
      }

      span.primer-mod {
        transform: translate(-50%, calc(-50% - 14px));
        width: 1rem;
        background-color: transparent;
      }

      span.cuarto-mod {
        transform: translate(-50%, calc(-50% + 14px));
        width: .5rem;
        background-color: transparent;
      }

      span.segundo-mod { transform: translate(-50%, -50%) rotate(45deg); }

      span.tercer-mod { transform: translate(-50%, -50%) rotate(-45deg); }
    `
  }

  connectedCallback () {
    this.state = false
    this.render()
    this.addEventListener('click', () => this.infoStatus(this.state))
  }

  infoStatus (state) {
    if (state === false) {
      this.state = true
      this.shadowRoot.children[1].classList.add('primer-mod')
      this.shadowRoot.children[2].classList.add('segundo-mod')
      this.shadowRoot.children[3].classList.add('tercer-mod')
      this.shadowRoot.children[4].classList.add('cuarto-mod')
    } else {
      this.state = false
      this.shadowRoot.children[1].classList.remove('primer-mod')
      this.shadowRoot.children[2].classList.remove('segundo-mod')
      this.shadowRoot.children[3].classList.remove('tercer-mod')
      this.shadowRoot.children[4].classList.remove('cuarto-mod')
    }

    const newEvent = new CustomEvent('isOpen', { detail: this.state, composed: true, bubbles: true })
    this.dispatchEvent(newEvent)
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
