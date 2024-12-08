const html = String.raw;

export const tCMainContainerTemplate = html`
    <tc-header></tc-header>
    <main>
        <slot></slot>
    </main>
    <tc-footer></tc-footer>
`;
