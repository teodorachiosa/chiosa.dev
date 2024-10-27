import { tCThemeSwitcherTemplate } from './theme-switcher.template.js';
import { tCThemeSwitcherStyle } from './theme-switcher.style.js';

export class TCThemeSwitcher extends HTMLElement {
    isInitialLoad = false;
    // WORK IN PROGRESS !!!
    currentTheme;

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.render();
    }

    connectedCallback() {
        this.isInitialLoad = true;
        this.setThemeCookie(this.getThemeCookie());
        this.updateButtonUI();
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

    updateButtonUI() {
        const button = this.getThemeSwitcherButton();

        this.currentTheme =
            this.getCurrentThemeDataAttribute ??
            window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';
        console.log(button);

        button.innerHTML = 'Current theme:' + this.currentTheme;
    }

    attachClickEvent() {
        let themeSwitcherButton = this.getThemeSwitcherButton();
        if (themeSwitcherButton) {
            themeSwitcherButton.addEventListener(
                'click',
                this.toggleTheme.bind(this)
            );
        }
    }

    toggleTheme() {
        let currentTheme = this.getCurrentThemeDataAttribute();
        if (currentTheme) {
            this.setThemeCookie(this.getOppositeTheme(currentTheme));
            this.updateButtonUI();
            return;
        }

        if (this.isInitialLoad) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                this.setThemeCookie('light');
            } else {
                this.setThemeCookie('dark');
            }
        }

        this.isInitialLoad = false;
        this.updateButtonUI();
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

    getThemeSwitcherButton() {
        return this.shadowRoot.querySelector('.theme-switcher');
    }
}

customElements.define('tc-theme-switcher', TCThemeSwitcher);
