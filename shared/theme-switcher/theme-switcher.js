import { sharedStyle } from '/app.js';
import { fetchSVG } from '../../shared/fetch-svg.js';

import { tCThemeSwitcherTemplate } from './theme-switcher.template.js';
import tCThemeSwitcherStyle from './theme-switcher.style.js';

export class TCThemeSwitcher extends HTMLElement {
    hasThemeButtonInteraction = false;
    currentTheme;
    themeSwitcherButton;

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.render();
        this.shadowRoot.adoptedStyleSheets = [
            sharedStyle,
            tCThemeSwitcherStyle,
        ];
    }

    connectedCallback() {
        this.themeSwitcherButton =
            this.shadowRoot.querySelector('.theme-switcher');
        this.updateButton();
        this.watchForColorSchemeMediaChanges();
        this.attachClickEvent();
    }

    get template() {
        return tCThemeSwitcherTemplate;
    }

    render() {
        this.shadowRoot.innerHTML = `${this.template}`;
    }

    updateButton() {
        this.currentTheme = this.getCurrentColorScheme();

        let svgPath;
        switch (this.currentTheme) {
            case 'light':
                svgPath = 'assets/moon.svg';
                break;
            case 'dark':
                svgPath = 'assets/sun.svg';
                break;
            default:
                svgPath = this.getPrefersDarkMedia().matches
                    ? 'assets/sun.svg'
                    : 'assets/moon.svg';
        }

        fetchSVG(svgPath, (svgContent) => {
            this.themeSwitcherButton.querySelector('.icon').innerHTML =
                svgContent;
        });

        this.updateButtonProperties();
    }

    updateButtonProperties() {
        let tcSkyElement = document.querySelector('tc-sky');
        let illustrationDescriptionElement = tcSkyElement.shadowRoot.querySelector(
            '#illustration-description'
        );

        const originalDescription =
            'Animated illustration of a cloudy sky';
        const darkModeDescription = `${originalDescription} featuring shades of blue, indigo and purple. The moon is shining and the stars are twinkling.`;
        const lightModeDescription = `${originalDescription} featuring the colors of the sunset: orange, pink and blue.`;

        switch (this.currentTheme) {
            case 'light':
                this.themeSwitcherButton.querySelector('.text').innerText =
                    'Dark mode';
                if (this.hasThemeButtonInteraction) {
                    this.shadowRoot.querySelector('.status').innerText =
                        'Light mode activated';
                }
                illustrationDescriptionElement.innerText = lightModeDescription;
                break;
            case 'dark':
                this.themeSwitcherButton.querySelector('.text').innerText =
                    'Light mode';
                if (this.hasThemeButtonInteraction) {
                    this.shadowRoot.querySelector('.status').innerText =
                        'Dark mode activated';
                }
                illustrationDescriptionElement.innerText = darkModeDescription;
                break;
            default:
                this.themeSwitcherButton.querySelector('.text').innerText =
                    this.getPrefersDarkMedia().matches
                        ? 'Light mode'
                        : 'Dark mode';
                if (this.hasThemeButtonInteraction) {
                    this.shadowRoot.querySelector('.status').innerText = `${
                        this.getPrefersDarkMedia().matches ? 'Dark' : 'Light'
                    } mode activated`;
                }
                illustrationDescriptionElement.innerText =
                    this.getPrefersDarkMedia().matches
                        ? lightModeDescription
                        : darkModeDescription;
        }

        setTimeout(() => {
            this.shadowRoot.querySelector('.status').innerText = '';
        }, 350);
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

        let currentColorScheme = this.getCurrentColorScheme();

        switch (currentColorScheme) {
            case 'light':
                document
                    .querySelector(':root')
                    .style.setProperty('color-scheme', 'dark');
                this.setThemeCookie('dark');
                break;
            case 'dark':
                document
                    .querySelector(':root')
                    .style.setProperty('color-scheme', 'light');
                this.setThemeCookie('light');
                break;
            default:
                document
                    .querySelector(':root')
                    .style.setProperty(
                        'color-scheme',
                        this.getPrefersDarkMedia().matches ? 'light' : 'dark'
                    );
                this.setThemeCookie(
                    this.getPrefersDarkMedia().matches ? 'light' : 'dark'
                );
        }

        this.updateButton();
    }

    getCurrentColorScheme() {
        return getComputedStyle(document.querySelector(':root'))
            .getPropertyValue('color-scheme')
            .trim();
    }

    getPrefersDarkMedia() {
        return window.matchMedia('(prefers-color-scheme: dark)');
    }

    watchForColorSchemeMediaChanges() {
        this.getPrefersDarkMedia().addEventListener('change', () => {
            this.updateButton();
        });
    }

    setThemeCookie(theme) {
        if (theme !== null) {
            const days = 7;
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            const expires = 'expires=' + date.toUTCString();
            document.cookie = 'tc-theme=' + theme + ';' + expires + ';path=/';
        }
    }
}

customElements.define('tc-theme-switcher', TCThemeSwitcher);
