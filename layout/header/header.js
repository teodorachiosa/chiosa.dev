import { tCHeaderTemplate } from './header.template.js';
import { tCHeaderStyle } from './header.style.js';

export class TCHeader extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.render();
    }

    get template() {
        return tCHeaderStyle;
    }

    get style() {
        return tCHeaderTemplate;
    }

    render() {
        this.shadowRoot.innerHTML = `${this.style}${this.template}`;
    }
}

customElements.define('tc-header', TCHeader);
