const css = String.raw;
const tCHeaderStyle = new CSSStyleSheet();

tCHeaderStyle.replaceSync(css`
    :host {
        margin-bottom: 10rem;

        header {
            display: flex;
            justify-content: space-between;

            .logo {
                --sky-gradient: linear-gradient(
                    -160deg in oklch,
                    var(--sky-gradient-color-dark),
                    var(--sky-gradient-color-light)
                );

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
                    background: var(--sky-gradient);
                    border-radius: 50%;
                    filter: blur(0.5rem);
                    opacity: 0.07;
                    animation: breathe 10s ease infinite;
                }

                &::after {
                    content: '';
                    z-index: -1;
                    position: absolute;
                    top: var(--top-offset);
                    left: var(--left-offset);
                    height: 60%;
                    aspect-ratio: 1/1;
                    background: var(--sky-gradient);
                    border-radius: 50%;
                    filter: blur(2rem);
                    opacity: 0.9;
                    animation: breathe 10s ease infinite;
                    animation-delay: -4s;
                }
            }
        }
    }

    @keyframes breathe {
        0% {
            scale: 0.4;
            rotate: -90deg;
        }
        50% {
            scale: 1;
            rotate: 90deg;
        }
        100% {
            scale: 0.4;
            rotate: -90deg;
        }
    }
`);
export default tCHeaderStyle;
