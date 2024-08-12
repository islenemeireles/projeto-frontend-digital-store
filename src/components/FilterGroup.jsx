const FilterGroup = ({ title, inputType, options }) => {
    return (
        <div className="filter-group">
            <h4 className="filter-group-title">{title}</h4>
            <div className="filter-options">
                {options.map((option) => (
                    <label key={option.value} className="filter-option">
                        <input
                            type={inputType}
                            name={title}
                            value={option.value}
                            id={`${title}-${option.value}`}
                            className="filter-input"
                        />
                        <span className="filter-label" htmlFor={`${title}-${option.value}`}>
                            {option.text}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
};
export default FilterGroup;
