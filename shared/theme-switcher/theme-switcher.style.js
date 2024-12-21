const css = String.raw;
const tCThemeSwitcherStyle = new CSSStyleSheet();

tCThemeSwitcherStyle.replaceSync(css`
    button.theme-switcher {
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
        background-color: transparent;
        color: var(--body);
        font-size: 1rem;
        transition: all 0.2s ease;

        .icon {
            display: flex;
            transition: all 0.2s ease;
        }

        .text-wrapper {
            visibility: hidden;
            opacity: 0;
            position: absolute;
            top: 100%;
            left: 50%;
            translate: -50%;
            display: flex;
            width: max-content;
            padding-top: 1rem;
            transition: 0.2s ease;

            .text {
                user-select: text;
                color: var(--body);
                border-radius: 0.5rem;
                padding: 0.2rem 0.4rem;
                background-color: color-mix(
                    in hsl,
                    var(--background),
                    var(--body) 15%
                );
            }
        }

        &:hover,
        &:focus-visible {
            translate: -0.15rem -0.15rem;
            box-shadow: inset 0 0 0 0 var(--shadow),
                0 0 2rem color-mix(in hsl, var(--background), var(--body) 10%),
                0.05rem 0.05rem 0 0
                    color-mix(in hsl, var(--background), var(--body) 15%),
                0.1rem 0.1rem 0 0
                    color-mix(in hsl, var(--background), var(--body) 15%),
                0.15rem 0.15rem 0 0
                    color-mix(in hsl, var(--background), var(--body) 15%),
                0.2rem 0.2rem 0 0
                    color-mix(in hsl, var(--background), var(--body) 15%),
                0.25rem 0.25rem 0 0
                    color-mix(in hsl, var(--background), var(--body) 15%);

            .icon {
                scale: 1.1;
                rotate: 10deg;
            }

            .text-wrapper {
                opacity: 1;
                visibility: visible;
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
