import React from 'react';
import Xiva from '../../../assetss/images/XIVA.png'
import Skorost from '../../../assetss/icons/skorost.svg'
import Verifies from '../../../assetss/icons/verifies.svg'
import Like from '../../../assetss/icons/like.svg'

const index = () => {
    return (
        <section className='mt-[80px]'>
            <div className="container">
                <div className="top flex flex-col md:flex-row w-full bg-[#F7F7F7] rounded-[14px] h-fit">
                    <img src={Xiva} alt="xiva" className='mt-[30px] mb-[30px] ml-[30px] mr-[30px] md:mr-0' />
                    <div className="top_texts block max-w-[686px] p-[60px]">
                        <p className='font-[Montserrat] font-bold text-[18px] md:text-[34px]  text-[#0154A7]'>Популярные направления</p>
                        <p className='font-[Montserrat] font-semibold text-[14px]  text-[#1E1E1E] pt-5 pb-[40px]'>В нашей стране много зон отдыха, турбаз, природных баз с целебным воздухом, большое внимание уделено озёрам и рек. Вас удивит широкий спектр размещения в Узбекистане – гостиницы, частные пансионы, бутик-отели, хостелы, студенческие городки, здесь вы можете выбрать самую доступную цену.</p>
                        <p className='font-[Montserrat] font-bold text-xl md:text-[22px]  text-[#0154A7]'>3323+ (на пример)</p>
                        <p className='font-[Montserrat] font-semibold text-sm md:text-[16px]  text-[#1E1E1E]'>Счастливые путешественники</p>
                        <p className='font-[Montserrat] font-bold text-xl md:text-[22px]  text-[#0154A7] '>3323+ (на пример)</p>
                        <p className='font-[Montserrat] font-semibold text-sm md:text-[16px]  text-[#1E1E1E]  '>Маршруты созданы</p>
                    </div>


                </div>

                <div className="middle flex mt-[60px] ml-0 w-full h-[165px]">
                    <div className="middle_title max-w-[745px]">
                        <h3 className='font-[Montserrat] font-semibold text-[18px] md:text-[48px] text-[#0154A7] pb-[1px] border-b-2 border-transparent cursor-pointer hover:border-blue-700 '>Развлекательная программа</h3>
                        <p className='font-[Montserrat] font-semibold text-sm md:text-[18px] max-w-[650px]  text-[#1E1E1E]  mt-[20px] '>Узбекистан предлагает не только экскурсии к историческим архитектурным памятникам, но и места, где можно весело провести время с семьей и друзьями.</p>
                    </div>
                    <div></div>
                </div>

                <div className="bottom block items-center w-full bg-[#F7F7F7] mt-[60px] rounded-[14px] h-fit pb-5">
                    <div className="bottom_title text-center  pt-[40px] ">
                        <h3 className='font-[Montserrat] font-semibold text-[18px] md:text-[34px] pb-4 text-[#0154A7]    hover:underline '>Что Вас ожидает?</h3>
                        <p className='font-[Montserrat] font-semibold text-sm md:text-[18px] text-[#1E1E1E]  '>Наша команда работает только для Вас!</p>
                    </div>

                    <div className="icons place-content-center mt-[75px] h-fit max-w-[700px] flex flex-col md:flex-row items-center gap-10 md:gap-[80px] mx-auto">
                        <div className="skorost ">
                            <img src={Skorost} alt="skorost" className='pb-5' />
                            <p className='font-[Montserrat] font-semibold text-[18px] text-[#0154A7]'>Скорость</p>
                        </div>

                        <div className="verifies  ">
                            <img src={Verifies} alt="skorost" className='pb-5' />
                            <p className='font-[Montserrat]  ml-[-15px] font-semibold text-[18px] text-[#0154A7]'>Bезопасность</p>
                        </div>

                        <div className="likes">
                            <img src={Like} alt="skorost" className='pb-5 mt-5' />
                            <p className='font-[Montserrat] font-semibold text-[18px] text-[#0154A7]'>Комфорт <br />и  Удобство</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;