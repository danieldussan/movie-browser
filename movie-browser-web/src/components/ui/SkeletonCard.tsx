import classes from './SkeletonCard.module.css';

export default function SkeletonCard() {
    return (
        <div className={classes.skeletonCard}>
            <div className={classes.skeletonPoster} />
        </div>
    );
}
