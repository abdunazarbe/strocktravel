
import React from 'react';
import Card from '../../Card'
import './style.scss'
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';

const index = () => {

    return (
        <section className='mt-[80px]'>
            <div className="container">
                <h1 className="title text-[#242424] font-[Montserrat] text-[18px] md:text-5xl font-semibold ">
                    Популярные направления
                </h1>

                <div className='flex items-center mt-10 gap-5 overflow-x-scroll lg:hidden'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Swiper
                    spaceBetween={80}
                    slidesPerView={3}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".button-next-slide",
                        prevEl: ".button-prev-slide",
                    }}
                    className="bukhara hidden lg:block"
                >
                    <SwiperSlide >
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <div className="button-next-slide w-[40px] h-[40px] bg-gray-200 absolute top-0 right-0 cursor-pointer hover:border hover:bg-blue-600 duration-200 rounded-full lg:flex items-center justify-center hidden"

                    >

                        <i className='bx bx-right-arrow-alt text-[25px] text-white' ></i>
                    </div>
                    <div className="button-prev-slide w-[40px] h-[40px] bg-gray-200 cursor-pointer absolute top-0 right-[45px] hover:border hover:bg-blue-600 duration-200 rounded-full lg:flex items-center justify-center hidden "    >
                        <i className='bx bx-left-arrow-alt text-[25px] text-white'></i>
                    </div>
                </Swiper>

            </div>
        </section>
    );
};

export default index;