import { tCHomeTemplate } from './home.template.js';
import { tCHomeStyle } from './home.style.js';

export class TCHome extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.render();
    }

    get template() {
        return tCHomeTemplate;
    }

    get style() {
        return tCHomeStyle;
    }

    render() {
        this.shadowRoot.innerHTML = `${this.style}${this.template}`;
    }
}

customElements.define('tc-home', TCHome);
