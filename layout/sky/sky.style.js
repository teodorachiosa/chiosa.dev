const css = String.raw;
const tCSkyStyle = new CSSStyleSheet();

tCSkyStyle.replaceSync(css`
    :host {
        flex-shrink: 0;
        width: 30%;
        display: block;

        .sky-container {
            width: 100%;
            height: 100%;
            transition-duration: var(--medium-animation);
            transition-timing-function: ease;
            transition-property: --sky-gradient-color-dark,
                --sky-gradient-color-medium, --sky-gradient-color-light;
        }
    }
`);
export default tCSkyStyle;
