import { sharedStyle } from '/app.js';
import { fetchSVG } from '../../shared/fetch-svg.js';

import { tCHeaderTemplate } from './header.template.js';
import tCHeaderStyle from './header.style.js';

export class TCHeader extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.render();
        this.loadLogo();
        this.shadowRoot.adoptedStyleSheets = [sharedStyle, tCHeaderStyle];
    }

    get template() {
        return tCHeaderTemplate;
    }

    render() {
        this.shadowRoot.innerHTML = `${this.template}`;
    }

    loadLogo() {
        const logoPath = 'assets/logo.svg';

        fetchSVG(logoPath, (svgContent) => {
            this.shadowRoot.querySelector('.logo').innerHTML = svgContent;
        });
    }
}

customElements.define('tc-header', TCHeader);

import { TCThemeSwitcher } from '../../shared/theme-switcher/theme-switcher.js';
