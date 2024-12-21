const css = String.raw;
const tCHomeStyle = new CSSStyleSheet();

tCHomeStyle.replaceSync(css`
    p {
        font-size: 2rem;
        margin: 0;
        font-weight: 200;
        text-wrap: balance;

        &:not(:last-child) {
            margin-bottom: 1rem;
        }

        .my-name {
            font-family: 'Philosopher', serif;
            font-size: 1.07em;
            font-weight: 700;
        }

        .my-passion {
            font-weight: 400;
        }
    }
`);
export default tCHomeStyle;
