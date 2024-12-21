const css = String.raw;
const tCThemeSwitcherStyle = new CSSStyleSheet();

tCThemeSwitcherStyle.replaceSync(css`
    button.theme-switcher {
        --size: 3rem;

        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 0.6rem;
        height: var(--size);
        border: 0.2rem solid
            color-mix(in hsl, var(--background), var(--body) 30%);
        border-radius: 0.7rem;
        background-color: transparent;
        color: var(--body);
        font-size: 1rem;
        user-select: text;
        transition: all 0.2s ease;

        .icon {
            display: flex;
            transition: all 0.2s ease;
        }

        .text {
            margin-left: 0.3rem;
            display: flex;
            color: var(--body);
        }

        &:hover,
        &:focus-visible {
            translate: -0.15rem -0.15rem;
            box-shadow: inset 0 0 0 0 var(--shadow),
                0 0 2rem color-mix(in hsl, var(--background), var(--body) 10%),
                0.05rem 0.05rem 0 0
                    color-mix(in hsl, var(--background), var(--body) 20%),
                0.1rem 0.1rem 0 0
                    color-mix(in hsl, var(--background), var(--body) 20%),
                0.15rem 0.15rem 0 0
                    color-mix(in hsl, var(--background), var(--body) 20%),
                0.2rem 0.2rem 0 0
                    color-mix(in hsl, var(--background), var(--body) 20%),
                0.25rem 0.25rem 0 0
                    color-mix(in hsl, var(--background), var(--body) 20%);

            .icon {
                scale: 1.1;
                rotate: 10deg;
            }
        }

        &:active {
            translate: 0rem 0rem;
            box-shadow: inset 0.15rem 0.15rem 0 0.1rem var(--shadow),
                0 0 0 0 color-mix(in hsl, var(--background), var(--body) 15%);
            background-color: color-mix(
                in hsl,
                var(--background),
                var(--body) 15%
            );
        }

        svg {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`);
export default tCThemeSwitcherStyle;
