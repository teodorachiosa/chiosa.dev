function getThemeCookie() {
    const name = 'tc-theme=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }

    return null;
}

function setInitialTheme(theme) {
    const root = document.querySelector(':root');

    if (theme !== null) {
        root.style.setProperty('color-scheme', theme);
    }
}

setInitialTheme(getThemeCookie());
