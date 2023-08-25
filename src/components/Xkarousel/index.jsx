
import React from 'react';
import Xivacard from '../Xivacard'
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
                <h1 className="title  text-[#242424] font-[Montserrat] text-[18px] md:text-5xl font-semibold ">
                    Мы предлагаем все виды туризма
                </h1>
                <div className='flex items-center mt-10 gap-5 overflow-x-scroll lg:hidden'>
                    <   Xivacard />
                    <   Xivacard />
                    <   Xivacard />
                    <   Xivacard />
                   
                </div>
                <Swiper
                    spaceBetween={80}
                    slidesPerView={3}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".button-next-slide",
                        prevEl: ".button-prev-slide",
                    }}
                    className="bukhara hidden lg:flex "
                >
                    <SwiperSlide >
                        <Xivacard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Xivacard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Xivacard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Xivacard />
                    </SwiperSlide>
                    <div className="button-next-slide w-[40px] h-[40px] bg-gray-200 absolute top-0 right-0 cursor-pointer hover:border hover:bg-blue-600 duration-200 rounded-full flex items-center justify-center "

                    >

                        <i className='bx bx-right-arrow-alt text-[25px] text-white' ></i>
                    </div>
                    <div className="button-prev-slide w-[40px] h-[40px] bg-gray-200 cursor-pointer absolute top-0 right-[45px] hover:border hover:bg-blue-600 duration-200 rounded-full flex items-center justify-center  "    >
                        <i className='bx bx-left-arrow-alt text-[25px] text-white'></i>
                    </div>
                </Swiper>
                {/* <div className=" w-full flex mt-[80px] gap-x-[20px]  justify-between  h-[380px]">
                    <Card />
                    <Card />
                    <Card />
                </div> */}

            </div>
        </section>
    );
};

export default index;