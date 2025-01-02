const svgCache = new Map();

export function fetchSVG(path, callback) {
    if (svgCache.has(path)) {
        callback(svgCache.get(path));
        return;
    }

    fetch(path)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`SVG at path: ${path} ${response.statusText}`);
            }
            return response.text();
        })
        .then((svgContent) => {
            svgCache.set(path, svgContent);
            callback(svgContent);
        })
        .catch((error) => {
            console.error(error);
        });
}
