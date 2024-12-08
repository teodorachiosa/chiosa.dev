import { sharedStyle } from '/app.js';

import { tCSkyTemplate } from './sky.template.js';
import tCSkyStyle from './sky.style.js';

export class TCSky extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [sharedStyle, tCSkyStyle];
        this.render();
    }

    get template() {
        return tCSkyTemplate;
    }

    render() {
        this.shadowRoot.innerHTML = `${this.template}`;
    }
}

customElements.define('tc-sky', TCSky);
