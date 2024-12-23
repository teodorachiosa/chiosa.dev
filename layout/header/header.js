import { sharedStyle } from '/app.js';

import { tCHeaderTemplate } from './header.template.js';
import tCHeaderStyle from './header.style.js';

export class TCHeader extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [sharedStyle, tCHeaderStyle];

        this.loadLogo();
        this.render();
    }

    get template() {
        return tCHeaderTemplate;
    }

    render() {
        this.shadowRoot.innerHTML = `${this.template}`;
    }

    loadLogo() {
        const logoPath = 'assets/logo.svg';

        fetch(logoPath)
            .then((response) => response.text())
            .then((logoContent) => {
                this.shadowRoot.querySelector('.logo').innerHTML = logoContent;
                this.shadowRoot
                    .querySelector('.logo svg')
                    .setAttribute('aria-label', 'Teodora Chiosa logo');
            });
    }
}

customElements.define('tc-header', TCHeader);

import { TCThemeSwitcher } from '../../shared/theme-switcher/theme-switcher.js';
