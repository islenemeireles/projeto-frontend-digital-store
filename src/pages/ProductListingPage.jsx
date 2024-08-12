import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SortBy from '../components/SortBy';
import CardList from '../components/CardList';
import FilterGroup from '../components/FilterGroup';
const productData = [
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Tênis - M', price: '200', discountPrice: '100', brand: 'K-Swiss', condition: 'novo', gender: 'masculino' },
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Tênis - M', price: '200', discountPrice: '100', brand: 'K-Swiss', condition: 'novo', gender: 'masculino' },
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Tênis - M', price: '200', discountPrice: '100', brand: 'K-Swiss', condition: 'novo', gender: 'masculino' },
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Tênis - M', price: '200', discountPrice: '100', brand: 'K-Swiss', condition: 'novo', gender: 'masculino' },
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Tênis - M', price: '200', discountPrice: '100', brand: 'K-Swiss', condition: 'novo', gender: 'masculino' },
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Tênis - M', price: '200', discountPrice: '100', brand: 'K-Swiss', condition: 'novo', gender: 'masculino' },
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Tênis - M', price: '200', discountPrice: '100', brand: 'K-Swiss', condition: 'novo', gender: 'masculino' },
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Tênis - M', price: '200', discountPrice: '100', brand: 'K-Swiss', condition: 'novo', gender: 'masculino' },
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Tênis - M', price: '200', discountPrice: '100', brand: 'K-Swiss', condition: 'novo', gender: 'masculino' },
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Tênis - M', price: '200', discountPrice: '100', brand: 'K-Swiss', condition: 'novo', gender: 'masculino' },
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Tênis - M', price: '200', discountPrice: '100', brand: 'K-Swiss', condition: 'novo', gender: 'masculino' },
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Tênis - M', price: '200', discountPrice: '100', brand: 'K-Swiss', condition: 'novo', gender: 'masculino' },
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Tênis - M', price: '200', discountPrice: '100', brand: 'K-Swiss', condition: 'novo', gender: 'masculino' },
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Tênis - M', price: '200', discountPrice: '100', brand: 'K-Swiss', condition: 'novo', gender: 'masculino' },
    { image: './icon/Layer-1aa-2.svg', category: 'Tênis', title: 'K-Swiss V8 - Tênis - M', price: '200', discountPrice: '100', brand: 'K-Swiss', condition: 'novo', gender: 'masculino' }
];
const ProductListingPage = () => {
    const [products, setProducts] = useState(productData);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(productData);
    const location = useLocation();
    const filterOptions = {
        marca: [
            { text: 'Adiddas', value: 'adidas' },
            { text: 'Calenciaga', value: 'calenciaga' },
            { text: 'K-Swiss', value: 'kswiss' },
            { text: 'Nike', value: 'nike' },
            { text: 'Puma', value: 'puma' }
        ],
        categoria: [
            { text: 'Esporte e lazer', value: 'esporte-lazer' },
            { text: 'Casual', value: 'casual' },
            { text: 'Utilitário', value: 'utilitario' },
            { text: 'Corrida', value: 'corrida' }
        ],
        genero: [
            { text: 'Masculino', value: 'masculino' },
            { text: 'Feminino', value: 'feminino' },
            { text: 'Unissex', value: 'unissex' }
        ],
        estado: [
            { text: 'Novo', value: 'novo' },
            { text: 'Usado', value: 'usado' }
        ]
    };
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const filter = queryParams.get('filter') || '';
        setSearchQuery(filter);
        let filtered = filter.trim()
            ? productData.filter(product =>
                normalizeText(product.title).includes(normalizeText(filter))
            )
            : productData;
        const selectedFilters = {
            categoria: queryParams.getAll('categoria'),
            genero: queryParams.getAll('genero'),
            estado: queryParams.getAll('estado')
        };
        filtered = filtered.filter(product =>
            (selectedFilters.categoria.length === 0 || selectedFilters.categoria.includes(product.category)) &&
            (selectedFilters.genero.length === 0 || selectedFilters.genero.includes(product.gender)) &&
            (selectedFilters.estado.length === 0 || selectedFilters.estado.includes(product.condition))
        );
        setFilteredProducts(filtered);
        setProducts(filtered);
    }, [location.search]);
    const handleSort = (option) => {
        let sortedProducts;
        if (option === 'menor-preco') {
            sortedProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
        } else if (option === 'maior-preco') {
            sortedProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
        } else {
            sortedProducts = [...filteredProducts];
        }
        setProducts(sortedProducts);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const normalizeText = (text) => {
        return text
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^\w\s]/g, '');
    };
    return (
        <div className="product-listing-page">
            <div className="results-summary">
                <span className="search-query">Resultados para "<span>{searchQuery}</span>"</span>
                <span className="product-count"> - {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''}</span>
            </div>
            <div className='ordenar-por'>
                <SortBy onSort={handleSort} />
            </div>
            <div className='central'>
                <div className="filter-section">
                    <div className="filter-container">
                        <div className="filter-group">
                            <h3 className="filter-group-title-filtrar">Filtrar por</h3>
                            <hr className="filter-group-divider" />
                            <FilterGroup title="Marca" inputType="checkbox" options={filterOptions.marca} />
                            <FilterGroup title="Categoria" inputType="checkbox" options={filterOptions.categoria} />
                            <FilterGroup title="Gênero" inputType="checkbox" options={filterOptions.genero} />
                            <FilterGroup title="Estado" inputType="radio" options={filterOptions.estado} />
                        </div>
                    </div>
                </div>
                <div className="product-list">
                    {filteredProducts.length > 0 ? (
                        <CardList products={products} />
                    ) : (
                        <p className="no-products">Produto não encontrado</p>
                    )}
                </div>
            </div>
        </div>
    );
};
export default ProductListingPage;