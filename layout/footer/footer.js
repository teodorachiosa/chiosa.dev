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

        this.getSVGIcons();
    }

    getSVGIcons() {
        const svgPaths = [
            'assets/linkedin.svg',
            'assets/codepen.svg',
            'assets/cara.svg',
            'assets/popicons-at-symbol.svg',
        ];

        svgPaths.forEach((svgPath, index) => {
            fetch(svgPath)
                .then((response) => response.text())
                .then((svgContent) => {
                    this.shadowRoot.querySelectorAll('ul li .link .icon')[
                        index
                    ].innerHTML = svgContent;
                });
        });
    }
}

customElements.define('tc-footer', TCFooter);
