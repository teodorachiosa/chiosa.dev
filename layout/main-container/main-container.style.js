const css = String.raw;
const tCMainContainerStyle = new CSSStyleSheet();

tCMainContainerStyle.replaceSync(css`
    :host {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
        margin: 90px 140px;
    }
`);
export default tCMainContainerStyle;
