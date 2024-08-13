import { Swiper, SwiperSlide } from 'swiper/react';
import Bolinha from '../components/Bolinha';
import Section from '../components/Section';
const data = [
    { id: '1', image: 'https://www.pngall.com/wp-content/uploads/2/White-Sneakers-PNG-Clipart.png' },
    { id: '2', image: 'https://www.pngall.com/wp-content/uploads/2/White-Sneakers-PNG-Clipart.png' },
    { id: '3', image: 'https://www.pngall.com/wp-content/uploads/2/White-Sneakers-PNG-Clipart.png' },
    { id: '4', image: 'https://www.pngall.com/wp-content/uploads/2/White-Sneakers-PNG-Clipart.png' }
];
const clickVerOferta = () => {
    window.location.href = '/produtos';
};
const HomePage = () => {
    return (
        <div>
            <div className='slide'>
                <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id} className='slide'>
                            <section className='slide-content'>
                                <div>
                                    <Bolinha />
                                </div>
                                <div className='texto-slide'>
                                    <p className='texto1-slide'>Melhores ofertas personalizadas</p>
                                    <h1 className='texto2-slide'>Queima de estoque Nike 🔥</h1>
                                    <p className='lorem2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                    <button onClick={clickVerOferta} className='ver-oferta'>Ver Ofertas</button>
                                </div>
                                <div className='tenishome'>
                                    <img src={item.image} alt="slider" className='slide-item' />
                                </div>
                            </section>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <Section />
        </div>
    );
};
export default HomePage;