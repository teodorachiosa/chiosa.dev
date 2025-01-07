const css = String.raw;
const tCHeaderStyle = new CSSStyleSheet();

tCHeaderStyle.replaceSync(css`
    :host {
        margin-bottom: 8rem;

        header {
            display: flex;
            justify-content: space-between;

            .logo {
                position: relative;
                --offset: -0.4rem;

                &::before {
                    content: '';
                    z-index: -1;
                    position: absolute;
                    top: var(--offset);
                    left: var(--offset);
                    height: 60%;
                    aspect-ratio: 1/1;
                    background: var(--sky-gradient-color-light);
                    border-radius: 50%;
                    filter: blur(0.5rem);
                    opacity: 0.15;
                }

                &::after {
                    content: '';
                    z-index: -1;
                    position: absolute;
                    top: var(--offset);
                    left: var(--offset);
                    height: 60%;
                    aspect-ratio: 1/1;
                    background: var(--sky-gradient-color-light);
                    border-radius: 50%;
                    filter: blur(2rem);
                    opacity: 0.6;
                }

                svg * {
                    transition: ease var(--medium-animation-duration);
                    transition-property: fill, stroke;
                }
            }
        }
    }
`);
export default tCHeaderStyle;
