import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
const SearchBar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const handleSearch = () => {
        if (query.trim()) {
            navigate(`/produtos?filter=${encodeURIComponent(query)}`);
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    return (
        <div className="search-container">
            <div className="search-input-container">
                <InputText
                    type='text'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Pesquisar produto..."
                    className="search-input"
                />
                <Button
                    icon="pi pi-search"
                    onClick={handleSearch}
                    className="search-button"
                    aria-label="Search"
                />
            </div>
        </div>
    );
};
export default SearchBar;