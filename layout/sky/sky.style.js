const css = String.raw;
const tCSkyStyle = new CSSStyleSheet();

tCSkyStyle.replaceSync(css`
    :host {
        display: block;
        width: 400px;
        background: var(--sky-gradient);
        transition: 2s ease-in-out;
    }
`);
export default tCSkyStyle;
