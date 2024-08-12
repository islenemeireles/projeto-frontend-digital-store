import IconsBall from "./IconsBall";
import CardList from "./CardList";
import { Link } from "react-router-dom";
const clickComprar = () => {
    alert('Compra efetuada com sucesso!');
}
const productData = [
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Masculino', price: '200', discountPrice: '100' },
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Masculino', price: '200', discountPrice: '100' },
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Masculino', price: '200', discountPrice: '100' },
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Masculino', price: '200', discountPrice: '100' },
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Masculino', price: '200', discountPrice: '100' },
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Masculino', price: '200', discountPrice: '100' },
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Masculino', price: '200', discountPrice: '100' },
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Masculino', price: '200', discountPrice: '100' }
];

const clickVerOferta2 = () => {
    window.location.href = 'http://localhost:5173/produtos/0';
};
const Section = () => {
    return (
        <div>
            <section className="colecoes">
                <h2 className="section-title title-left">Coleções em destaque</h2>
                <div className="image-container">
                    <div className="image-item">
                        <img src="https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/collection-1.png?raw=true" alt="Coleção 1" />
                        <div onClick={clickComprar} className="overlay">
                            <div className="promotion-text">30% OFF</div>
                            <button className="buy-button">Comprar</button>
                        </div>
                    </div>
                    <div className="image-item">
                        <img src="https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/collection-2.png?raw=true" alt="Coleção 2" />
                        <div onClick={clickComprar} className="overlay">
                            <div className="promotion-text">30% OFF</div>
                            <button className="buy-button">Comprar</button>
                        </div>
                    </div>
                    <div className="image-item">
                        <img src="https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/collection-3.png?raw=true" alt="Coleção 3" />
                        <div onClick={clickComprar} className="overlay">
                            <div className="promotion-text">30% OFF</div>
                            <button className="buy-button">Comprar</button>
                        </div>
                    </div>
                </div>
                <h2 className="section-title title-center">Coleções em destaque</h2>
                <IconsBall />
                <div>
                    <div className="produtos-em-alta">
                        <h2 className="section-title title-left">Produtos em alta</h2>
                        <Link to="/produtos" className="view-all-link">Ver todos ➜</Link>
                    </div>
                    <div>
                        <CardList products={productData} />
                    </div>
                </div>
            </section>
            <div className="oferta-especial">
                <div>
                    <div>
                        <svg width="466" height="466" viewBox="0 0 466 466" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="233" cy="233" r="233" fill="url(#paint0_linear_309_773)" fillOpacity="0.5" />
                            <defs>
                                <linearGradient id="paint0_linear_309_773" x1="233" y1="-189.5" x2="233" y2="466" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#4200FF" stopOpacity="0.5" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <img className="tenis-laye" src="./icon/Laye-1.svg" alt="" />
                    </div>
                </div>
                <div>
                    <p className="oferta-p">Oferta especial</p>
                    <h1 className="air-jordan">Air Jordan edição de colecionador</h1>
                    <p className="lorem-air">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi sapiente cupiditate quod officiis voluptas aspernatur aliquid repudiandae accusantium, fuga iste error facere temporibus maiores. Recusandae, incidunt! Sit, accusantium tempora!</p>
                    <button onClick={clickVerOferta2} className="veroferta-2">Ver Oferta</button>
                </div>
            </div>
        </div>
    );
};
export default Section;