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
    if (theme !== null) {
        document.documentElement.setAttribute('data-theme', theme);
    }
}

setInitialTheme(getThemeCookie());
