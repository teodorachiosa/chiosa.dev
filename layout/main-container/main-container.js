import { sharedStyle } from '/app.js';

import { tCMainContainerTemplate } from './main-container.template.js';
import tCMainContainerStyle from './main-container.style.js';

export class TCMainContainer extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [
            sharedStyle,
            tCMainContainerStyle,
        ];
        this.render();
    }

    get template() {
        return tCMainContainerTemplate;
    }

    render() {
        this.shadowRoot.innerHTML = `${this.template}`;
    }
}

customElements.define('tc-main-container', TCMainContainer);

import { TCHeader } from '../header/header.js';
import { TCFooter } from '../footer/footer.js';
