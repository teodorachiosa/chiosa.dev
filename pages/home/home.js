import { sharedStyle } from '/app.js';

import { tCHomeTemplate } from './home.template.js';
import tCHomeStyle from './home.style.js';

export class TCHome extends HTMLElement {
    constructor() {
        super();

        document.title = 'Home - Teodora Chiosa';

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [sharedStyle, tCHomeStyle];
        this.render();
    }

    get template() {
        return tCHomeTemplate;
    }

    render() {
        this.shadowRoot.innerHTML = `${this.template}`;
    }
}

customElements.define('tc-home', TCHome);
