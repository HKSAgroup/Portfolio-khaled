import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/grid';
import img from '../../assets/reveiw/client.png'
import ReviewItem from '../Home/Review/ReviewItem';
import ServiceReviewItem from './ServiceReviewItem';

const ServiceReview = () => {
    return (
        <div className='mt-28 md:flex items-center gap-10'>
            <div className='md:w-[50%]'>
                <h1 className='text-3xl font-bold mb-3'>What say clients about us</h1>
                <p>Event madness gathering innoies,& tech enthusiasts in Speced.
                    do more informations.</p>

                <p className='flex items-center mt-5 font-medium cursor-pointer gap-2 text-primary text-sm '>View all reviews <BsArrowRight /></p>
            </div>

            <div className='pb-5 md:w-[50%] mt-10 md:mt-0'>
                <Swiper

                    centeredSlides={true}
                    effect={"coverflow"}
                    spaceBetween={30}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        640: {
                            // width: 640,
                            slidesPerView: 1,
                        },
                        768: {
                            // width: 768,
                            slidesPerView: 1,
                        },
                        900: {
                            // width: 768,
                            slidesPerView: 1,
                        },
                    }}
                >
                    <SwiperSlide className='widthslider py-3 '>
                        <ServiceReviewItem name='Juli Dhar' img={img} title="Software Developer"
                            desc="I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program. We are very happy with the results and the service we have received."
                        />
                    </SwiperSlide>

                    <SwiperSlide className='widthslider py-3'>
                        <ServiceReviewItem name='Salauddin Mahmud' img={img} title="Web Developer"
                            desc="I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program. We are very happy with the results and the service we have received."
                        />
                    </SwiperSlide>

                    <SwiperSlide className='widthslider py-3'>
                        <ServiceReviewItem name='Hasnat Ullah' img={img} title="Backend Developer"
                            desc="I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program. We are very happy with the results and the service we have received."
                        />
                    </SwiperSlide>

                    <SwiperSlide className='widthslider py-3'>
                        <ServiceReviewItem name='Sushmita Sen' img={img} title="SEO Expert"
                            desc="I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program. We are very happy with the results and the service we have received."
                        />
                    </SwiperSlide>

                    <SwiperSlide className='widthslider py-3'>
                        <ServiceReviewItem name='A R Noman' img={img} title="Android Developer"
                            desc="I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program. We are very happy with the results and the service we have received."
                        />
                    </SwiperSlide>

                    <SwiperSlide className='widthslider py-3'>
                        <ServiceReviewItem name='Mobarak Naim' img={img} title="Backend Developer"
                            desc="I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program. We are very happy with the results and the service we have received."
                        />
                    </SwiperSlide>

                    <SwiperSlide className='widthslider py-3'>
                        <ServiceReviewItem name='MD Ashraf' img={img} title="Graphics Designer"
                            desc="I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program. We are very happy with the results and the service we have received."
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default ServiceReview;