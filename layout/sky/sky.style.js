const css = String.raw;
const tCSkyStyle = new CSSStyleSheet();

tCSkyStyle.replaceSync(css`
    :host {
        display: block;
        width: 22rem;
        background: var(--sky-gradient);
    }
`);
export default tCSkyStyle;
