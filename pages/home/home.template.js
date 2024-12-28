const html = String.raw;

export const tCHomeTemplate = html`
    <div class="avatar-and-text-wrapper">
        <div class="avatar gradient-background--before">
            <img
                src="assets/avatar.webp"
                alt="Teodora, smiling at the camera"
                class="avatar-img"
            />
            <div class="decoration-stars"></div>
            <div class="decoration-stars blur"></div>
            <div class="avatar-background gradient-background"></div>
        </div>
        <div class="intro-text">
            <p>Hi!</p>
            <p>
                I’m <span class="my-name">Teodora</span>, a front-end developer
                and <span class="my-passion">accessibility enthusiast</span>.
            </p>
        </div>
    </div>
`;
