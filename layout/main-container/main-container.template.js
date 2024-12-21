const html = String.raw;

export const tCMainContainerTemplate = html`
    <div class="main-container-max-width">
        <tc-header></tc-header>
        <main>
            <slot></slot>
        </main>
        <tc-footer></tc-footer>
    </div>
`;
