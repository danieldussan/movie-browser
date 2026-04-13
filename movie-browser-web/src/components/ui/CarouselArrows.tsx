import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import classes from './CarouselArrows.module.css';

interface CarouselArrowsProps {
    containerRef: React.RefObject<HTMLDivElement>;
}

export default function CarouselArrows({ containerRef }: CarouselArrowsProps) {
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScroll = useCallback(() => {
        if (!containerRef.current) return;
        const el = containerRef.current;
        const { scrollLeft, scrollWidth, clientWidth } = el;
        setCanScrollLeft(scrollLeft > 2);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);
    }, [containerRef]);

    useEffect(() => {
        checkScroll();
        const el = containerRef.current;
        if (!el) return;

        el.addEventListener('scroll', checkScroll);
        return () => el.removeEventListener('scroll', checkScroll);
    }, [containerRef, checkScroll]);

    // Also check on resize
    useEffect(() => {
        const handleResize = () => checkScroll();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [checkScroll]);

    const scrollAmount = () => {
        if (containerRef.current) {
            return containerRef.current.clientWidth * 0.8;
        }
        return 800;
    };

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: -scrollAmount(),
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: scrollAmount(),
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <button
                className={`${classes.arrow} ${classes.leftArrow}`}
                onClick={scrollLeft}
                style={{ opacity: canScrollLeft ? 1 : 0, pointerEvents: canScrollLeft ? 'auto' : 'none' }}
                aria-label="Scroll left"
            >
                <ChevronLeft size={32} />
            </button>
            <button
                className={`${classes.arrow} ${classes.rightArrow}`}
                onClick={scrollRight}
                style={{ opacity: canScrollRight ? 1 : 0, pointerEvents: canScrollRight ? 'auto' : 'none' }}
                aria-label="Scroll right"
            >
                <ChevronRight size={32} />
            </button>
        </>
    );
}
