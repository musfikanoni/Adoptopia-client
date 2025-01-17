import{ useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../../styles.css';

import cat1 from '../../../assets/Home/cat-1.png';
import cat2 from '../../../assets/Home/cat-2.png';
import cat3 from '../../../assets/Home/cat-3.png';
import cat4 from '../../../assets/Home/cat-4.png';
import cat5 from '../../../assets/Home/cat-5.png';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    return (
        <section className='px-4 lg:px-0'>
            <SectionTitle subHeading={'Pet Categories'}
            heading={'Explore Our Pet Categories'}
            ></SectionTitle>
            <div className="overflow-hidden">
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={5}
                    // centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                    type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper border-2 border-pcolor rounded-lg"
                    breakpoints={{
                        //mobile devices
                        430: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        //tablets
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        //small desktops
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 25,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div>
                            <img src={cat1} alt="" />
                            <p className="text-black font-semibold text-md">Cat</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide> 
                        <div>
                        <img className='' src={cat2} alt="" />
                        <p className="text-black font-semibold text-md">Rabbit</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={cat3} alt="" />
                            <p className="text-black font-semibold text-md">Bird</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={cat4} alt="" />
                            <p className="text-black font-semibold text-md">Dog</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={cat5} alt="" />
                            <p className="text-black font-semibold text-md">Fish</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Category;