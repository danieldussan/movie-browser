/**
 * Preload images in the background for faster access
 */
export function preloadImages(urls: string[]): void {
    urls.forEach(url => {
        if (url) {
            const img = new Image();
            img.src = url;
        }
    });
}
