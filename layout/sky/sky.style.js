const css = String.raw;
const tCSkyStyle = new CSSStyleSheet();

tCSkyStyle.replaceSync(css`
    :host {
        display: block;
        flex-shrink: 0;
        width: 30%;
        height: 100%;

        .sky-container {
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 100%;
            transition-duration: var(--medium-animation);
            transition-timing-function: ease;
            transition-property: --sky-gradient-color-dark,
                --sky-gradient-color-medium, --sky-gradient-color-light;

            .light-source {
                position: absolute;
                top: 58%;
                left: calc(-2 * var(--unit));

                .light-source-disc {
                    --background-image: linear-gradient(
                        60deg in oklch,
                        var(--moon-or-sun-color-1),
                        var(--moon-or-sun-color-2),
                        var(--moon-or-sun-color-3),
                        var(--moon-or-sun-color-4)
                    );

                    position: absolute;
                    top: 0;
                    left: 0;
                    width: calc(11 * var(--unit));
                    aspect-ratio: 1 / 1;
                    border-radius: 50%;
                    transition: var(--medium-animation) ease;
                    transition-property: --moon-or-sun-color-1,
                        --moon-or-sun-color-2, --moon-or-sun-color-3,
                        --moon-or-sun-color-4;
                }

                .light-source-glow {
                    position: absolute;
                    width: calc(11 * var(--unit));
                    aspect-ratio: 1 / 1;
                    background: var(--moon-or-sun-color-1);
                    border-radius: 50%;
                    opacity: 0.2;
                    scale: 2;
                    pointer-events: none;

                    &.outer {
                        scale: 2.5;
                    }
                }
            }

            .cloud {
                position: absolute;
                mask-repeat: no-repeat;
                mask-size: 100%;
                transition-duration: var(--medium-animation);
                transition-timing-function: ease;
                animation: move infinite linear;
                animation-delay: -10s;

                &.top-left-cloud-gradient {
                    --background-image: linear-gradient(
                        45deg in oklch,
                        var(--cloud-top-left-color-1),
                        var(--cloud-top-left-color-2),
                        var(--cloud-top-left-color-3),
                        var(--cloud-top-left-color-4),
                        var(--cloud-top-left-color-5) 80%
                    );
                    background-size: 220% auto;
                    transition-property: --cloud-top-left-color-1,
                        --cloud-top-left-color-2, --cloud-top-left-color-3,
                        --cloud-top-left-color-4, --cloud-top-left-color-5;
                }

                &.bottom-left-cloud-gradient {
                    --background-image: linear-gradient(
                        145deg in oklch,
                        var(--cloud-bottom-left-color-1) 15%,
                        var(--cloud-bottom-left-color-2),
                        var(--cloud-bottom-left-color-3),
                        var(--cloud-bottom-left-color-4),
                        var(--cloud-bottom-left-color-5)
                    );
                    transition-property: --cloud-bottom-left-color-1,
                        --cloud-bottom-left-color-2, --cloud-bottom-left-color-3,
                        --cloud-bottom-left-color-4, --cloud-bottom-left-color-5;
                }

                &.top-right-cloud-gradient {
                    --background-image: linear-gradient(
                        100deg in oklch,
                        var(--cloud-top-right-color-1),
                        var(--cloud-top-right-color-2),
                        var(--cloud-top-right-color-3),
                        var(--cloud-top-right-color-4)
                    );
                    background-size: 180% auto;
                    background-position-x: 100%;
                    transition-property: --cloud-top-right-color-1,
                        --cloud-top-right-color-2, --cloud-top-right-color-3,
                        --cloud-top-right-color-4;
                }

                &.bottom-right-cloud-gradient {
                    --background-image: linear-gradient(
                        145deg in oklch,
                        var(--cloud-bottom-right-color-1),
                        var(--cloud-bottom-right-color-2),
                        var(--cloud-bottom-right-color-3),
                        var(--cloud-bottom-right-color-4)
                    );
                    transition-property: --cloud-bottom-right-color-1,
                        --cloud-bottom-right-color-2,
                        --cloud-bottom-right-color-3,
                        --cloud-bottom-right-color-4;
                }

                &.blended-bottom-right-cloud-gradient {
                    --background-image: linear-gradient(
                        145deg in oklch,
                        var(--cloud-blended-bottom-right-color-1),
                        var(--cloud-blended-bottom-right-color-2)
                    );
                    transition-property: --cloud-blended-bottom-right-color-1,
                        --cloud-blended-bottom-right-color-2;
                }

                &.front-bottom-right-cloud-gradient {
                    --background-image: linear-gradient(
                        125deg in oklch,
                        var(--cloud-front-bottom-right-color-1) 5%,
                        var(--cloud-front-bottom-right-color-2),
                        var(--cloud-front-bottom-right-color-3),
                        var(--cloud-front-bottom-right-color-4)
                    );
                    transition-property: --cloud-front-bottom-right-color-1,
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
                    animation-duration: 60s;
                }

                &.bottom-left {
                    width: calc(27.2 * var(--unit));
                    aspect-ratio: 271 / 286;
                    top: 55%;
                    left: calc(-4 * var(--unit));
                    mask-image: url('assets/illustration/cloud-bottom-left.svg');
                    animation-duration: 55s;
                }

                &.top-right {
                    width: calc(23 * var(--unit));
                    aspect-ratio: 233 / 328;
                    top: 14%;
                    right: calc(-4 * var(--unit));
                    mask-image: url('assets/illustration/cloud-top-right.svg');
                    animation-duration: 45s;
                }

                &.bottom-right {
                    width: calc(38 * var(--unit));
                    aspect-ratio: 414 / 471;
                    bottom: -4.5%;
                    right: calc(-10 * var(--unit));
                    mask-image: url('assets/illustration/cloud-bottom-right.svg');
                    animation-duration: 40s;
                }

                &.blended-bottom-right {
                    width: calc(38.5 * var(--unit));
                    aspect-ratio: 428 / 385;
                    bottom: -7.8%;
                    right: calc(-1 * var(--unit));
                    mask-image: url('assets/illustration/cloud-blended-bottom-right.svg');
                    animation-duration: 40s;
                }

                &.front-bottom-right {
                    width: calc(25.9 * var(--unit));
                    aspect-ratio: 281 / 296;
                    bottom: -8.2%;
                    right: calc(-3.5 * var(--unit));
                    mask-image: url('assets/illustration/cloud-front-bottom-right.svg');
                    animation-duration: 40s;
                }
            }
        }
    }

    @keyframes move {
        0% {
            translate: -35vw 0;
        }
        100% {
            translate: 35vw 0;
        }
    }
`);
export default tCSkyStyle;
