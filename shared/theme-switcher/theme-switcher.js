import { tCThemeSwitcherTemplate } from './theme-switcher.template.js';
import { tCThemeSwitcherStyle } from './theme-switcher.style.js';

export class TCThemeSwitcher extends HTMLElement {
    isInitialLoad = false;

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.render();
    }

    connectedCallback() {
        this.isInitialLoad = true;
        this.attachClickEvent();
    }

    get template() {
        return tCThemeSwitcherTemplate;
    }

    get style() {
        return tCThemeSwitcherStyle;
    }

    render() {
        this.shadowRoot.innerHTML = `${this.style}${this.template}`;
    }

    attachClickEvent() {
        let themeSwitcherButton =
            this.shadowRoot.querySelector('.theme-switcher');

        if (themeSwitcherButton) {
            themeSwitcherButton.addEventListener(
                'click',
                this.toggleTheme.bind(this)
            );
        }
    }

    toggleTheme() {
        if (
            this.getCurrentThemeDataAttribute() == 'dark' ||
            (this.isInitialLoad &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }

        this.isInitialLoad = false;
    }

    getCurrentThemeDataAttribute() {
        return document.documentElement.getAttribute('data-theme');
    }
}

customElements.define('tc-theme-switcher', TCThemeSwitcher);
