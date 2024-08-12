import { useState } from 'react';
import PropTypes from 'prop-types';
const Gallery = ({ images, showThumbs, width, height, radius, bottomImage }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };
    return (
        <div className="gallery-container" style={{ width, height, borderRadius: radius }}>
            <button className="gallery-button prev" onClick={handlePrev}>
                &lt;
            </button>
            <div className="gallery-slide">
                <div
                    className="image-container-2"
                    style={{ backgroundColor: images[currentIndex].bgColor || '#E2E3FF' }}
                >
                    <img src={images[currentIndex].src} alt={`Slide ${currentIndex}`} />
                </div>
            </div>
            <button className="gallery-button next" onClick={handleNext}>
                &gt;
            </button>
            {showThumbs && (
                <div className="gallery-thumbs">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`thumb ${index === currentIndex ? 'active' : ''}`}
                            style={{ backgroundColor: image.bgColor || '#f0f0f0' }}
                            onClick={() => setCurrentIndex(index)}
                        >
                            <img src={image.src} alt={`Thumbnail ${index}`} />
                        </div>
                    ))}
                </div>
            )}
            {bottomImage && (
                <div className="bottom-image-container">
                    <img src={bottomImage} alt="Bottom Image" className="bottom-image" />
                </div>
            )}
        </div>
    );
};

Gallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            bgColor: PropTypes.string,
        })
    ).isRequired,
    showThumbs: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
    radius: PropTypes.string,
    bottomImage: PropTypes.string,
};
Gallery.defaultProps = {
    showThumbs: true,
    width: '700px',
    height: '570px',
    radius: '4px',
    bottomImage: '',
};
export default Gallery;