import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchApi } from '../services/apiClient';
import type { ContentSummaryDto } from '../api';
import ContentCard from '../features/movies/ContentCard';

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
                // API currently returns ContentSummaryDto directly or an array, depending on generator. 
                // Let's assume response.data is an array or has a results field.
                const items = Array.isArray(response.data) ? response.data : (response.data as any).results || [];
                setResults(items);
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
            
            {loading && <p style={{ color: '#b3b3b3' }}>Loading...</p>}
            
            {!loading && results.length === 0 && query && (
                <p style={{ color: '#b3b3b3' }}>No matches found for "{query}".</p>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                {results.map(item => (
                    <ContentCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}
