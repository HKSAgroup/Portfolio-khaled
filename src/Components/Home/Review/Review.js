import React from 'react';
import img from '../../../assets/images/artist-white 2.png'
import { motion } from "framer-motion";
import { Navigation, Pagination, FreeMode, Scrollbar, Autoplay, Grid, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/grid';
import ReviewItem from './ReviewItem';

const Review = () => {
    return (
        <div className='mid-container'>
            <div id="testimonials" className="mt-24 mb-20">
                <div className='sm:mb-10 mb-8'>
                    <motion.div
                        className=" mx-auto text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <h1 className="font-semibold text-4xl mb-3">
                            What say clients about us
                        </h1>
                    </motion.div>

                    <motion.div
                        className="mx-auto text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <p className="text-center mx-auto text-neutral text-sm">
                            Ehya is the Instagram analytics platform teams use to stay <br /> focused on the goals, track engagement for
                        </p>
                    </motion.div>
                </div>

                <div className='pb-5'>
                    <Swiper
                        // effect={"coverflow"}
                        // grabCursor={true}
                        // centeredSlides={true}
                        // coverflowEffect={{
                        //     rotate: 50,
                        //     stretch: 0,
                        //     depth: 100,
                        //     modifier: 1,
                        //     slideShadows: true,
                        // }}
                        // autoplay={{
                        //     delay: 1000,
                        //     disableOnInteraction: false,
                        // }}
                        // pagination={{
                        //     dynamicBullets: true,
                        // }}
                        // modules={[EffectCoverflow, Pagination]}
                        // className="mySwiper"

                        // spaceBetween={30}
                        // freeMode={true}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        // modules={[FreeMode, Pagination]}
                        // className="mySwiper"


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
                                slidesPerView: 2,
                            },
                            900: {
                                // width: 768,
                                slidesPerView: 3,
                            },
                        }}
                    >
                        <SwiperSlide className='widthslider py-3 '>
                            <ReviewItem name='Juli Dhar' img={img} title="Software Developer"
                                desc="I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program. We are very happy with the results and the service we have received."
                            />
                        </SwiperSlide>

                        <SwiperSlide className='widthslider py-3'>
                            <ReviewItem name='Salauddin Mahmud' img={img} title="Web Developer"
                                desc="I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program. We are very happy with the results and the service we have received."
                            />
                        </SwiperSlide>

                        <SwiperSlide className='widthslider py-3'>
                            <ReviewItem name='Hasnat Ullah' img={img} title="Backend Developer"
                                desc="I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program. We are very happy with the results and the service we have received."
                            />
                        </SwiperSlide>

                        <SwiperSlide className='widthslider py-3'>
                            <ReviewItem name='Sushmita Sen' img={img} title="SEO Expert"
                                desc="I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program. We are very happy with the results and the service we have received."
                            />
                        </SwiperSlide>

                        <SwiperSlide className='widthslider py-3'>
                            <ReviewItem name='A R Noman' img={img} title="Android Developer"
                                desc="I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program. We are very happy with the results and the service we have received."
                            />
                        </SwiperSlide>

                        <SwiperSlide className='widthslider py-3'>
                            <ReviewItem name='Mobarak Naim' img={img} title="Backend Developer"
                                desc="I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program. We are very happy with the results and the service we have received."
                            />
                        </SwiperSlide>

                        <SwiperSlide className='widthslider py-3'>
                            <ReviewItem name='MD Ashraf' img={img} title="Graphics Designer"
                                desc="I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program. We are very happy with the results and the service we have received."
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Review;