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

        .fade-animation {
            animation: 0.5s fade;
        }
    }

    @keyframes fade {
        0% {
            translate: 0 2rem;
            opacity: 0;
            visibility: hidden;
        }
        100% {
            translate: 0 0;
            opacity: 1;
            visibility: visible;
        }
    }
`);
export default tCMainContainerStyle;
