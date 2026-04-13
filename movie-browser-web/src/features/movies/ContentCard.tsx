import { useState, useEffect } from 'react';
import type { ContentSummaryDto } from '../../api';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import DetailModal from './DetailModal';
import LazyImage from '../../components/ui/LazyImage';
import classes from './ContentCard.module.css';

interface ContentCardProps {
    item: ContentSummaryDto;
}

export default function ContentCard({ item }: ContentCardProps) {
    const [showModal, setShowModal] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [matchPercentage, setMatchPercentage] = useState(0);

    useEffect(() => {
        setMatchPercentage(Math.floor(Math.random() * (99 - 85) + 85));
    }, [item.id]);

    const posterUrl = item.posterUrl || 'https://via.placeholder.com/300x450?text=No+Poster';

    return (
        <>
            <div
                className={classes.card}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
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
                            <span className={classes.match}>{matchPercentage}% Match</span>
                            {item.year && <span className={classes.year}>{item.year}</span>}
                            {item.type && (
                                <span className={classes.type}>{item.type}</span>
                            )}
                        </div>
                        {item.genres && item.genres.length > 0 && (
                            <p className={classes.genres}>{item.genres.slice(0, 3).join(' • ')}</p>
                        )}
                    </div>

                    {isHovered && (
                        <div className={classes.cardActions}>
                            <button className={classes.actionButton} title="Play">
                                <Play size={18} fill="currentColor" />
                            </button>
                            <button className={classes.actionButton} title="Add to list">
                                <Plus size={18} />
                            </button>
                            <button className={classes.actionButton} title="Like">
                                <ThumbsUp size={18} />
                            </button>
                            <button 
                                className={classes.actionButton} 
                                title="More info"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowModal(true);
                                }}
                            >
                                <ChevronDown size={18} />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {showModal && (
                <DetailModal itemId={item.id!} type={item.type!} onClose={() => setShowModal(false)} />
            )}
        </>
    );
}
