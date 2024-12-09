const css = String.raw;
const tCThemeSwitcherStyle = new CSSStyleSheet();

tCThemeSwitcherStyle.replaceSync(css`
    .theme-switcher {
        --size: 2.2rem;

        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: var(--size);
        height: var(--size);
        border: 0.15rem solid
            color-mix(in hsl, var(--background), var(--body) 25%);
        border-radius: 0.5rem;
        background: transparent;
        color: var(--body);

        &::after {
            opacity: 0;
            content: '' attr(aria-label) '';
            position: absolute;
            top: calc(100% + 0.4rem);
            left: 50%;
            translate: -50%;
            width: max-content;
            background: color-mix(in hsl, var(--background), var(--body) 15%);
            padding: 0.2rem 0.4rem;
            color: var(--body);
            border-radius: 0.5rem;
            transition: opacity 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }

        &:hover,
        &:focus-visible {
            translate: -0.05rem -0.05rem;
            box-shadow: 0.1rem 0.1rem 0 0.05rem
                color-mix(in hsl, var(--background), var(--body) 15%);

            &::after {
                opacity: 1;
            }
        }

        &:active {
            translate: 0.05rem 0.05rem;
            box-shadow: none;
            background: color-mix(in hsl, var(--background), var(--body) 15%);
        }

        svg {
            width: 1rem;
            height: 1rem;
        }
    }
`);
export default tCThemeSwitcherStyle;
