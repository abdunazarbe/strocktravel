import React from 'react'
import { Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom';
import Vector from '../../assetss/icons/Vector.svg'
import './style.scss'
import Imam1 from '../../assetss/images/imam1.jpg'
import Imam2 from '../../assetss/images/imam2.jpg'
import Map from '../../assetss/images/Rectangle 28.jpg'
import Footer from "../../components/Footer"
import Modalpng from '../../assetss/images/modal.png'
import Modalsvg from '../../assetss/icons/modalicon.svg'
import { useState } from 'react';
import { Modal } from 'antd';



const index = () => {
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
        <section>
            <div className="container">
                <Breadcrumb className='py-4' items={[
                    {
                        title: (
                            <NavLink
                                to="/"
                            >
                                Главная
                            </NavLink>
                        ),
                    },
                    {
                        title: (
                            <NavLink
                                to="../Xarazm"
                            >
                                Xarazm
                            </NavLink>
                        ),
                    },]}
                />

                <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                    <p className='mb-[50px] text-center mt-5 text-[#0154A7] text-2xl font-semibold'>Связаться с нами</p>
                    <div className="flex flex-col items-center text-center gap-y-5 relative">

                        <input type="text" placeholder='Имя' className='w-full p-[18px] text-xl text-[#1e1e1e] font-semibold font-[Montserrat] bg-[#f9f9f9] rounded-[14px] border-2 border-[#0154a7]' />
                        <input type="text" placeholder='Номер телефона' className='w-full p-[18px] text-xl text-[#1e1e1e] font-semibold font-[Montserrat] bg-[#f9f9f9] rounded-[14px] border-2 border-[#0154a7]' />
                        <textarea placeholder='Сообщение' className='w-full h-[200px] rounded-[14px] border-2 border-[rgba(30,30,30,0.18)] p-5 mb-10'></textarea>
                        <button className='w-full py-[18px] rounded-[14px] bg-[#0154A7] text-white text-base font-semibold font-[Montserrat] absolute bottom-[-40px] z-30' onClick={handleOk}>Отправка</button>
                    </div>
                </Modal>

                <div className="block w-full mt-[100px]">
                    <h1 className=" titlle pb-0 text-[#1E1E1E] font-[Montserrat] text-4xl font-semibold 0 ">Хорезм – загадочный край</h1>
                    <div className="pictures w-full h-fit mt-[60px] flex justify-between gap-x-5 mb-4">
                        <div className="first lg:h-[300px] lg:pb-[100px] h-[600px] w-[800px] rounded-md grid place-content-center">
                            <img src={Vector} alt="" />
                        </div>

                        <div className="pics  hidden lg:flex mr-[500px] w-[290px] h-fit">
                            <img src={Imam1} alt="" className='pb-[15px]' />
                            <img src={Imam2} alt="" />
                            <img src={Map} alt="" className=' ml-[320px] mt-[-400px] h-[400px] w-[300px] ' />
                        </div>




                    </div>
                    <br />
                    <br />
                    <hr />
                    <div className="textss mx-auto p-4 mt-10 md:mt-[150px]">
                        <h1 className="font-[Montserrat] text-2xl font-semibold leading-8 text-[#1E1E1E] pb-[1px] border-b-2 border-transparent cursor-pointer hover:border-blue-700">Комплекс Хазрати Имам</h1>
                        <div className="font-[Montserrat] text-lg font-semibold leading-7 pb-[1px] border-b-2 border-transparent cursor-pointer hover:border-blue-700">
                            <p>Время: <span className='text-[#0154A7] pb-[1px] border-b-2 border-transparent cursor-pointer hover:border-blue-700'>4 день</span> </p>
                        </div>
                        <p className="font-[Montserrat] text-lg font-semibold leading-7 pb-[1px] border-b-2 border-transparent cursor-pointer hover:border-blue-700">Цена: <span className='text-[#0154A7]'>120$</span></p>
                        <div className="w-full h-fit mt-8">
                            <p className="font-[Montserrat] text-base font-semibold leading-6 pb-[1px] border-b-2 border-transparent cursor-pointer hover:border-blue-700">
                                Ансамбль Хазрати Имам (узб. Hazrati Imom majmuasi) — религиозный комплекс в Ташкенте. <br />  Ансамбль был возведен около могилы имама города Ташкента, ученого, знатока Корана и хадисов, одного из первых проповедников ислама в Ташкенте, поэта и ремесленника Хазрати Имама (полное его имя — Абу Бакр ибн Исмаил аль-Каффал аш-Шоший). Согласно историческим источникам он был также мастером по изготовлению замков и ключей за что получил прозвище «Каффаль», что означает «Замочник», владел 72 языками и перевел Ветхий Завет (Тору) на арабский язык[1]. <br />
                                Кроме сооружений здесь находится библиотека восточных рукописей и Коран халифа Усмана. <br />
                                В Коране 353 пергаментных листа большого размера. Поначалу Коран находился в Медине, потом в Дамаске и Багдаде. Из Багдада в Самарканд Коран был перевезён Тамерланом. В 1869 году Коран Усмана был вывезен в Санкт-Петербург, где доказали его подлинность. Оттуда Коран передали в Уфу, а уже после этого Коран Усмана был перевезен в Ташкент. <br />
                                Коран Усмана, хранящийся в Ташкенте, является единственной из сохранившихся оригинальной рукописью Корана. Об этом свидетельствует сертификат, выданный Международной организацией ЮНЕСКО 28 августа 2000 года[2].  <br />
                                Строительство Ансамбля Хазрати Имам было окончено в 2007 году. Ансамбль состоит из следующих зданий:
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center w-full justify-end">
                    <img src={Modalpng} alt="" className='mText' />
                    <img src={Modalsvg} alt="" className='mBtn' onClick={setIsModalOpen} />
                </div>

            </div>

            <Footer />

        </section>
    )
}


export default index