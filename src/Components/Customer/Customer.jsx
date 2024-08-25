import { Swiper, SwiperSlide } from 'swiper/react';
import useReviews from '../../Hooks/useReviews';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
const Customer = () => {

    const [reviews] = useReviews();

    return (
        <div className='w-full'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {reviews && reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className='w-3/4 text-center mx-auto'>
                            <h1 className='h1-text text-[#042F1A] text-5xl tracking-wider pb-10'>{review.name}</h1>
                            <p>{review.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Customer;
