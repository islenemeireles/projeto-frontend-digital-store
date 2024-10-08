import ProductOptions from "./ProductOptions";
const buttonClick = () => {
    alert('Compra efetuada com sucesso!');
}
const product = {
    rating: '(90 avaliações)',
    reference: 'Casual | Nike | REF:38416711',
    image: './icon/Layer-1aa-2.svg',
    name: 'Tênis Nike Revolution 6 Next Nature Masculino',
    price: '219',
    discountPrice: '219,00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
};
const sizes = ["39", "40", "41", "42", "43"];
const colors = ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"];
const BuyBox = () => {
    return (
        <div className="product-info">
            <h3 className="name-product">{product.name}</h3>
            <p className="reference-product">{product.reference}</p>
            <div className="stars">
                <svg width="94" height="16" viewBox="0 0 94 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.61294 1.2306L10.4622 5.65038L15.1966 6.06108C15.5249 6.08972 15.6585 6.50343 15.4092 6.72122L11.8182 9.86292L12.8943 14.5367C12.9689 14.8614 12.6204 15.1169 12.3383 14.9443L8.26965 12.4666L4.20097 14.9443C3.91814 15.1162 3.57037 14.8607 3.645 14.5367L4.72113 9.86292L1.12932 6.72047C0.88006 6.50268 1.0129 6.08896 1.342 6.06033L6.07636 5.64962L7.92562 1.2306C8.05398 0.923134 8.48458 0.923134 8.61294 1.2306Z" fill="#F6AA1C" stroke="#F6AA1C" />
                    <path d="M27.9962 1.2306L29.8455 5.65038L34.5799 6.06108C34.9082 6.08972 35.0418 6.50343 34.7925 6.72122L31.2015 9.86292L32.2776 14.5367C32.3522 14.8614 32.0037 15.1169 31.7216 14.9443L27.653 12.4666L23.5843 14.9443C23.3014 15.1162 22.9537 14.8607 23.0283 14.5367L24.1044 9.86292L20.5126 6.72047C20.2634 6.50268 20.3962 6.08896 20.7253 6.06033L25.4597 5.64962L27.3089 1.2306C27.4373 0.923134 27.8679 0.923134 27.9962 1.2306Z" fill="#F6AA1C" stroke="#F6AA1C" />
                    <path d="M47.381 1.2306L49.2303 5.65038L53.9646 6.06108C54.293 6.08972 54.4266 6.50343 54.1773 6.72122L50.5862 9.86292L51.6624 14.5367C51.737 14.8614 51.3885 15.1169 51.1064 14.9443L47.0377 12.4666L42.969 14.9443C42.6862 15.1162 42.3384 14.8607 42.4131 14.5367L43.4892 9.86292L39.8974 6.72047C39.6481 6.50268 39.781 6.08896 40.1101 6.06033L44.8444 5.64962L46.6937 1.2306C46.822 0.923134 47.2526 0.923134 47.381 1.2306Z" fill="#F6AA1C" stroke="#F6AA1C" />
                    <path d="M66.7667 1.2306L68.616 5.65038L73.3504 6.06108C73.6787 6.08972 73.8123 6.50343 73.5631 6.72122L69.972 9.86292L71.0481 14.5367C71.1227 14.8614 70.7742 15.1169 70.4921 14.9443L66.4235 12.4666L62.3548 14.9443C62.0719 15.1162 61.7242 14.8607 61.7988 14.5367L62.8749 9.86292L59.2831 6.72047C59.0339 6.50268 59.1667 6.08896 59.4958 6.06033L64.2302 5.64962L66.0794 1.2306C66.2078 0.923134 66.6384 0.923134 66.7667 1.2306Z" fill="#F6AA1C" stroke="#F6AA1C" />
                    <path d="M86.151 1.2306L88.0003 5.65038L92.7346 6.06108C93.063 6.08972 93.1966 6.50343 92.9473 6.72122L89.3563 9.86292L90.4324 14.5367C90.507 14.8614 90.1585 15.1169 89.8764 14.9443L85.8077 12.4666L81.7391 14.9443C81.4562 15.1162 81.1085 14.8607 81.1831 14.5367L82.2592 9.86292L78.6674 6.72047C78.4181 6.50268 78.551 6.08896 78.8801 6.06033L83.6144 5.64962L85.4637 1.2306C85.5921 0.923134 86.0227 0.923134 86.151 1.2306Z" stroke="#F6AA1C" />
                </svg>
                <div className="star">
                    <svg width="63" height="23" viewBox="0 0 63 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="63" height="23" rx="4" fill="#F6AA1C" />
                        <path d="M12.5767 15.4091V13.2614L16.6733 6.81818H18.6222V9.68182H17.5085L15.3011 13.1818V13.2614H21.3466V15.4091H12.5767ZM17.5284 17V14.7528L17.5881 13.8182V6.81818H20.1733V17H17.5284ZM24.2676 17.1591C23.8831 17.1591 23.5533 17.0249 23.2782 16.7564C23.0065 16.4846 22.8722 16.1548 22.8755 15.767C22.8722 15.3892 23.0065 15.0661 23.2782 14.7976C23.5533 14.5291 23.8831 14.3949 24.2676 14.3949C24.6322 14.3949 24.9537 14.5291 25.2321 14.7976C25.5138 15.0661 25.6563 15.3892 25.6596 15.767C25.6563 16.0256 25.5884 16.2609 25.4558 16.473C25.3265 16.6818 25.1575 16.8492 24.9487 16.9751C24.7399 17.0978 24.5128 17.1591 24.2676 17.1591ZM27.3327 17L31.3299 9.08523V9.02557H26.6367V6.81818H34.1935V9.02557L30.1765 17H27.3327Z" fill="white" />
                        <path d="M44.7308 7.17734C44.8966 6.94089 45.2848 6.94089 45.4507 7.17734L47.2009 9.6726C47.2593 9.7558 47.352 9.8155 47.4592 9.83898L50.6773 10.5434C50.9822 10.6102 51.1022 10.9375 50.8997 11.1503L48.7634 13.3969C48.6922 13.4718 48.6568 13.5684 48.6647 13.6661L48.9034 16.5968C48.926 16.8745 48.6119 17.0767 48.3209 16.9719L45.2504 15.8651C45.148 15.8282 45.0334 15.8282 44.9311 15.8651L41.8605 16.9719C41.5696 17.0767 41.2555 16.8745 41.2781 16.5968L41.5167 13.6661C41.5247 13.5684 41.4893 13.4718 41.4181 13.3969L39.2817 11.1503C39.0793 10.9375 39.1993 10.6102 39.5042 10.5434L42.7222 9.83898C42.8295 9.8155 42.9222 9.7558 42.9806 9.6726L44.7308 7.17734Z" fill="white" />
                    </svg>
                </div>
                <p className="rating-product">{product.rating}</p>
            </div>
            <div className="price-container-2">
                <p className="product-price-discount"><span className="RS">R$</span>{product.price}<span className="zero">,00</span></p>
                <p className="product-price-original">{product.discountPrice}</p>
            </div>
            <div>
                <p className="descricao-produto">Descrição do produto</p>
                <p className="descricao-produto-2">{product.description}</p>
                <ProductOptions sizes={sizes} shape="square" radius="8px" type="text" />
                <ProductOptions colors={colors} shape="circle" type="color" />
            </div>
            <button className="last-button" onClick={buttonClick}>COMPRAR</button>
        </div>
    );
}
export default BuyBox;