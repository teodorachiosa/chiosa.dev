const css = String.raw;
const tCMainContainerStyle = new CSSStyleSheet();

tCMainContainerStyle.replaceSync(css`
    :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 1;
        margin: 10vmin;

        .main-container-max-width {
            display: flex;
            flex-direction: column;
            max-width: 40rem;
            width: 100%;
        }
    }
`);
export default tCMainContainerStyle;
