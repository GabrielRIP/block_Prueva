class FloatOption extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get styles () {
    return `
      :host {
        display: flex;
        height: 100%;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
      }

      li {
        border: 1px solid #9C9D9D;
        font-weight: 700;
        width: 150px;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: White;
        list-style: none;
        cursor: pointer;
      }

      li:hover { background-color: DarkCyan; }

      a {
        color: White;
        text-decoration: none;
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
      <li><a href="#">Tools</a></li>
      <li><a href="#">Other</a></li>
    `
  }
}

customElements.define('float-option', FloatOption)
