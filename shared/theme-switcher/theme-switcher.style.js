const css = String.raw;
const tCThemeSwitcherStyle = new CSSStyleSheet();

tCThemeSwitcherStyle.replaceSync(css`
    .theme-switcher {
        --size: 44px;

        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: var(--size);
        height: var(--size);
        border: 3px solid color-mix(in hsl, var(--background), var(--body) 25%);
        border-radius: 4px;
        background: transparent;
        color: var(--body);

        &::after {
            opacity: 0;
            content: '' attr(aria-label) '';
            position: absolute;
            top: calc(100% + 8px);
            left: 50%;
            translate: -50%;
            width: max-content;
            background: color-mix(in hsl, var(--background), var(--body) 15%);
            padding: 4px;
            color: var(--body);
            border-radius: 10px;
            transition: opacity 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
                display 0.2s ease-in-out allow-discrete;
        }

        &:hover,
        &:focus-visible {
            translate: -1px -1px;
            box-shadow: 2px 2px 0 1px
                color-mix(in hsl, var(--background), var(--body) 15%);

            &::after {
                opacity: 1;
            }
        }

        &:active {
            box-shadow: inset 2px 2px 0 1px
                color-mix(in hsl, var(--background), var(--body) 25%);
            background: color-mix(in hsl, var(--background), var(--body) 15%);
        }
    }
`);
export default tCThemeSwitcherStyle;
