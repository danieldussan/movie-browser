import { useState } from 'react';
import type { ContentSummaryDto } from '../../api';
import DetailModal from './DetailModal';
import LazyImage from '../../components/ui/LazyImage';
import classes from './ContentCard.module.css';

interface ContentCardProps {
    item: ContentSummaryDto;
}

export default function ContentCard({ item }: ContentCardProps) {
    const [showModal, setShowModal] = useState(false);

    // Fallback if posterUrl is empty
    const posterUrl = item.posterUrl || 'https://via.placeholder.com/300x450?text=No+Poster';

    return (
        <>
            <div
              className={classes.card}
              onClick={() => setShowModal(true)}
            >
                <LazyImage
                    src={posterUrl}
                    alt={item.title || 'Movie'}
                    className={classes.poster}
                />

                <div className={classes.overlay}>
                    <div className={classes.hoverInfo}>
                        <h4>{item.title}</h4>
                        <div className={classes.meta}>
                            <span className={classes.match}>98% Match</span>
                            <span className={classes.year}>{item.year}</span>
                        </div>
                        <p className={classes.genres}>{item.genres?.slice(0, 3).join(' • ')}</p>
                    </div>
                </div>
            </div>

            {showModal && (
                <DetailModal itemId={item.id!} type={item.type!} onClose={() => setShowModal(false)} />
            )}
        </>
    );
}
