const css = String.raw;
const tCThemeSwitcherStyle = new CSSStyleSheet();

tCThemeSwitcherStyle.replaceSync(css`
    .theme-switcher {
        --size: 44px;

        position: relative;
        width: var(--size);
        height: var(--size);
        border: 0;
        background: transparent;
        color: var(--body);

        &::after {
            display: block;
            content: '' attr(aria-label) '';
            position: absolute;
            color: var(--body);
            background: var(--background);
        }
    }
`);
export default tCThemeSwitcherStyle;
