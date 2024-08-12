import { useState } from 'react';
const SortBy = ({ onSort }) => {
    const [selectedOption, setSelectedOption] = useState('relevantes');
    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
        onSort(value);
    };
    return (
        <div className='parent-container'>
            <div className="sort-by-container">
                <label className="sort-label">Ordenar por:</label>
                <select
                    value={selectedOption}
                    onChange={handleChange}
                    className="sort-select"
                >
                    <option value="relevantes">mais relevantes</option>
                    <option value="menor-preco">menor preço</option>
                    <option value="maior-preco">maior preço</option>
                </select>
            </div>
        </div>
    );
};
export default SortBy;