const css = String.raw;
const tCSkyStyle = new CSSStyleSheet();

tCSkyStyle.replaceSync(css`
    :host {
        flex-shrink: 0;
        width: 30%;
        height: 100%;
        display: block;

        .sky-container {
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 100%;
            transition-duration: var(--medium-animation);
            transition-timing-function: ease;
            transition-property: --sky-gradient-color-dark,
                --sky-gradient-color-medium, --sky-gradient-color-light;

            .cloud {
                position: absolute;
                mask-repeat: no-repeat;
                mask-size: 100%;
                transition-duration: var(--medium-animation);
                transition-timing-function: ease;

                &.top-left-cloud-gradient {
                    --background-image: linear-gradient(
                        45deg in oklch,
                        var(--cloud-top-left-color-1),
                        var(--cloud-top-left-color-2),
                        var(--cloud-top-left-color-3),
                        var(--cloud-top-left-color-4),
                        var(--cloud-top-left-color-5)
                    );
                    transition-property: --cloud-top-left-color-1,
                        --cloud-top-left-color-2, --cloud-top-left-color-3,
                        --cloud-top-left-color-4, --cloud-top-left-color-5,
                        --cloud-bottom-left-color-1, --cloud-bottom-left-color-2,
                        --cloud-bottom-left-color-3, --cloud-bottom-left-color-4,
                        --cloud-bottom-left-color-5, --cloud-top-right-color-1,
                        --cloud-top-right-color-2, --cloud-top-right-color-3,
                        --cloud-top-right-color-4, --cloud-bottom-right-color-1,
                        --cloud-bottom-right-color-2,
                        --cloud-bottom-right-color-3,
                        --cloud-bottom-right-color-4,
                        --cloud-blended-bottom-right-color-1,
                        --cloud-blended-bottom-right-color-2,
                        --cloud-front-bottom-right-color-1,
                        --cloud-front-bottom-right-color-2,
                        --cloud-front-bottom-right-color-3,
                        --cloud-front-bottom-right-color-4;
                }

                &.bottom-left-cloud-gradient {
                    --background-image: linear-gradient(
                        144deg in oklch,
                        var(--cloud-bottom-left-color-1),
                        var(--cloud-bottom-left-color-2),
                        var(--cloud-bottom-left-color-3),
                        var(--cloud-bottom-left-color-4),
                        var(--cloud-bottom-left-color-5)
                    );
                    transition-property: --cloud-top-left-color-1,
                        --cloud-top-left-color-2, --cloud-top-left-color-3,
                        --cloud-top-left-color-4, --cloud-top-left-color-5,
                        --cloud-bottom-left-color-1, --cloud-bottom-left-color-2,
                        --cloud-bottom-left-color-3, --cloud-bottom-left-color-4,
                        --cloud-bottom-left-color-5, --cloud-top-right-color-1,
                        --cloud-top-right-color-2, --cloud-top-right-color-3,
                        --cloud-top-right-color-4, --cloud-bottom-right-color-1,
                        --cloud-bottom-right-color-2,
                        --cloud-bottom-right-color-3,
                        --cloud-bottom-right-color-4,
                        --cloud-blended-bottom-right-color-1,
                        --cloud-blended-bottom-right-color-2,
                        --cloud-front-bottom-right-color-1,
                        --cloud-front-bottom-right-color-2,
                        --cloud-front-bottom-right-color-3,
                        --cloud-front-bottom-right-color-4;
                }

                &.top-right-cloud-gradient {
                    --background-image: linear-gradient(
                        144deg in oklch,
                        var(--cloud-top-right-color-1),
                        var(--cloud-top-right-color-2),
                        var(--cloud-top-right-color-3),
                        var(--cloud-top-right-color-4)
                    );
                    transition-property: --cloud-top-left-color-1,
                        --cloud-top-left-color-2, --cloud-top-left-color-3,
                        --cloud-top-left-color-4, --cloud-top-left-color-5,
                        --cloud-bottom-left-color-1, --cloud-bottom-left-color-2,
                        --cloud-bottom-left-color-3, --cloud-bottom-left-color-4,
                        --cloud-bottom-left-color-5, --cloud-top-right-color-1,
                        --cloud-top-right-color-2, --cloud-top-right-color-3,
                        --cloud-top-right-color-4, --cloud-bottom-right-color-1,
                        --cloud-bottom-right-color-2,
                        --cloud-bottom-right-color-3,
                        --cloud-bottom-right-color-4,
                        --cloud-blended-bottom-right-color-1,
                        --cloud-blended-bottom-right-color-2,
                        --cloud-front-bottom-right-color-1,
                        --cloud-front-bottom-right-color-2,
                        --cloud-front-bottom-right-color-3,
                        --cloud-front-bottom-right-color-4;
                }

                &.bottom-right-cloud-gradient {
                    --background-image: linear-gradient(
                        144deg in oklch,
                        var(--cloud-bottom-right-color-1),
                        var(--cloud-bottom-right-color-2),
                        var(--cloud-bottom-right-color-3),
                        var(--cloud-bottom-right-color-4)
                    );
                    transition-property: --cloud-top-left-color-1,
                        --cloud-top-left-color-2, --cloud-top-left-color-3,
                        --cloud-top-left-color-4, --cloud-top-left-color-5,
                        --cloud-bottom-left-color-1, --cloud-bottom-left-color-2,
                        --cloud-bottom-left-color-3, --cloud-bottom-left-color-4,
                        --cloud-bottom-left-color-5, --cloud-top-right-color-1,
                        --cloud-top-right-color-2, --cloud-top-right-color-3,
                        --cloud-top-right-color-4, --cloud-bottom-right-color-1,
                        --cloud-bottom-right-color-2,
                        --cloud-bottom-right-color-3,
                        --cloud-bottom-right-color-4,
                        --cloud-blended-bottom-right-color-1,
                        --cloud-blended-bottom-right-color-2,
                        --cloud-front-bottom-right-color-1,
                        --cloud-front-bottom-right-color-2,
                        --cloud-front-bottom-right-color-3,
                        --cloud-front-bottom-right-color-4;
                }

                &.blended-bottom-right-cloud-gradient {
                    --background-image: linear-gradient(
                        144deg in oklch,
                        var(--cloud-blended-bottom-right-color-1),
                        var(--cloud-blended-bottom-right-color-2)
                    );
                    transition-property: --cloud-top-left-color-1,
                        --cloud-top-left-color-2, --cloud-top-left-color-3,
                        --cloud-top-left-color-4, --cloud-top-left-color-5,
                        --cloud-bottom-left-color-1, --cloud-bottom-left-color-2,
                        --cloud-bottom-left-color-3, --cloud-bottom-left-color-4,
                        --cloud-bottom-left-color-5, --cloud-top-right-color-1,
                        --cloud-top-right-color-2, --cloud-top-right-color-3,
                        --cloud-top-right-color-4, --cloud-bottom-right-color-1,
                        --cloud-bottom-right-color-2,
                        --cloud-bottom-right-color-3,
                        --cloud-bottom-right-color-4,
                        --cloud-blended-bottom-right-color-1,
                        --cloud-blended-bottom-right-color-2,
                        --cloud-front-bottom-right-color-1,
                        --cloud-front-bottom-right-color-2,
                        --cloud-front-bottom-right-color-3,
                        --cloud-front-bottom-right-color-4;
                }

                &.front-bottom-right-cloud-gradient {
                    --background-image: linear-gradient(
                        144deg in oklch,
                        var(--cloud-front-bottom-right-color-1),
                        var(--cloud-front-bottom-right-color-2),
                        var(--cloud-front-bottom-right-color-3),
                        var(--cloud-front-bottom-right-color-4)
                    );
                    transition-property: --cloud-top-left-color-1,
                        --cloud-top-left-color-2, --cloud-top-left-color-3,
                        --cloud-top-left-color-4, --cloud-top-left-color-5,
                        --cloud-bottom-left-color-1, --cloud-bottom-left-color-2,
                        --cloud-bottom-left-color-3, --cloud-bottom-left-color-4,
                        --cloud-bottom-left-color-5, --cloud-top-right-color-1,
                        --cloud-top-right-color-2, --cloud-top-right-color-3,
                        --cloud-top-right-color-4, --cloud-bottom-right-color-1,
                        --cloud-bottom-right-color-2,
                        --cloud-bottom-right-color-3,
                        --cloud-bottom-right-color-4,
                        --cloud-blended-bottom-right-color-1,
                        --cloud-blended-bottom-right-color-2,
                        --cloud-front-bottom-right-color-1,
                        --cloud-front-bottom-right-color-2,
                        --cloud-front-bottom-right-color-3,
                        --cloud-front-bottom-right-color-4;
                }

                &.top-left {
                    width: calc(19 * var(--unit));
                    aspect-ratio: 1 / 1;
                    top: 5%;
                    left: calc(-2.5 * var(--unit));
                    mask-image: url('assets/illustration/cloud-top-left.svg');
                }

                &.bottom-left {
                    width: calc(27 * var(--unit));
                    aspect-ratio: 271 / 286;
                    top: 45%;
                    left: calc(-2 * var(--unit));
                    mask-image: url('assets/illustration/cloud-bottom-left.svg');
                }

                &.top-right {
                    width: calc(23 * var(--unit));
                    aspect-ratio: 233 / 328;
                    top: 17%;
                    right: calc(-4 * var(--unit));
                    mask-image: url('assets/illustration/cloud-top-right.svg');
                }

                &.bottom-right {
                    width: calc(38 * var(--unit));
                    aspect-ratio: 414 / 471;
                    bottom: -4.5%;
                    right: calc(-10 * var(--unit));
                    mask-image: url('assets/illustration/cloud-bottom-right.svg');
                }

                &.blended-bottom-right {
                    width: calc(38.5 * var(--unit));
                    aspect-ratio: 428 / 385;
                    bottom: -7.8%;
                    right: calc(-1 * var(--unit));
                    mask-image: url('assets/illustration/cloud-blended-bottom-right.svg');
                }

                &.front-bottom-right {
                    width: calc(28.8 * var(--unit));
                    aspect-ratio: 281 / 296;
                    bottom: -9.9%;
                    right: calc(-5 * var(--unit));
                    mask-image: url('assets/illustration/cloud-front-bottom-right.svg');
                }
            }
        }
    }
`);
export default tCSkyStyle;
