import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import BuyBox from '../components/BuyBox';
import CardList from '../components/CardList';
const productData = [
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Masculino', price: '200', discountPrice: '100' },
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Masculino', price: '200', discountPrice: '100' },
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Masculino', price: '200', discountPrice: '100' },
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Masculino', price: '200', discountPrice: '100' }
]
const ProductViewPage = () => {
    const { id } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);
    const images = [
        { src: '/icon/White-Sneakers-PNG-Clipart-2.svg', bgColor: '#E2E3FF' },
        { src: '/icon/White-Sneakers-PNG-Clipart-2.svg', bgColor: '#FFE8BC' },
        { src: '/icon/White-Sneakers-PNG-Clipart-2.svg', bgColor: '#FFC0BC' },
        { src: '/icon/White-Sneakers-PNG-Clipart-2.svg', bgColor: '#DEC699' },
        { src: '/icon/White-Sneakers-PNG-Clipart-2.svg', bgColor: '#E8DFCF' }
    ];
    return (
        <div className="product-view-page">
            <div>
                <span className='home-produtos-etc'><a className='span-link' href="http://localhost:5173/">Home</a> / <a className='span-link' href="http://localhost:5173/produtos">Produtos</a> / <a className='span-link' href="http://localhost:5173/produtos">Tênis</a> / <a className='span-link' href="http://localhost:5173/produtos/:id">Nike</a> / <a className='span-link' href="http://localhost:5173/produtos/:id">Tênis Nike Revolution 6 Next Nature Masculino</a></span>
            </div>
            <div className='central-comprar-produto'>
                <Gallery
                    images={images}
                    showThumbs={true}
                    width="700px"
                    height="570px"
                    radius="4px"
                />
                <BuyBox />
            </div>
            <section className='produtos-recomendados'>
                <div className="produtos-relacionados">
                    <h2 className="section-relacionated">Produtos Relacionados</h2>
                    <Link to="/produtos" className="view-all-link">Ver todos ➜</Link>
                </div>
                <div className='last-cardlist'>
                    <CardList products={productData} />
                </div>
            </section>
        </div>
    );
};
export default ProductViewPage;