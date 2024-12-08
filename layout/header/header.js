import { sharedStyle } from '/app.js';

import { tCHeaderTemplate } from './header.template.js';
import tCHeaderStyle from './header.style.js';

export class TCHeader extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [sharedStyle, tCHeaderStyle];
        this.render();
    }

    get template() {
        return tCHeaderTemplate;
    }

    render() {
        this.shadowRoot.innerHTML = `${this.template}`;
    }
}

customElements.define('tc-header', TCHeader);

import { TCThemeSwitcher } from '../../shared/theme-switcher/theme-switcher.js';
