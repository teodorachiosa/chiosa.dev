const css = String.raw;
const tCMainContainerStyle = new CSSStyleSheet();

tCMainContainerStyle.replaceSync(css`
    :host {
        flex-grow: 1;
        margin: 90px 140px;
    }
`);
export default tCMainContainerStyle;
