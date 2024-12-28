export function fetchSVG(path, callback) {
    fetch(path)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`SVG at path: ${path} ${response.statusText}`);
            }
            return response.text();
        })
        .then((svgContent) => {
            callback(svgContent);
        })
        .catch((error) => {
            console.error(error);
        });
}
