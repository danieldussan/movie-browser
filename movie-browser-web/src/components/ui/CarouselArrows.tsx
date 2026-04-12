import { ChevronLeft, ChevronRight } from 'lucide-react';
import classes from './CarouselArrows.module.css';

interface CarouselArrowsProps {
    containerRef: React.RefObject<HTMLDivElement>;
}

export default function CarouselArrows({ containerRef }: CarouselArrowsProps) {
    const scrollAmount = 800;

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <button
                className={`${classes.arrow} ${classes.leftArrow}`}
                onClick={scrollLeft}
                aria-label="Scroll left"
            >
                <ChevronLeft size={32} />
            </button>
            <button
                className={`${classes.arrow} ${classes.rightArrow}`}
                onClick={scrollRight}
                aria-label="Scroll right"
            >
                <ChevronRight size={32} />
            </button>
        </>
    );
}
