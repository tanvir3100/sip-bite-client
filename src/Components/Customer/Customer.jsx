
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


// import required modules
import { Autoplay } from 'swiper/modules';

const Customer = () => {
    return (
        <div className='w-full'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='w-3/4 text-center mx-auto'>
                        <h1 className='h1-text text-[#042F1A] text-5xl tracking-wider pb-10'>John D.</h1>
                        <p>The burgers at SipBite are phenomenal! Juicy, flavorful, and cooked to perfection. The toppings are always fresh and the buns are just the right balance of soft and sturdy. Every bite is a delightful experience.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-3/4 text-center mx-auto'>
                        <h1 className='h1-text text-[#042F1A] text-5xl tracking-wider pb-10'>Emily R.</h1>
                        <p>SipBite pizzas are the best in town! The crust is perfectly crispy on the outside and soft on the inside, just the way I like it. The toppings are generous and fresh, and the blend of cheeses is just right.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-3/4 text-center mx-auto'>
                        <h1 className='h1-text text-[#042F1A] text-5xl tracking-wider pb-10'>Michael T.</h1>
                        <p>I love the drinks at SipBite! They have a great variety, from classic sodas to creative mock tails and smoothies. Each drink is refreshing and delicious, made with high-quality ingredients.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-3/4 text-center mx-auto'>
                        <h1 className='h1-text text-[#042F1A] text-5xl tracking-wider pb-10'>Sarah K.</h1>
                        <p>Amazing food and excellent service! SipBite has quickly become my favorite spot for a quick and tasty meal. The burgers, pizzas, and drinks are all top-notch. The staff is always friendly and attentive.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};


export default Customer;
