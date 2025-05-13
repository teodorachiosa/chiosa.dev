import { sharedStyle } from '/app.js';
import { fetchSVG } from '../../shared/fetch-svg.js';

import { tCFooterTemplate } from './footer.template.js';
import tCFooterStyle from './footer.style.js';

export class TCFooter extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.render();
        this.shadowRoot.adoptedStyleSheets = [sharedStyle, tCFooterStyle];
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
            'assets/blog.svg',
            'assets/linkedin.svg',
            'assets/bsky.svg',
            'assets/codepen.svg',
            'assets/cara.svg',
            'assets/at-symbol.svg',
        ];

        svgPaths.forEach((svgPath, index) => {
            fetchSVG(svgPath, (svgContent) => {
                this.shadowRoot.querySelectorAll('ul li .link .icon')[
                    index
                ].innerHTML = svgContent;
            });
        });
    }
}

customElements.define('tc-footer', TCFooter);
