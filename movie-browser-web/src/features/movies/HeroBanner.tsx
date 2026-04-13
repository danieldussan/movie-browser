import { useState, useEffect } from "react";
import { Play, Info, ChevronRight } from "lucide-react";
import { movieApi } from "../../services/apiClient";
import type { ContentSummaryDto } from "../../api";
import heroImage from "../../assets/hero.png";
import classes from "./HeroBanner.module.css";

export default function HeroBanner() {
  const [featuredContent, setFeaturedContent] =
    useState<ContentSummaryDto | null>(null);
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
          const randomIndex = Math.floor(
            Math.random() * Math.min(10, results.length),
          );
          setFeaturedContent(results[randomIndex]);
        }
      } catch (err) {
        console.error("Failed to load featured content", err);
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

  const title = featuredContent?.title || "Featured Content";
  const genres = featuredContent?.genres?.slice(0, 3).join(" • ") || "";
  const year = featuredContent?.year || "";
  const description = featuredContent
    ? `Discover amazing ${featuredContent.type === "movie" ? "movies" : "series"} curated just for you. ${title} ${year ? `(${year})` : ""} is waiting for you!`
    : "Discover amazing movies and series curated just for you.";

  const handlePlay = () => {
    console.log("Play clicked");
  };

  const handleMoreInfo = () => {
    console.log("More info clicked");
  };

  return (
    <div className={classes.heroContainer}>
      {/* Background image with loading state */}
      <div className={classes.heroBackground}>
        {/* Always show local hero as base */}
        <img
          src={heroImage}
          alt=""
          className={classes.heroImage}
          style={{ opacity: 1 }}
        />

        {/* Overlay external image if available and loaded */}
        {isExternalImage && (
          <img
            src={backgroundImage}
            alt=""
            className={classes.heroImage}
            style={{
              opacity: imageLoaded ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}

        {/* Loading skeleton overlay */}
        {isExternalImage && !imageLoaded && !imageError && (
          <div className={classes.heroSkeleton}>
            <div className={classes.skeletonText}></div>
          </div>
        )}
      </div>

      {/* Enhanced gradient overlays */}
      <div className={classes.vignette}></div>
      <div className={classes.bottomGradient}></div>

      <div className={classes.content}>
        {featuredContent && (
          <div className={classes.contentType}>
            {featuredContent.type === "movie" ? "MOVIE" : "SERIES"}
          </div>
        )}
        <h1 className={classes.title}>{title}</h1>
        {year && <div className={classes.year}>{year}</div>}
        {genres && <div className={classes.genres}>{genres}</div>}
        <p className={classes.description}>{description}</p>
        <div className={classes.actions}>
          <button className={classes.playButton} onClick={handlePlay}>
            <Play size={22} fill="currentColor" /> Play
          </button>
          <button className={classes.infoButton} onClick={handleMoreInfo}>
            <Info size={22} /> More Info
          </button>
        </div>
        {featuredContent && (
          <div className={classes.watchNow}>
            <span>Watch now</span>
            <ChevronRight size={16} />
          </div>
        )}
      </div>
    </div>
  );
}
