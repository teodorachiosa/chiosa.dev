const css = String.raw;
const tCSkyStyle = new CSSStyleSheet();

tCSkyStyle.replaceSync(css`
    :host {
        --sky-gradient: linear-gradient(
            -160deg in oklch,
            var(--sky-gradient-color-a),
            var(--sky-gradient-color-b)
        );

        display: block;
        width: 30rem;
        background-image: var(--sky-gradient);
        transition-duration: 0.2s;
        transition-timing-function: ease;
        transition-property: --sky-gradient-color-a, --sky-gradient-color-b;
    }
`);
export default tCSkyStyle;
