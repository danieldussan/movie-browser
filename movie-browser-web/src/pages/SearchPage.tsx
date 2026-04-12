import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchApi } from '../services/apiClient';
import type { ContentSummaryDto } from '../api';
import ContentCard from '../features/movies/ContentCard';
import SkeletonCard from '../components/ui/SkeletonCard';
import { preloadImages } from '../utils/imageUtils';

export default function SearchPage() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';

    const [results, setResults] = useState<ContentSummaryDto[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const performSearch = async () => {
            if (!query) return;
            setLoading(true);
            try {
                const response = await searchApi.search(query);
                const data = response.data as any;
                const items = Array.isArray(data) ? data : data.results || [];
                setResults(items);

                // Preload search result images
                if (items && items.length > 0) {
                    const imageUrls = items
                        .map((item: ContentSummaryDto) => item.posterUrl)
                        .filter(Boolean);
                    preloadImages(imageUrls);
                }
            } catch (err) {
                console.error("Search failed", err);
            } finally {
                setLoading(false);
            }
        };

        performSearch();
    }, [query]);

    return (
        <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingTop: '100px', paddingLeft: '4%', paddingRight: '4%' }}>
            <h2 style={{ color: 'white', marginBottom: '20px' }}>
                Search Results for "{query}"
            </h2>

            {loading && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                    {Array.from({ length: 7 }).map((_, i) => <SkeletonCard key={i} />)}
                </div>
            )}

            {!loading && results.length === 0 && query && (
                <p style={{ color: '#b3b3b3', fontSize: '1.1rem' }}>No matches found for "{query}".</p>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                {results.map(item => (
                    <ContentCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}
