import { sharedStyle } from '/app.js';

import { tCThemeSwitcherTemplate } from './theme-switcher.template.js';
import tCThemeSwitcherStyle from './theme-switcher.style.js';

export class TCThemeSwitcher extends HTMLElement {
    isInitialLoadWithoutCookie = false;
    hasThemeButtonInteraction = false;
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
        this.isInitialLoadWithoutCookie = true;
        this.themeSwitcherButton =
            this.shadowRoot.querySelector('.theme-switcher');
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

        const svgPath =
            this.currentTheme == 'light' ? 'assets/sun.svg' : 'assets/moon.svg';

        fetch(svgPath)
            .then((response) => response.text())
            .then((svgContent) => {
                this.themeSwitcherButton.querySelector('.icon').innerHTML =
                    svgContent;
            });

        this.updateButtonProperties();
    }

    updateButtonProperties() {
        this.themeSwitcherButton.querySelector('.text').innerHTML = `${
            this.currentTheme === 'light' ? 'Light' : 'Dark'
        }`;

        this.themeSwitcherButton.querySelector(
            '.label'
        ).innerHTML = `Activate ${
            this.currentTheme === 'light' ? 'dark' : 'light'
        } mode`;

        if (this.hasThemeButtonInteraction) {
            console.log(this.hasThemeButtonInteraction);

            this.shadowRoot.querySelector('.status').innerHTML = `${
                this.currentTheme === 'light' ? 'Light' : 'Dark'
            } mode activated`;
        }
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
        this.hasThemeButtonInteraction = true;

        let currentTheme = this.getCurrentThemeDataAttribute();
        if (currentTheme) {
            this.setThemeCookie(this.getOppositeTheme(currentTheme));
            this.updateButton();
            return;
        }

        if (this.isInitialLoadWithoutCookie) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                this.setThemeCookie('light');
                this.updateButton();
            } else {
                this.setThemeCookie('dark');
                this.updateButton();
            }
        }

        this.isInitialLoadWithoutCookie = false;
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

    getOppositeTheme(theme) {
        return theme === 'light' ? 'dark' : 'light';
    }
}

customElements.define('tc-theme-switcher', TCThemeSwitcher);
