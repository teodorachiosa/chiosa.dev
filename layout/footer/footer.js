import { sharedStyle } from '/app.js';

import { tCFooterTemplate } from './footer.template.js';
import tCFooterStyle from './footer.style.js';

export class TCFooter extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [sharedStyle, tCFooterStyle];
        this.render();
    }

    get template() {
        return tCFooterTemplate;
    }

    render() {
        this.shadowRoot.innerHTML = `${this.template}`;
    }
}

customElements.define('tc-footer', TCFooter);
