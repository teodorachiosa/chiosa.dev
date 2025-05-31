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

                svg * {
                    transition: ease var(--medium-animation-duration);
                    transition-property: fill, stroke;
                }
            }
        }
    }
`);
export default tCHeaderStyle;
