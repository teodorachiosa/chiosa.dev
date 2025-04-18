const html = String.raw;

export const tCHomeTemplate = html`
    <div class="avatar-and-text-wrapper">
        <h2 class="sr-only">About me</h2>
        <div class="avatar">
            <img
                src="assets/avatar.webp"
                alt="Teodora, smiling at the camera"
                class="avatar-img"
            />
            <div
                class="avatar-background main-gradient-background background-image"
            ></div>
        </div>
        <div class="intro-text">
            <p>Hey<span aria-hidden="true">!</span> 👋</p>
            <p>
                I’m <span class="my-name">Teodora</span>, a frontend developer
                and <span class="my-passion">accessibility enthusiast</span>.
            </p>
            <p class="blog-shoutout">
                Check out <a href="https://blog.chiosa.dev">my blog</a>!
            </p>
        </div>
    </div>
`;
