import { useEffect, useState, useRef, useCallback } from 'react';
import type { ContentSummaryDto } from '../../api';
import ContentCard from './ContentCard';
import SkeletonCard from '../../components/ui/SkeletonCard';
import CarouselArrows from '../../components/ui/CarouselArrows';
import ErrorBoundary from '../../components/ui/ErrorBoundary';
import { preloadImages } from '../../utils/imageUtils';
import classes from './ContentCarousel.module.css';

interface ContentCarouselProps {
    title: string;
    fetchFn: () => Promise<any>;
}

export default function ContentCarousel({ title, fetchFn }: ContentCarouselProps) {
    const [items, setItems] = useState<ContentSummaryDto[]>([]);
    const [loading, setLoading] = useState(true);
    const trackRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    useEffect(() => {
        const loadContent = async () => {
            try {
                const response = await fetchFn();
                const results = response.data.results || response.data;
                setItems(results);

                // Preload images in the background
                if (results && results.length > 0) {
                    const imageUrls = results
                        .map((item: ContentSummaryDto) => item.posterUrl)
                        .filter(Boolean);
                    preloadImages(imageUrls);
                }
            } catch (err) {
                console.error(`Failed to load ${title}`, err);
            } finally {
                setLoading(false);
            }
        };
        loadContent();
    }, [fetchFn, title]);

    // Mouse drag scrolling
    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        isDragging.current = true;
        startX.current = e.pageX - (trackRef.current?.offsetLeft || 0);
        scrollLeft.current = trackRef.current?.scrollLeft || 0;
    }, []);

    const handleMouseLeave = useCallback(() => {
        isDragging.current = false;
    }, []);

    const handleMouseUp = useCallback(() => {
        isDragging.current = false;
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - (trackRef.current?.offsetLeft || 0);
        const walk = (x - startX.current) * 1.5;
        if (trackRef.current) {
            trackRef.current.scrollLeft = scrollLeft.current - walk;
        }
    }, []);

    // Touch scrolling ya funciona nativamente, pero agregamos momentum
    const handleTouchStart = useCallback(() => {
        isDragging.current = true;
    }, []);

    const handleTouchEnd = useCallback(() => {
        isDragging.current = false;
    }, []);

    if (!items || items.length === 0) return null;

    return (
        <div className={classes.carouselContainer}>
            <h2 className={classes.title}>{title}</h2>
            <ErrorBoundary>
                <div className={classes.trackWrapper}>
                    <CarouselArrows containerRef={trackRef as React.RefObject<HTMLDivElement>} />
                    <div 
                        className={classes.track} 
                        ref={trackRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        {loading
                            ? Array.from({ length: 7 }).map((_, i) => <SkeletonCard key={i} />)
                            : items.map(item => (
                                <ContentCard key={item.id} item={item} />
                            ))}
                    </div>
                </div>
            </ErrorBoundary>
        </div>
    );
}
