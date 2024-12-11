const css = String.raw;
const tCFooterStyle = new CSSStyleSheet();

tCFooterStyle.replaceSync(css`
    ul {
        display: flex;
        gap: 40px;
        padding: 0;
        list-style: none;

        li {
            a {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 12px;
                color: var(--body);
                transition: all 0.3s ease-in-out;
                border-radius: 50%;

                svg {
                    width: 24px;
                    height: 24px;
                }

                &::after {
                    content: '';
                    position: absolute;
                    z-index: -1;
                    top: 2px;
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

                &:hover,
                &:focus-visible {
                    scale: 1.15;
                    box-shadow: inset 0 1px 1px
                        color-mix(in hsl, var(--background), var(--body) 15%);

                    &::after {
                        opacity: 0.7;
                        filter: blur(5px);
                    }
                }
            }
        }
    }
`);
export default tCFooterStyle;
