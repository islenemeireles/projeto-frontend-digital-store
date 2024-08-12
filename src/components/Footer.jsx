import InformationCard from './InformationCard';
const informations = [
    { text: 'Sobre Drip Store', link: 'http://localhost:5173/about' },
    { text: 'Segurança', link: 'http://localhost:5173/security' },
    { text: 'Wishlist', link: 'http://localhost:5173/wishlist' },
    { text: 'Blog', link: 'http://localhost:5173/blog' },
    { text: 'Trabalhe conosco', link: 'http://localhost:5173/trabalheconosco' },
    { text: 'Meus Pedidos', link: 'http://localhost:5173/meuspedidos' }
];
const informations2 = [
    { text: 'Camisetas', link: 'http://localhost:5173/camisetas' },
    { text: 'Calças', link: 'http://localhost:5173/calcas' },
    { text: 'Bonés', link: 'http://localhost:5173/bones' },
    { text: 'Headphones', link: 'http://localhost:5173/headphones' },
    { text: 'Tênis', link: 'http://localhost:5173/produtos' }
]
const informations3 = [
    { text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161', link: 'http://localhost:5173/endereco' },
    { text: '(85) 3051-3411', link: 'http://localhost:5173/telefone' }
]
const Footer = () => {
    return (
        <footer className="footer">
            <section className='footer-info'>
                <div className='footer1'><img className='footer-logo' src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/logo-footer.svg" alt="" />
                    <p className='lorem
            '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque at sunt earum a cupiditate obcaecati ducimus nostrum voluptatibus, repudiandae quas aspernatur dolore dignissimos eveniet tenetur ullam? Non amet eum quidem.</p>
                    <img className='teste' src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/facebook.svg" alt="" />
                    <img className='teste' cl src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/instagram.svg" alt="" />
                    <img className='teste' src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/twitter.svg" alt="" />
                </div>
                <div><InformationCard title="Informação" informations={informations} /></div>
                <div><InformationCard title="Categorias" informations={informations2} /></div>
                <div><InformationCard title="Contato" informations={informations3} /></div>
            </section>
            <hr />
            <p className="footer-text">© 2024 Digital Store</p>
        </footer>
    );
};
export default Footer;
