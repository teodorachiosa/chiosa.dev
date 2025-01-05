const css = String.raw;
const tCHeaderStyle = new CSSStyleSheet();

tCHeaderStyle.replaceSync(css`
    :host {
        margin-bottom: 8rem;

        header {
            display: flex;
            justify-content: space-between;

            .logo {
                --top-offset: 18%;
                --left-offset: 8%;

                position: relative;
                margin-top: -1.6rem;
                margin-left: -1.6rem;

                &::before {
                    content: '';
                    z-index: -1;
                    position: absolute;
                    top: var(--top-offset);
                    left: var(--left-offset);
                    height: 60%;
                    aspect-ratio: 1/1;
                    background: var(--sky-gradient-color-light);
                    border-radius: 50%;
                    filter: blur(0.5rem);
                    opacity: 0.05;
                }

                &::after {
                    content: '';
                    z-index: -1;
                    position: absolute;
                    top: var(--top-offset);
                    left: var(--left-offset);
                    height: 60%;
                    aspect-ratio: 1/1;
                    background: var(--sky-gradient-color-light);
                    border-radius: 50%;
                    filter: blur(2rem);
                    opacity: 0.3;
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
