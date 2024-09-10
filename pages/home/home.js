import { tCHomeTemplate } from './home.template.js';
import { tCHomeStyle } from './home.style.js';

export class TCHome extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.render();
    }

    get template() {
        return tCHomeStyle;
    }

    get style() {
        return tCHomeTemplate;
    }

    render() {
        this.shadowRoot.innerHTML = `${this.style}${this.template}`;
    }
}

customElements.define('tc-home', TCHome);
