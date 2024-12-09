const css = String.raw;
const tCSkyStyle = new CSSStyleSheet();

tCSkyStyle.replaceSync(css`
    :host {
        display: block;
        width: 20rem;
        background: var(--sky-gradient);
    }
`);
export default tCSkyStyle;
