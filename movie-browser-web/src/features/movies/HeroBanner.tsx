import { useState, useEffect } from 'react';
import { Play, Info } from 'lucide-react';
import { movieApi } from '../../services/apiClient';
import type { ContentSummaryDto } from '../../api';
import heroImage from '../../assets/hero.png';
import classes from './HeroBanner.module.css';

export default function HeroBanner() {
    const [featuredContent, setFeaturedContent] = useState<ContentSummaryDto | null>(null);
    const [loading, setLoading] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        const fetchFeatured = async () => {
            try {
                const response = await movieApi.getPopular1(undefined);
                const pagedResponse = response.data;
                const results = pagedResponse.results || [];
                if (results && results.length > 0) {
                    // Pick a random item from the first page
                    const randomIndex = Math.floor(Math.random() * Math.min(10, results.length));
                    setFeaturedContent(results[randomIndex]);
                }
            } catch (err) {
                console.error('Failed to load featured content', err);
            } finally {
                setLoading(false);
            }
        };
        fetchFeatured();
    }, []);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = () => {
        setImageError(true);
        setImageLoaded(true);
    };

    // Use featured content poster URL or fallback to local hero.png
    const backgroundImage = featuredContent?.posterUrl || heroImage;
    const isExternalImage = featuredContent?.posterUrl && !imageError;

    const title = featuredContent?.title || 'Featured Content';
    const genres = featuredContent?.genres?.slice(0, 3).join(' • ') || '';
    const description = `Discover amazing movies and series curated just for you. ${title} is waiting for you!`;

    return (
        <div className={classes.heroContainer}>
            {/* Background image with loading state */}
            {loading || !imageLoaded ? (
                <div className={classes.heroBackground}>
                    <div className={classes.heroSkeleton} />
                </div>
            ) : (
                <div className={classes.heroBackground}>
                    <img
                        src={isExternalImage ? backgroundImage : heroImage}
                        alt=""
                        className={classes.heroImage}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                    />
                </div>
            )}

            <div className={classes.vignette}></div>
            <div className={classes.content}>
                <h1 className={classes.title}>{title}</h1>
                {genres && <div className={classes.genres}>{genres}</div>}
                <p className={classes.description}>{description}</p>
                <div className={classes.actions}>
                    <button className={classes.playButton}>
                        <Play size={20} fill="currentColor" /> Play
                    </button>
                    <button className={classes.infoButton}>
                        <Info size={20} /> More Info
                    </button>
                </div>
            </div>
        </div>
    );
}
