class FloatOption extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get styles () {
    return `
      :host {
        display: flex;
        column-gap: 2rem;
        overflow-x: auto;
        scroll-snap-type: x;
        width: 80%;
        margin: auto;
      }
    `
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadowRoot.innerHTML = `
      <style>${FloatOption.styles}</style>

      <li><a href="#">More</a></li>
      <li ><a href="#">Tools</a></li>
      <li ><a href="#">Other</a></li>
    `
  }
}

customElements.define('float-option', FloatOption)
