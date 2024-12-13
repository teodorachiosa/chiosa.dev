const css = String.raw;
const tCFooterStyle = new CSSStyleSheet();

tCFooterStyle.replaceSync(css`
    ul {
        display: flex;
        gap: 40px;
        padding: 0;
        list-style: none;

        li {
            a.link {
                outline: none;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--body);
                font-size: 1em;
                border-radius: 50%;
                transition: all 0.3s ease-in-out;

                svg {
                    box-sizing: content-box;
                    padding: 10px;
                    width: 24px;
                    height: 24px;
                    border-radius: 0.7rem;
                }

                &::before {
                    content: '';
                    position: absolute;
                    z-index: -1;
                    top: 10px;
                    right: 2px;
                    bottom: 2px;
                    left: 2px;
                    background: linear-gradient(
                        color-mix(in hsl, var(--background), var(--body) 15%),
                        transparent
                    );
                    border-radius: 50%;
                    opacity: 0;
                    transition: all 0.3s ease-in-out;
                }

                &::after {
                    opacity: 0;
                    content: '' attr(aria-label) '';
                    position: absolute;
                    bottom: calc(100% + 0.3rem);
                    left: 50%;
                    translate: -50%;
                    width: max-content;
                    background-color: color-mix(
                        in hsl,
                        var(--background),
                        var(--body) 15%
                    );
                    padding: 0.2rem 0.4rem;
                    color: var(--body);
                    border-radius: 0.5rem;
                    transition: all 0.3s ease;
                }

                &:focus-visible {
                    svg {
                        outline: auto;
                    }
                }

                &:hover,
                &:focus-visible {
                    scale: 1.15;

                    &::before {
                        opacity: 0.7;
                        filter: blur(5px);
                    }

                    &::after {
                        opacity: 1;
                    }
                }
            }
        }
    }
`);
export default tCFooterStyle;
