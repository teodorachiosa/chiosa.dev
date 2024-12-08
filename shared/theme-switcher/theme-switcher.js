import { sharedStyle } from '/app.js';

import { tCThemeSwitcherTemplate } from './theme-switcher.template.js';
import tCThemeSwitcherStyle from './theme-switcher.style.js';

export class TCThemeSwitcher extends HTMLElement {
    isInitialLoad = false;
    currentTheme;
    themeSwitcherButton;

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [
            sharedStyle,
            tCThemeSwitcherStyle,
        ];
        this.render();
    }

    connectedCallback() {
        this.isInitialLoad = true;
        this.themeSwitcherButton =
            this.shadowRoot.querySelector('.theme-switcher');
        this.setThemeCookie(this.getThemeCookie());
        this.updateButton();
        this.attachClickEvent();
    }

    get template() {
        return tCThemeSwitcherTemplate;
    }

    render() {
        this.shadowRoot.innerHTML = `${this.template}`;
    }

    updateButton() {
        this.currentTheme = this.getCurrentThemeDataAttribute()
            ? this.getCurrentThemeDataAttribute()
            : window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
        console.log(this.currentTheme);

        const svgPath =
            this.currentTheme == 'light'
                ? 'assets/popicons-moon.svg'
                : 'assets/popicons-sun.svg';

        fetch(svgPath)
            .then((response) => response.text())
            .then((svgContent) => {
                this.themeSwitcherButton.innerHTML = svgContent;
            });

        this.updateButtonProperties();
    }

    updateButtonProperties() {
        this.themeSwitcherButton.setAttribute(
            'aria-label',
            `Toggle ${this.currentTheme === 'light' ? 'dark' : 'light'} mode`
        );
    }

    attachClickEvent() {
        if (this.themeSwitcherButton) {
            this.themeSwitcherButton.addEventListener(
                'click',
                this.toggleTheme.bind(this)
            );
        }
    }

    toggleTheme() {
        let currentTheme = this.getCurrentThemeDataAttribute();
        if (currentTheme) {
            this.setThemeCookie(this.getOppositeTheme(currentTheme));
            this.updateButton();
            return;
        }

        if (this.isInitialLoad) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                this.setThemeCookie('light');
                this.updateButton();
            } else {
                this.setThemeCookie('dark');
                this.updateButton();
            }
        }

        this.isInitialLoad = false;
    }

    getCurrentThemeDataAttribute() {
        return document.documentElement.getAttribute('data-theme');
    }

    setThemeCookie(theme) {
        if (theme !== null) {
            const days = 7;
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            const expires = 'expires=' + date.toUTCString();
            document.cookie = 'tc-theme=' + theme + ';' + expires + ';path=/';
            document.documentElement.setAttribute('data-theme', theme);
        }
    }

    getThemeCookie() {
        const name = 'tc-theme=';
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookies = decodedCookie.split(';');

        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.indexOf(name) === 0) {
                return cookie.substring(name.length, cookie.length);
            }
        }

        return null;
    }

    getOppositeTheme(theme) {
        return theme === 'light' ? 'dark' : 'light';
    }
}

customElements.define('tc-theme-switcher', TCThemeSwitcher);
