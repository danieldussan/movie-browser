import ContentCarousel from '../features/movies/ContentCarousel';
import HeroBanner from '../features/movies/HeroBanner';
import { movieApi, seriesApi } from '../services/apiClient';

export default function BrowsePage() {
    return (
        <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '50px' }}>
            <HeroBanner />
            <div style={{ marginTop: '-150px', position: 'relative', zIndex: 10 }}>
                <ContentCarousel 
                  title="Popular Movies" 
                  fetchFn={() => movieApi.getPopular1(undefined)} 
                />
                <ContentCarousel 
                  title="Trending Series" 
                  fetchFn={() => seriesApi.getTrending(undefined)} 
                />
                <ContentCarousel 
                  title="Top Rated Movies" 
                  fetchFn={() => movieApi.getTopRated1(undefined)} 
                />
            </div>
        </div>
    );
}
