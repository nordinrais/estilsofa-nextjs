'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getSearchResults, SearchResult } from '@/data/search-data';

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);

        if (value.length >= 2) {
            const found = getSearchResults(value);
            setResults(found);
            setIsOpen(true);
        } else {
            setResults([]);
            setIsOpen(false);
        }
    };

    const handleSelectResult = (url: string) => {
        setIsOpen(false);
        setQuery('');
        router.push(url);
    };

    const clearSearch = () => {
        setQuery('');
        setIsOpen(false);
        setResults([]);
    };

    const getIcon = (type: string) => {
        switch (type) {
            case 'product': return '🛋️';
            case 'blog': return '📝';
            case 'page': return '📄';
            default: return '🔍';
        }
    };

    return (
        <div className="relative w-full max-w-[300px]" ref={searchRef}>
            <div className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    onFocus={() => query.length >= 2 && setIsOpen(true)}
                    placeholder="Buscar..."
                    className="w-full px-4 py-2 pl-10 border border-gray-200 rounded-full bg-gray-50 text-sm focus:outline-none focus:border-[#ecd75f] focus:ring-2 focus:ring-[#ecd75f]/20 transition-all text-gray-800"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    🔍
                </span>
                {query && (
                    <button
                        onClick={clearSearch}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        ✕
                    </button>
                )}
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-[100] animate-fadeIn">
                    {results.length > 0 ? (
                        <ul>
                            {results.map((result) => (
                                <li key={result.id} className="border-b border-gray-50 last:border-none">
                                    <button
                                        onClick={() => handleSelectResult(result.url)}
                                        className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center gap-3 group"
                                    >
                                        <span className="text-xl">{getIcon(result.type)}</span>
                                        <div>
                                            <span className="block font-medium text-gray-800 group-hover:text-[#D97706] transition-colors">{result.title}</span>
                                            <span className="text-xs text-gray-400 uppercase tracking-wide">{result.category}</span>
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="p-4 text-center text-gray-500 text-sm">
                            No encontramos resultados para "{query}"
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
