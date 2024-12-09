const css = String.raw;
const tCMainContainerStyle = new CSSStyleSheet();

tCMainContainerStyle.replaceSync(css`
    :host {
        flex-grow: 1;
        margin: 4rem 7rem;
    }
`);
export default tCMainContainerStyle;
