const css = String.raw;
const tCHeaderStyle = new CSSStyleSheet();

tCHeaderStyle.replaceSync(css`
    :host {
        margin-bottom: 20vh;

        header {
            display: flex;
            justify-content: space-between;

            .logo {
                --sky-gradient: linear-gradient(
                    -160deg in oklch,
                    var(--sky-gradient-color-a),
                    var(--sky-gradient-color-b)
                );

                --top-offset: 23%;
                --left-offset: 10%;

                position: relative;
                translate: -1.6rem -1.6rem;

                &::before {
                    content: '';
                    z-index: -1;
                    position: absolute;
                    top: var(--top-offset);
                    left: var(--left-offset);
                    height: 50%;
                    aspect-ratio: 1/1;
                    background: var(--sky-gradient);
                    border-radius: 50%;
                    filter: blur(0.2rem);
                    opacity: 0.1;
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
                    opacity: 0.8;
                    animation: breathe 10s ease infinite;
                    animation-delay: -5s;
                }
            }
        }
    }

    @keyframes breathe {
        0% {
            scale: 1;
        }
        50% {
            scale: 1.3;
        }
        100% {
            scale: 1;
        }
    }
`);
export default tCHeaderStyle;
