const css = String.raw;
const tCHomeStyle = new CSSStyleSheet();

tCHomeStyle.replaceSync(css`
    :host {
        display: block;
        container-type: inline-size;

        .avatar-and-text-wrapper {
            display: flex;
            gap: 3rem;

            .avatar {
                position: relative;
                align-self: center;
                width: 9rem;
                height: 9rem;

                .avatar-img {
                    width: inherit;
                    height: inherit;
                }

                .decoration-stars {
                    position: absolute;
                    left: -1.5rem;
                    bottom: 1rem;
                    width: 3.7rem;
                    height: 3.7rem;

                    &.blur {
                        filter: blur(0.5em);
                    }

                    svg > * {
                        transition: ease var(--short-animation);
                        transition-property: fill;
                    }
                }

                .avatar-background {
                    z-index: -1;
                    position: absolute;
                    top: 0;
                    right: 0;
                    left: 0;
                    bottom: 0;
                    border-radius: 50%;
                    transition-duration: var(--medium-animation);
                    transition-timing-function: ease;
                    transition-property: --sky-gradient-color-dark,
                        --sky-gradient-color-medium, --sky-gradient-color-light;
                }
            }

            .intro-text {
                p {
                    font-size: 2rem;
                    margin: 0;
                    font-weight: 200;
                    text-wrap: balance;

                    &:not(:last-child) {
                        margin-bottom: 1rem;
                    }

                    .my-name {
                        font-weight: 400;
                    }

                    .my-passion {
                        font-weight: 400;
                    }
                }
            }
        }

        @container (width < 40rem) {
            .avatar-and-text-wrapper {
                flex-wrap: wrap;
            }
        }
    }
`);
export default tCHomeStyle;
