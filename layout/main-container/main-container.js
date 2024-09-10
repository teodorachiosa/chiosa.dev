import { tCMainContainerTemplate } from './main-container.template.js';
import { tCMainContainerStyle } from './main-container.style.js';

export class TCMainContainer extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.render();
    }

    get template() {
        return tCMainContainerStyle;
    }

    get style() {
        return tCMainContainerTemplate;
    }

    render() {
        this.shadowRoot.innerHTML = `${this.style}${this.template}`;
    }
}

customElements.define('tc-main-container', TCMainContainer);
