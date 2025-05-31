/* Resources:
 https://www.youtube.com/watch?v=PFpUCnyztJk 
 https://github.com/praveenpuglia/shadow-dom-in-depth */

let sharedStyle;

async function loadSharedStyles() {
    const response = await fetch('css/shared.css', { mode: 'no-cors' });
    const cssText = await response.text();
    sharedStyle = new CSSStyleSheet();
    sharedStyle.replaceSync(cssText);
}

async function loadComponents() {
    if (!sharedStyle) {
        await loadSharedStyles();
    }

    const { TCSky } = await import('./layout/sky/sky.js');
    const { TCMainContainer } = await import(
        './layout/main-container/main-container.js'
    );
    const { TCHome } = await import('./pages/home/home.js');
}

async function initializeApp() {
    try {
        await loadSharedStyles();
        await loadComponents();
    } catch (error) {
        console.error('App init error:', error);
    }
}

initializeApp();

export { sharedStyle };
