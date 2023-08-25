import React from 'react';
import './style.scss'
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <div className='cardd min-w-[246px] md:min-w-[400px] md:h-[500px] rounded-xl pt-[100px] md:pt-[340px] pl-5 md:pl-[50px] pb-5'>
            <Link to='/hazratiImam' className='font-[ Montserrat] h-[63px] leading-[30px]  text-[#fff] text-base md:text-[24px] font-medium  pb-[1px] border-b-2 border-transparent cursor-pointer hover:border-white '>Комплекс Хазрати <br /> Имам</Link>
        </div>
    );
};

export default Card;