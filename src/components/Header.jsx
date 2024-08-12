import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import { useState, useRef, useEffect } from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
const Home = () => <div></div>;
const Produtos = () => <div></div>;
const Categorias = () => <div></div>;
const MeusPedidos = () => <div></div>;
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const menuRef = useRef(null);
    const cartRef = useRef(null);
    const handleClick = () => {
        window.location.href = 'http://localhost:5173/entrar';
    };
    const handleHamburgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleCartClick = () => {
        setIsCartOpen(!isCartOpen);
    };
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.hamburger-menu')) {
            setIsMenuOpen(false);
        }
        if (cartRef.current && !cartRef.current.contains(event.target) && !event.target.closest('.cart-container')) {
            setIsCartOpen(false);
        }
    };
    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <header>
            <div className="container">
                <div className="hamburger-menu" onClick={handleHamburgerClick}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <Logo />
                <SearchBar />
                <p className='cadastrar'>
                    <a className='cadastro' href="http://localhost:5173/cadastrar">Cadastre-se</a>
                </p>
                <button onClick={handleClick} className='entrar'>Entrar</button>
                <div className="cart-container" onClick={handleCartClick} ref={cartRef}>
                    <img
                        className="cart-icon"
                        src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/mini-cart.svg"
                        alt="Carrinho"
                    />
                    <span className="cart-count">2</span>
                    {isCartOpen && (
                        <div className="cart-dropdown">
                            <p className='meu-carrinho'>Meu Carrinho</p>
                            <hr className='hr-cart' />
                            <div className="cart-item">
                                <div className='img-background'>
                                    <img src="http://localhost:5173/icon/White-Sneakers-PNG-Clipart-2.svg" alt="" className="cart-item-image" />
                                </div>
                                <div className="cart-item-details">
                                    <p className="cart-item-name">Tênis Nike Revolution 6 Next Nature Masculino</p>
                                    <div className='cart-price'>
                                        <p className="cart-item-price-descount">R$ 219,00</p>
                                        <p className='cart-item-price-original'>R$ 219,00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-item">
                                <div className='img-background'>
                                    <img src="http://localhost:5173/icon/White-Sneakers-PNG-Clipart-2.svg" alt="Product" className="cart-item-image" />
                                </div>
                                <div className="cart-item-details">
                                    <p className="cart-item-name">Tênis Nike Revolution 6 Next Nature Masculino</p>
                                    <div className='cart-price'>
                                        <p className="cart-item-price-descount">R$ 219,00</p>
                                        <p className='cart-item-price-original'>R$ 219,00</p>
                                    </div>
                                </div>
                            </div>
                            <hr className='hr-cart-2' />
                            <div className="cart-footer">
                                <p className='valor-total'>Valor total:</p>
                                <p className='valor-total-2'>R$ 438,00</p>
                            </div>
                            <div className="cart-footer-2">
                                <p className='esvaziar'>Esvaziar</p>
                                <button className='see-cart'>Ver Carrinho</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {isMenuOpen && (
                <div className="hamburger-menu-content" ref={menuRef}>
                    <div className="close-button" onClick={handleCloseMenu}>x</div>
                    <div className="menu-header">Páginas</div>
                    <Navbar />
                    <hr className="menu-divider" />
                    <div className="menu-buttons">
                        <button onClick={handleClick} className='menu-login'>Entrar</button>
                        <p className='menu-register'>
                            <a className='cadastro' href="http://localhost:5173/cadastrar">Cadastre-se</a>
                        </p>
                    </div>
                </div>
            )}
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/categorias" element={<Categorias />} />
                <Route path="/meus-pedidos" element={<MeusPedidos />} />
            </Routes>
        </header>
    );
};
export default Header;