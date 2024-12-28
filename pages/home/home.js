import { sharedStyle } from '/app.js';
import { fetchSVG } from '../../shared/fetch-svg.js';

import { tCHomeTemplate } from './home.template.js';
import tCHomeStyle from './home.style.js';

export class TCHome extends HTMLElement {
    constructor() {
        super();

        document.title = 'Home - Teodora Chiosa';

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [sharedStyle, tCHomeStyle];
        this.addDecorationStars();
        this.render();
    }

    get template() {
        return tCHomeTemplate;
    }

    render() {
        this.shadowRoot.innerHTML = `${this.template}`;
    }

    addDecorationStars() {
        const svgPath = 'assets/star.svg';
        fetchSVG(svgPath, (svgContent) => {
            this.shadowRoot
                .querySelectorAll('.decoration-star')
                .forEach((element) => {
                    element.innerHTML = svgContent;
                });
        });
    }
}

customElements.define('tc-home', TCHome);
