const css = String.raw;
const tCHeaderStyle = new CSSStyleSheet();

tCHeaderStyle.replaceSync(css`
    :host {
        margin-bottom: 25vh;

        header {
            display: flex;
            justify-content: space-between;

            .logo {
                display: flex;
                flex-direction: column;
                line-height: 1;

                .top-line {
                    text-transform: lowercase;
                    font-family: 'Philosopher', sans-serif;
                    font-size: 2rem;
                    letter-spacing: 0.04rem;
                }

                .bottom-line {
                    text-transform: uppercase;
                    font-size: 1rem;
                    letter-spacing: 0.3em;
                }
            }
        }
    }
`);
export default tCHeaderStyle;
