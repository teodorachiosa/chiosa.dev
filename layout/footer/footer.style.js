const css = String.raw;
const tCFooterStyle = new CSSStyleSheet();

tCFooterStyle.replaceSync(css`
    :host {
        display: flex;
        margin-top: 10rem;
        container-type: inline-size;

        ul {
            display: flex;
            flex-wrap: wrap;
            max-width: 50ch;
            gap: 0.7rem 2.5rem;
            padding: 0;
            list-style: none;

            li {
                a.link {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.5rem;
                    font-size: 1.1rem;

                    .icon {
                        display: flex;
                        width: 1rem;

                        svg {
                            stroke: currentColor;
                        }
                    }

                    .text {
                        margin-left: 0.6rem;
                    }

                    &:hover,
                    &:focus-visible {
                        translate: -0.1rem -0.1rem;
                    }
                }
            }
        }

        @container (width < 40rem) {
            ul {
                display: grid;
                grid-template-columns: repeat(2, min-content);
                grid-template-rows: auto;
                justify-items: start;
                column-gap: 2.5rem;
                row-gap: 0.9rem;
            }
        }
    }
`);
export default tCFooterStyle;
