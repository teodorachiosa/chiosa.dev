const css = String.raw;
const tCMainContainerStyle = new CSSStyleSheet();

tCMainContainerStyle.replaceSync(css`
    :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 1;
        padding: 10vmin;
        height: 100%;
        overflow: auto;

        .main-container-max-width {
            display: flex;
            flex-direction: column;
            max-width: 40rem;
            width: 100%;
        }
    }
`);
export default tCMainContainerStyle;
