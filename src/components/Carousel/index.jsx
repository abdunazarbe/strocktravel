import React from 'react'
import { Carousel, Radio } from 'antd';
import { useState } from 'react';
import { Modal } from 'antd';
import './style.scss'

import Modalpng from '../../assetss/images/modal.png'
import Modalsvg from '../../assetss/icons/modalicon.svg'
const index = () => {


    const [dotPosition, setDotPosition] = useState('right');
    const handlePositionChange = ({ target: { value } }) => {
        setDotPosition(value);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className=''>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <p className='mb-[50px] text-center mt-5 text-[#0154A7] text-2xl font-semibold'>Связаться с нами</p>
                <div className="flex flex-col items-center text-center gap-y-5 relative">
                  
                    <input type="text" placeholder='Имя' className='w-full p-[18px] text-xl text-[#1e1e1e] font-semibold font-[Montserrat] bg-[#f9f9f9] rounded-[14px] border-2 border-[#0154a7]' />
                    <input type="text" placeholder='Номер телефона' className='w-full p-[18px] text-xl text-[#1e1e1e] font-semibold font-[Montserrat] bg-[#f9f9f9] rounded-[14px] border-2 border-[#0154a7]'/>
                    <textarea placeholder='Сообщение' className='w-full h-[200px] rounded-[14px] border-2 border-[rgba(30,30,30,0.18)] p-5 mb-10'></textarea>
                    <button className='w-full py-[18px] rounded-[14px] bg-[#0154A7] text-white text-base font-semibold font-[Montserrat] absolute bottom-[-40px] z-30' onClick={handleOk}>Отправка</button>
                </div>
            </Modal>

            <Carousel dotPosition={dotPosition} className=''>
                <div className='carousel grid place-content-center h-[600px] md:h-[1100px] relative'>
                    <div className="container">
                        <h3 className=' max-w-[550px]  mb-6 font-semibold text-[36px] md:text-[64px] text-[#FFFFFF]'>Лучшие туры по Узбекистану</h3>
                        <p className='max-w-[352px]  text-[#FFFFFF] text-base md:text-[24px] mt-[40px] ] mb-6 font-normal'>
                            Мы предлагаем вам незабываемое путешествие
                        </p>
                    </div>
                    <div className="absolute right-10 bottom-[30px] z-30 flex items-center">
                        <img src={Modalpng} alt="" className='mText' />
                        <img src={Modalsvg} alt="" className='mBtn' onClick={setIsModalOpen} />
                    </div>
                </div>

                <div className='carousel  grid place-content-center h-[600px] md:h-[1100px] relative'>
                    <div className="container">
                        <h3 className=' w-[550px]  mb-6 font-semibold text-[64px] leading-[89px] text-[#FFFFFF]'>Лучшие туры по Узбекистану</h3>
                        <p className='w-[352px] h-[53px]  text-[#FFFFFF] text-[24px] mt-[40px] ] mb-6 font-normal'>
                            Мы предлагаем вам незабываемое путешествие
                        </p>
                    </div>
                    <div className="absolute right-10 bottom-[30px] z-30 flex items-center">
                        <img src={Modalpng} alt="" className='mText' />
                        <img src={Modalsvg} alt="" className='mBtn' onClick={setIsModalOpen} />
                    </div>
                </div>

                <div className='carousel  grid place-content-center h-[600px] md:h-[1100px] relative'>
                    <div className="container">
                        <h3 className=' w-[550px]  mb-6 font-semibold text-[64px] leading-[89px] text-[#FFFFFF]'>Лучшие туры по Узбекистану</h3>
                        <p className='w-[352px] h-[53px]  text-[#FFFFFF] text-[24px] mt-[40px] ] mb-6 font-normal'>
                            Мы предлагаем вам незабываемое путешествие
                        </p>
                    </div>
                    <div className="absolute right-10 bottom-[30px] z-30 flex items-center">
                        <img src={Modalpng} alt="" className='mText' />
                        <img src={Modalsvg} alt="" className='mBtn' onClick={setIsModalOpen} />
                    </div>
                </div>

                <div className='carousel  grid place-content-center h-[600px] md:h-[1100px]'>
                    <div className="container">
                        <h3 className=' w-[550px]  mb-6 font-semibold text-[64px] leading-[89px] text-[#FFFFFF]'>Лучшие туры по Узбекистану</h3>
                        <p className='w-[352px] h-[53px]  text-[#FFFFFF] text-[24px] mt-[40px] ] mb-6 font-normal'>
                            Мы предлагаем вам незабываемое путешествие
                        </p>
                    </div>
                    <div className="absolute right-10 bottom-[30px] z-30 flex items-center">
                        <img src={Modalpng} alt="" className='mText' />
                        <img src={Modalsvg} alt="" className='mBtn' onClick={setIsModalOpen} />
                    </div>
                </div>

            </Carousel>
        </div>
    )
}

export default index