import { sharedStyle } from '/app.js';

import { tCSkyTemplate } from './sky.template.js';
import tCSkyStyle from './sky.style.js';

export class TCSky extends HTMLElement {
    animationToggleButton;
    skyContainer;
    animationDisabledClassName = 'animation-disabled';

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.render();
        this.shadowRoot.adoptedStyleSheets = [sharedStyle, tCSkyStyle];
    }

    connectedCallback() {
        this.animationToggleButton =
            this.shadowRoot.querySelector('.animation-toggle');
        this.skyContainer = this.shadowRoot.querySelector('.sky-container');
        this.updateToggleAnimationButton();
        this.attachClickEvent();
    }

    get template() {
        return tCSkyTemplate;
    }

    render() {
        this.shadowRoot.innerHTML = `${this.template}`;
    }

    attachClickEvent() {
        if (this.animationToggleButton) {
            this.animationToggleButton.addEventListener(
                'click',
                this.toggleAnimation.bind(this)
            );
        }
    }

    toggleAnimation() {
        this.skyContainer.classList.toggle(this.animationDisabledClassName);
        this.updateToggleAnimationButton();
    }

    updateToggleAnimationButton() {
        const buttonText = this.skyContainer.classList.contains(
            this.animationDisabledClassName
        )
            ? 'Enable animation'
            : 'Disable animation';
        this.animationToggleButton.textContent = buttonText;
    }
}

customElements.define('tc-sky', TCSky);
