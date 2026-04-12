import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import classes from './SearchBar.module.css';

export default function SearchBar() {
    const [expanded, setExpanded] = useState(false);
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query.trim())}`);
        }
    };

    const toggleExpand = () => {
        setExpanded(!expanded);
        if (!expanded) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    };

    // Close on click outside loosely
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (expanded && inputRef.current && !inputRef.current.contains(e.target as Node) && query === '') {
                setExpanded(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [expanded, query]);

    return (
        <form 
            className={`${classes.searchContainer} ${expanded ? classes.expanded : ''}`}
            onSubmit={handleSubmit}
            onClick={(e) => e.stopPropagation()}
        >
            <button type="button" className={classes.searchIconBtn} onClick={toggleExpand}>
                <Search size={24} className={classes.icon} />
            </button>
            <input 
                ref={inputRef}
                type="text" 
                placeholder="Titles, people, genres" 
                className={classes.searchInput}
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
        </form>
    );
}
