import { NavLink } from 'react-router-dom';
import Select from '../Select'
import { useState } from 'react';
import React from 'react';
import { Drawer } from 'antd';

import "./style.scss";
const index = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <header className='w-full absolute top-0 z-30'>
            <div className="container">
                <nav className="nav flex items-center  justify-between pt-[30px] ">
                    <p className="text-[18px] pb-[1px] border-b-2 border-transparent cursor-pointer  hover:border-blue-700 leading-[48px] font-extrabold text-[#fff]">STORK TOUR</p>
                    <ul className="font-[Montserrat] gap-x-[50px] text-[18px] text-[#fff] font-semibold hidden lg:flex">
                        <NavLink to="/" className='pb-[1px] border-b-2 border-transparent cursor-pointer hover:border-blue-700 '>Главная</NavLink>
                        <NavLink to="/about" className='pb-[1px] border-b-2 border-transparent cursor-pointer hover:border-blue-700'>О компании</NavLink>
                        <NavLink to="/travel" className='pb-[1px] border-b-2 border-transparent cursor-pointer hover:border-blue-700'>Путешествия</NavLink>
                        <NavLink to="/feedbacks" className='pb-[1px] border-b-2 border-transparent cursor-pointer hover:border-blue-700'>Отзывы</NavLink>
                        <NavLink to="/contacts" className='pb-[1px] border-b-2 border-transparent cursor-pointer hover:border-blue-700'>Контакты</NavLink>

                    </ul>
                    <Select />
                    <i className='bx bx-menu lg:hidden text-white text-3xl' onClick={showDrawer}></i>
                </nav>

            </div>
            <div>
                <Drawer title="" placement="right" onClose={onClose} open={open}>
                    <p className="text-[18px] pb-[1px] border-b-2 border-transparent cursor-pointer  hover:border-blue-700 leading-[48px] text-blue-600 font-extrabold">STORK TOUR</p>
                    <ul className="font-[Montserrat] gap-x-[50px] text-[18px] font-semibold flex flex-col">
                        <NavLink to="/" className='pb-[1px] border-b-2 border-transparent cursor-pointer hover:border-blue-700 '>Главная</NavLink>
                        <NavLink to="/about" className='pb-[1px] border-b-2 border-transparent cursor-pointer hover:border-blue-700'>О компании</NavLink>
                        <NavLink to="/travel" className='pb-[1px] border-b-2 border-transparent cursor-pointer hover:border-blue-700'>Путешествия</NavLink>
                        <NavLink to="/feedbacks" className='pb-[1px] border-b-2 border-transparent cursor-pointer hover:border-blue-700'>Отзывы</NavLink>
                        <NavLink to="/contacts" className='pb-[1px] border-b-2 border-transparent cursor-pointer hover:border-blue-700'>Контакты</NavLink>

                    </ul>
                    <Select />
                </Drawer>
            </div>

        </header>
    );
};

export default index;