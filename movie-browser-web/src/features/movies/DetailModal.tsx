import { useEffect, useState } from 'react';
import Modal from '../../components/ui/Modal';
import { movieApi, seriesApi } from '../../services/apiClient';
import type { MovieDetailDto, SeriesDetailDto } from '../../api';
import classes from './DetailModal.module.css';

interface DetailModalProps {
    itemId: string;
    type: string;
    onClose: () => void;
}

export default function DetailModal({ itemId, type, onClose }: DetailModalProps) {
    const [detail, setDetail] = useState<MovieDetailDto | SeriesDetailDto | null>(null);
    const [loading, setLoading] = useState(true);

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
                <p style={{ color: 'white' }}>Loading content...</p>
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

    const { title, plot, genres, languages, rating } = detail;
    const isSeries = type.toLowerCase() === 'series';

    return (
        <Modal isOpen={true} onClose={onClose} title={title || 'Details'}>
            <div className={classes.container}>
                <div className={classes.metaRow}>
                    <span className={classes.match}>New</span>
                    <span>{isSeries ? (detail as SeriesDetailDto).startYear : (detail as MovieDetailDto).year}</span>
                    {isSeries && <span>{(detail as SeriesDetailDto).totalSeasons} Seasons</span>}
                </div>
                
                <p className={classes.plot}>{plot}</p>

                <div className={classes.detailsList}>
                    <p><strong>Genres:</strong> {genres?.join(', ')}</p>
                    <p><strong>Languages:</strong> {languages?.join(', ')}</p>
                    <p><strong>Rating:</strong> {rating?.score} ({rating?.voteCount} votes)</p>
                </div>
            </div>
        </Modal>
    );
}
