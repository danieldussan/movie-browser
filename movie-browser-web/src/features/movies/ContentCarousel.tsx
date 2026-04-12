import { useEffect, useState } from 'react';
import type { ContentSummaryDto } from '../../api';
import ContentCard from './ContentCard';
import classes from './ContentCarousel.module.css';

interface ContentCarouselProps {
    title: string;
    fetchFn: () => Promise<any>;
}

export default function ContentCarousel({ title, fetchFn }: ContentCarouselProps) {
    const [items, setItems] = useState<ContentSummaryDto[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadContent = async () => {
            try {
                const response = await fetchFn();
                setItems(response.data.results || response.data);
            } catch (err) {
                console.error(`Failed to load ${title}`, err);
            } finally {
                setLoading(false);
            }
        };
        loadContent();
    }, [fetchFn, title]);

    if (loading) {
        return <div className={classes.carouselContainer}><h2>{title}</h2> <p>Loading...</p></div>;
    }

    if (!items || items.length === 0) return null;

    return (
        <div className={classes.carouselContainer}>
            <h2 className={classes.title}>{title}</h2>
            <div className={classes.track}>
                {items.map(item => (
                    <ContentCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}
