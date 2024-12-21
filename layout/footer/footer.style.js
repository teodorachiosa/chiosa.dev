const css = String.raw;
const tCFooterStyle = new CSSStyleSheet();

tCFooterStyle.replaceSync(css`
    :host {
        margin-top: 25vh;
        container-type: inline-size;

        ul {
            display: flex;
            flex-wrap: wrap;
            column-gap: 2.5rem;
            padding: 0;
            list-style: none;

            li {
                a.link {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.5rem;
                    color: var(--body);
                    font-size: 1.1rem;
                    transition: 0.2s ease-in-out;
                    text-decoration: underline 0.2rem transparent;
                    text-underline-offset: 0.8rem;

                    .icon {
                        display: flex;
                        width: 1rem;
                    }

                    .text {
                        margin-left: 0.6rem;
                    }

                    &:hover,
                    &:focus-visible {
                        text-decoration-color: color-mix(
                            in hsl,
                            var(--background),
                            var(--body) 45%
                        );
                        text-underline-offset: 0.4rem;
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
                row-gap: 0.5rem;
            }
        }
    }
`);
export default tCFooterStyle;
