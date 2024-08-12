import { useState } from 'react';
const ProductOptions = ({ sizes, colors, type, shape, radius }) => {
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };
    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    const isColorType = type === 'color';
    const options = sizes || colors;
    const title = sizes ? 'Tamanho' : 'Cor';
    return (
        <div>
            {sizes && (
                <div className="size-options-container">
                    <p className="size-options-title">Tamanho</p>
                    <div className="size-options">
                        {sizes.map((size, index) => (
                            <div
                                key={index}
                                className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                                onClick={() => handleSizeClick(size)}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {colors && (
                <div className="options-container">
                    <p className="options-title">{title}</p>
                    <div className="options">
                        {options.map((option, index) => (
                            <div
                                key={index}
                                className={`option ${selectedOption === option ? 'selected' : ''} ${shape}`}
                                style={{
                                    backgroundColor: isColorType ? option : 'transparent',
                                    color: type === 'text' ? 'dark-gray-2' : 'transparent',
                                    borderRadius: shape === 'square' ? radius : '50%',
                                    border: `2px solid ${selectedOption === option ? '#007bff' : 'transparent'}`
                                }}
                                onClick={() => handleOptionClick(option)}
                            >
                                {type === 'text' ? option : ''}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
export default ProductOptions;