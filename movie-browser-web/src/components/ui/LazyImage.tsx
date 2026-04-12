import { useState, useEffect, useRef, type ImgHTMLAttributes } from 'react';
import classes from './LazyImage.module.css';

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string;
    placeholderSrc?: string;
    threshold?: number;
    preload?: boolean;
    sizes?: string;
}

export default function LazyImage({
    src,
    alt,
    className = '',
    placeholderSrc,
    threshold = 0.1,
    preload = false,
    sizes = '(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw',
    ...rest
}: LazyImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(preload);
    const [hasError, setHasError] = useState(false);
    const imgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (preload) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, [threshold, preload]);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = () => {
        setHasError(true);
        setIsLoaded(true);
    };

    return (
        <div ref={imgRef} className={`${classes.imageWrapper} ${className}`}>
            {/* Blur placeholder */}
            {(!isLoaded || hasError) && (
                <div className={classes.placeholder}>
                    {placeholderSrc && !hasError ? (
                        <img
                            src={placeholderSrc}
                            alt=""
                            className={classes.placeholderBlur}
                            aria-hidden="true"
                            sizes={sizes}
                        />
                    ) : (
                        <div className={classes.placeholderSkeleton} />
                    )}
                </div>
            )}

            {/* Full resolution image */}
            {isInView && !hasError && (
                <img
                    src={src}
                    alt={alt}
                    className={`${classes.fullImage} ${isLoaded ? classes.loaded : ''}`}
                    onLoad={handleLoad}
                    onError={handleError}
                    sizes={sizes}
                    loading="lazy"
                    {...rest}
                />
            )}
        </div>
    );
}
