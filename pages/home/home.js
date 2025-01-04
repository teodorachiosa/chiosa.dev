import { sharedStyle } from '/app.js';
import { fetchSVG } from '../../shared/fetch-svg.js';

import { tCHomeTemplate } from './home.template.js';
import tCHomeStyle from './home.style.js';

export class TCHome extends HTMLElement {
    constructor() {
        super();

        document.title = 'Home - Teodora Chiosa';

        this.attachShadow({ mode: 'open' });
        this.render();
        this.shadowRoot.adoptedStyleSheets = [sharedStyle, tCHomeStyle];
    }

    get template() {
        return tCHomeTemplate;
    }

    render() {
        this.shadowRoot.innerHTML = `${this.template}`;
    }
}

customElements.define('tc-home', TCHome);
