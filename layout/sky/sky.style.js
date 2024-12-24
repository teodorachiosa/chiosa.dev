const css = String.raw;
const tCSkyStyle = new CSSStyleSheet();

tCSkyStyle.replaceSync(css`
    :host {
        --sky-gradient: linear-gradient(
            -160deg in oklch,
            var(--sky-gradient-color-dark),
            var(--sky-gradient-color-light)
        );

        display: block;
        width: 30rem;
        background-image: var(--sky-gradient);
        transition-duration: 0.2s;
        transition-timing-function: ease;
        transition-property: --sky-gradient-color-dark,
            --sky-gradient-color-light;
    }
`);
export default tCSkyStyle;
