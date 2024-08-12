import { Link } from 'react-router-dom';
const NotFoundPage = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-message">Página não encontrada</p>
            <Link to="/" className="not-found-link">Voltar para a página inicial</Link>
        </div>
    );
};
export default NotFoundPage;