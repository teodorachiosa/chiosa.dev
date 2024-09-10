import { tCFooterTemplate } from './footer.template.js';
import { tCFooterStyle } from './footer.style.js';

export class TCFooter extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.render();
    }

    get template() {
        return tCFooterStyle;
    }

    get style() {
        return tCFooterTemplate;
    }

    render() {
        this.shadowRoot.innerHTML = `${this.style}${this.template}`;
    }
}

customElements.define('tc-footer', TCFooter);
