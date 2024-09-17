import { tCHeaderTemplate } from './header.template.js';
import { tCHeaderStyle } from './header.style.js';

export class TCHeader extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.render();
    }

    get template() {
        return tCHeaderTemplate;
    }

    get style() {
        return tCHeaderStyle;
    }

    render() {
        this.shadowRoot.innerHTML = `${this.style}${this.template}`;
    }
}

customElements.define('tc-header', TCHeader);

import { TCThemeSwitcher } from '../../shared/theme-switcher/theme-switcher.js';
