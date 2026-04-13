import { useEffect, useState, useRef } from 'react';
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
    const scrollContainerRef = useRef<HTMLDivElement>(null);

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

    if (!items || items.length === 0) return null;

    return (
        <div className={classes.carouselContainer}>
            <h2 className={classes.title}>{title}</h2>
            <ErrorBoundary>
                <div className={classes.trackWrapper}>
                    <CarouselArrows containerRef={scrollContainerRef as React.RefObject<HTMLDivElement>} />
                    <div
                        className={classes.track}
                        ref={scrollContainerRef}
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
