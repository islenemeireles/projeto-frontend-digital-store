import { Link } from 'react-router-dom';
import Card from './Card';
const CardList = ({ products }) => {
    return (
        <div className="card-list">
            {products.map((product, index) => (
                <Link to={`/produtos/${index}`} key={index} className="card-link">
                    <Card>
                        <div className="card-image-wrapper">
                            <img src={product.image} alt={product.title} className="card-image" />
                            {index < 2 && (
                                <div className="promotion-text-2">30% OFF</div>
                            )}
                            <div className="svg-container">
                                <img src="/icon/Layer-1aa-2.svg" alt="Ícone SVG" className="svg-image" />
                            </div>
                        </div>
                        <div className="card-content">
                            <p className="card-category">{product.category}</p>
                            <h3 className="card-title">{product.title}</h3>
                            <div className="price-container">
                                <p className="card-price-original">${product.price}</p>
                                <p className="card-price-discount">${product.discountPrice}</p>
                            </div>
                        </div>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export default CardList;
