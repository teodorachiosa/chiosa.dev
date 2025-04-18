const html = String.raw;

export const tCFooterTemplate = html`
    <footer>
        <h2 class="sr-only">Socials</h2>
        <ul aria-label="Socials">
            <li>
                <a
                    class="link linkedin"
                    href="https://www.linkedin.com/in/teodora-chiosa"
                    target="_blank"
                >
                    <span class="icon"></span>
                    <span class="text">
                        <span>Linkedin</span>
                        <span class="sr-only">(opens in a new tab)</span>
                    </span></a
                >
            </li>
            <li>
                <a
                    class="link bsky"
                    href="https://bsky.app/profile/chiosa.dev"
                    target="_blank"
                >
                    <span class="icon"></span>
                    <span class="text">
                        <span>Bluesky</span>
                        <span class="sr-only">(opens in a new tab)</span>
                    </span></a
                >
            </li>
            <li>
                <a
                    class="link codepen"
                    href="https://codepen.io/teodorachiosa"
                    target="_blank"
                >
                    <span class="icon"></span>
                    <span class="text">
                        <span>Codepen</span>
                        <span class="sr-only">(opens in a new tab)</span>
                    </span></a
                >
            </li>
            <li>
                <a
                    class="link cara"
                    href="https://cara.app/teodorachiosa"
                    target="_blank"
                >
                    <span class="icon"></span>
                    <span class="text">
                        <span>Cara</span>
                        <span class="sr-only">(opens in a new tab)</span>
                    </span></a
                >
            </li>
            <li>
                <a class="link mail" href="mailto:teodora@chiosa.dev">
                    <span class="icon"></span>
                    <span class="text"
                        ><span>Email</span>
                        <span class="sr-only">(Opens email client)</span></span
                    ></a
                >
            </li>
        </ul>
    </footer>
`;
