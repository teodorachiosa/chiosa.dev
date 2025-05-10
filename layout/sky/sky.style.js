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
            transition-duration: var(--medium-animation-duration);
            transition-timing-function: ease;
            transition-property: --sky-gradient-color-dark,
                --sky-gradient-color-medium, --sky-gradient-color-light;

            &.animation-disabled {
                * {
                    animation-duration: 0s !important;
                }
            }

            .star {
                position: absolute;
                width: 0.2rem;
                aspect-ratio: 1 / 1;
                background-color: light-dark(transparent, var(--body));
                border-radius: 50%;
                box-shadow: 0 0 0.2rem
                    light-dark(
                        transparent,
                        color-mix(in hsl, var(--body), transparent 70%)
                    );
                opacity: 0.9;
                animation: breathe infinite
                    calc(var(--medium-animation-duration) * 3) ease-in-out;

                &::before {
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    translate: -50% -50%;
                    width: 0.1rem;
                    height: 0.8rem;
                    background-color: light-dark(transparent, var(--body));
                    opacity: 0.1;
                }

                &::after {
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    translate: -50% -50%;
                    width: 0.8rem;
                    height: 0.1rem;
                    background-color: light-dark(transparent, var(--body));
                    opacity: 0.1;
                }

                &:nth-child(1) {
                    left: 50%;
                    top: 40%;
                }

                &:nth-child(2) {
                    left: 70%;
                    top: 20%;
                    animation-delay: -2s;
                }

                &:nth-child(3) {
                    left: 80%;
                    top: 60%;
                    animation-delay: -4s;
                }

                &:nth-child(4) {
                    left: 80%;
                    top: 5%;
                    animation-delay: -6s;
                }

                &:nth-child(5) {
                    left: 20%;
                    top: 10%;
                    animation-delay: -8s;
                }

                &:nth-child(6) {
                    left: 10%;
                    top: 30%;
                    opacity: 0.3;
                    animation-delay: -4s;
                }

                &:nth-child(7) {
                    left: 30%;
                    top: 70%;
                    opacity: 0.3;
                }

                &:nth-child(8) {
                    left: 50%;
                    top: 12%;
                    opacity: 0.3;
                    animation-delay: -2s;
                }

                &:nth-child(9) {
                    left: 60%;
                    top: 90%;
                    opacity: 0.3;
                    animation-delay: -2s;
                }

                &:nth-child(10) {
                    left: 90%;
                    top: 50%;
                    opacity: 0.3;
                    animation-delay: -5s;
                }

                &:nth-child(11) {
                    left: 20%;
                    top: 50%;
                    opacity: 0.3;
                }

                &:nth-child(12) {
                    left: 10%;
                    top: 30%;
                    opacity: 0.3;
                    animation-delay: -4s;
                }

                &:nth-child(13) {
                    left: 40%;
                    top: 5%;
                    opacity: 0.3;
                    animation-delay: -2s;
                }

                &:nth-child(14) {
                    left: 70%;
                    top: 10%;
                    opacity: 0.3;
                    animation-delay: -6s;
                }

                &:nth-child(15) {
                    left: 90%;
                    top: 30%;
                    opacity: 0.3;
                    animation-delay: -5s;
                }

                &:nth-child(16) {
                    left: 30%;
                    top: 25%;
                    opacity: 0.3;
                    animation-delay: -4s;
                }

                &:nth-child(17) {
                    left: 70%;
                    top: 35%;
                    opacity: 0.3;
                    animation-delay: -2s;
                }

                &:nth-child(18) {
                    left: 10%;
                    top: 45%;
                    opacity: 0.3;
                    animation-delay: -6s;
                }

                &:nth-child(19) {
                    left: 60%;
                    top: 55%;
                    opacity: 0.3;
                    animation-delay: -4s;
                }

                &:nth-child(20) {
                    left: 30%;
                    top: 90%;
                    opacity: 0.3;
                    animation-delay: -2s;
                }
            }

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
                    transition: var(--medium-animation-duration) ease;
                    transition-property: --moon-or-sun-color-1,
                        --moon-or-sun-color-2, --moon-or-sun-color-3,
                        --moon-or-sun-color-4;
                }

                .light-source-glow {
                    position: absolute;
                    width: calc(11 * var(--unit));
                    aspect-ratio: 1 / 1;
                    box-shadow: inset 0 0 calc(4 * var(--unit))
                            calc(2 * var(--unit)) var(--moon-or-sun-color-1),
                        0 0 0 calc(3 * var(--unit)) var(--moon-or-sun-color-1);
                    border-radius: 50%;
                    opacity: 0.1;
                    pointer-events: none;
                    animation: breathe infinite
                        var(--light-source-glow-animation) ease-in-out;

                    &.outer {
                        animation-delay: -3s;
                    }
                }
            }

            .cloud {
                position: absolute;
                mask-repeat: no-repeat;
                mask-size: 100%;
                transition-duration: var(--medium-animation-duration);
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
                    animation-duration: var(
                        --top-left-cloud-animation-duration
                    );
                }

                &.bottom-left {
                    width: calc(27.2 * var(--unit));
                    aspect-ratio: 271 / 286;
                    top: 56.8%;
                    left: calc(-4 * var(--unit));
                    mask-image: url('assets/illustration/cloud-bottom-left.svg');
                    animation-duration: var(
                        --bottom-left-cloud-animation-duration
                    );
                }

                &.top-right {
                    width: calc(23 * var(--unit));
                    aspect-ratio: 233 / 328;
                    top: 14%;
                    right: calc(-4 * var(--unit));
                    mask-image: url('assets/illustration/cloud-top-right.svg');
                    animation-duration: var(
                        --top-right-cloud-animation-duration
                    );
                }

                &.bottom-right {
                    width: calc(38 * var(--unit));
                    aspect-ratio: 414 / 471;
                    bottom: -4.5%;
                    right: calc(-10 * var(--unit));
                    mask-image: url('assets/illustration/cloud-bottom-right.svg');
                    animation-duration: var(
                        --bottom-right-cloud-animation-duration
                    );
                }

                &.blended-bottom-right {
                    width: calc(38.5 * var(--unit));
                    aspect-ratio: 428 / 385;
                    bottom: -8%;
                    right: calc(-1 * var(--unit));
                    mask-image: url('assets/illustration/cloud-blended-bottom-right.svg');
                    animation-duration: var(
                        --blended-bottom-right-cloud-animation-duration
                    );
                }

                &.front-bottom-right {
                    width: calc(25.9 * var(--unit));
                    aspect-ratio: 281 / 296;
                    bottom: -8.2%;
                    right: calc(-3.5 * var(--unit));
                    mask-image: url('assets/illustration/cloud-front-bottom-right.svg');
                    animation-duration: var(
                        --front-bottom-right-cloud-animation-duration
                    );
                }
            }
        }

        .animation-toggle {
            position: absolute;
            left: 0;
            top: 0;
            padding: 0.2rem 0.7rem;
            margin: 1rem;
            font-size: 1rem;
            background-color: var(--background);
            border: none;
            border-radius: 5rem;
            opacity: 0.8;
            transition: var(--short-animation-duration) ease;
            transition-property: opacity, background-color, translate;

            &:hover,
            &:focus-visible {
                opacity: 1;
                translate: -0.1rem -0.1rem;
            }

            &:active {
                translate: 0 0;
                background-color: color-mix(
                    in hsl,
                    var(--background),
                    var(--body) 15%
                );
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

    @keyframes breathe {
        0% {
            scale: 0.9;
        }
        50% {
            scale: 1.2;
        }
        100% {
            scale: 0.9;
        }
    }
`);
export default tCSkyStyle;
