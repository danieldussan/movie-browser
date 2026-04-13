import { useEffect, useState } from 'react';
import Modal from '../../components/ui/Modal';
import LazyImage from '../../components/ui/LazyImage';
import { movieApi, seriesApi } from '../../services/apiClient';
import type { MovieDetailDto, SeriesDetailDto } from '../../api';
import { Play, Plus, ThumbsUp } from 'lucide-react';
import classes from './DetailModal.module.css';

interface DetailModalProps {
    itemId: string;
    type: string;
    onClose: () => void;
}

export default function DetailModal({ itemId, type, onClose }: DetailModalProps) {
    const [detail, setDetail] = useState<MovieDetailDto | SeriesDetailDto | null>(null);
    const [loading, setLoading] = useState(true);
    const [matchPercentage, setMatchPercentage] = useState(0);

    useEffect(() => {
        setMatchPercentage(Math.floor(Math.random() * (99 - 85) + 85));
    }, [itemId]);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                if (type.toLowerCase() === 'movie') {
                    const res = await movieApi.getById1(itemId);
                    setDetail(res.data);
                } else {
                    const res = await seriesApi.getById(itemId);
                    setDetail(res.data);
                }
            } catch (err) {
                console.error("Failed to load details", err);
            } finally {
                setLoading(false);
            }
        };

        fetchDetail();
    }, [itemId, type]);

    if (loading) {
        return (
            <Modal isOpen={true} onClose={onClose} title="Loading...">
                <div className={classes.loadingSkeleton}>
                    <div className={classes.skeletonImage} />
                    <div className={classes.skeletonText} />
                    <div className={classes.skeletonTextShort} />
                </div>
            </Modal>
        );
    }

    if (!detail) {
        return (
            <Modal isOpen={true} onClose={onClose} title="Error">
                <p style={{ color: 'white' }}>Failed to load content details.</p>
            </Modal>
        );
    }

    const { title, plot, genres, languages, rating, posterUrl } = detail;
    const isSeries = type.toLowerCase() === 'series';
    const posterUrlFallback = posterUrl || 'https://via.placeholder.com/300x450?text=No+Poster';

    return (
        <Modal isOpen={true} onClose={onClose} title="">
            <div className={classes.container}>
                <div className={classes.backdrop}>
                    <LazyImage
                        src={posterUrlFallback}
                        alt={title || 'Backdrop'}
                        className={classes.backdropImage}
                    />
                    <div className={classes.backdropGradient}></div>
                </div>

                <div className={classes.content}>
                    <h2 className={classes.modalTitle}>{title}</h2>

                    <div className={classes.actions}>
                        <button className={classes.playButton}>
                            <Play size={20} fill="currentColor" /> Play
                        </button>
                        <button className={classes.iconButton} title="Add to list">
                            <Plus size={20} />
                        </button>
                        <button className={classes.iconButton} title="Like">
                            <ThumbsUp size={20} />
                        </button>
                    </div>

                    <div className={classes.metaRow}>
                        <span className={classes.match}>{matchPercentage}% Match</span>
                        <span>{isSeries ? (detail as SeriesDetailDto).startYear : (detail as MovieDetailDto).year}</span>
                        {isSeries && <span>{(detail as SeriesDetailDto).totalSeasons} {((detail as SeriesDetailDto).totalSeasons === 1 ? 'Season' : 'Seasons')}</span>}
                        {rating?.score && <span className={classes.rating}>★ {rating.score}</span>}
                        <span className={classes.type}>{type}</span>
                    </div>

                    <p className={classes.plot}>{plot}</p>

                    <div className={classes.detailsList}>
                        {genres && genres.length > 0 && (
                            <p><strong>Genres:</strong> {genres.join(', ')}</p>
                        )}
                        {languages && languages.length > 0 && (
                            <p><strong>Languages:</strong> {languages.join(', ')}</p>
                        )}
                        {rating?.voteCount && <p><strong>Votes:</strong> {rating.voteCount}</p>}
                    </div>
                </div>
            </div>
        </Modal>
    );
}
