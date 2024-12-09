const css = String.raw;
const tCThemeSwitcherStyle = new CSSStyleSheet();

tCThemeSwitcherStyle.replaceSync(css`
    .theme-switcher {
        --size: 3rem;

        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: var(--size);
        height: var(--size);
        border: 0.2rem solid
            color-mix(in hsl, var(--background), var(--body) 25%);
        border-radius: 0.7rem;
        background: transparent;
        color: var(--body);

        &::after {
            opacity: 0;
            content: '' attr(aria-label) '';
            position: absolute;
            bottom: calc(100% + 0.5rem);
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
            translate: -0.1rem -0.1rem;
            box-shadow: 0.15rem 0.15rem 0 0.1rem
                color-mix(in hsl, var(--background), var(--body) 15%);

            &::after {
                opacity: 1;
            }
        }

        &:active {
            translate: 0rem 0rem;
            box-shadow: inset 0.15rem 0.15rem 0 0.1rem var(--shadow);
            background: color-mix(in hsl, var(--background), var(--body) 15%);
        }

        svg {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`);
export default tCThemeSwitcherStyle;
