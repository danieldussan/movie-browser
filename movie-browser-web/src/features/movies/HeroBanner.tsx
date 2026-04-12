import { Play, Info } from 'lucide-react';
import classes from './HeroBanner.module.css';

export default function HeroBanner() {
    // Ideally this data comes from an endpoint like "getTopBannerMovie" or trending
    const mockHero = {
        title: "The Phantom of the Server",
        description: "When the REST APIs start failing at 3 AM, a rogue developer must dive into the legacy codebase to find the phantom bug before the entire database crashes.",
        posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1925&q=80"
    };

    return (
        <div 
          className={classes.heroContainer} 
          style={{ backgroundImage: `url(${mockHero.posterUrl})` }}
        >
            <div className={classes.vignette}></div>
            <div className={classes.content}>
                <h1 className={classes.title}>{mockHero.title}</h1>
                <p className={classes.description}>{mockHero.description}</p>
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
