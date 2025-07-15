import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function About() {
    return (
        <div>
            <main>
                <h1 className="text-center font-bold text-shadow-sm text-4xl m-4">About Duncan Everson</h1>

                <div>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        loop={true}
                    >
                        <SwiperSlide><img src="/images/1.jpg" alt='' /></SwiperSlide>
                        <SwiperSlide><img src="/images/2.jpg" alt='' /></SwiperSlide>
                        <SwiperSlide><img src="/images/3.jpg" alt='' /></SwiperSlide>
                        {/* Add more slides */}
                    </Swiper>
                </div>

                <div className='bubble text-left mx-auto w-4/5'>
                    <p className='mb-4'>
                        My name is Duncan Everson. I live in Oregon and am majoring in Computer
                        Science and am minoring in Innovation and Entrepreneurship.
                    </p>

                    <p className='mb-4'>
                        I mainly studied elements of Business in high school, and was a part of my
                        school's DECA club, where I competed with other students from across the state
                        and nation with written Marketing and Entrepreneurship mock proposals.
                    </p>

                    <p className='mb-4'>
                        In college, I've been trying to develop my Software Engineering skills to gain
                        the ability to create interesting projects and gain expertise in a technical
                        craft.
                    </p>

                    <p>
                        I personally like to spend time with my family, lift weights, do creative writing,
                        and play video games. Additionally, I like to go out ballroom/country western
                        dancing during the week.
                    </p>
                </div>

            </main>
        </div>
    );
}

export default About;