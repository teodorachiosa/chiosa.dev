const html = String.raw;

export const tCSkyTemplate = html`
    <aside aria-label="sky illustration">
        <a class="skip-link skip-to-main-content visually-hidden" href="#main-parent"
            >Skip to main content</a
        >
        <div
            role="img"
            aria-labelledby="illustration-description"
            class="sky-container main-gradient-background background-image"
        >
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>

            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>

            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>

            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>

            <div class="light-source">
                <div class="light-source-disc background-image"></div>
                <div class="light-source-glow"></div>
                <div class="light-source-glow outer"></div>
            </div>
            <div
                class="cloud blended-bottom-right blended-bottom-right-cloud-gradient background-image"
            ></div>
            <div
                class="cloud top-left top-left-cloud-gradient background-image"
            ></div>
            <div
                class="cloud top-right top-right-cloud-gradient background-image"
            ></div>
            <div
                class="cloud bottom-left bottom-left-cloud-gradient background-image"
            ></div>
            <div
                class="cloud bottom-right bottom-right-cloud-gradient background-image"
            ></div>
            <div
                class="cloud front-bottom-right front-bottom-right-cloud-gradient background-image"
            ></div>
        </div>
        <div class="controls">
            <button class="animation-toggle"></button>
        </div>
        <span id="illustration-description" class="visually-hidden" aria-hidden="true"
            >Animated illustration of a cloudy sky</span
        >
    </aside>
`;
