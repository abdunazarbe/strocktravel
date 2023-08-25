import React from 'react';
import './style.scss'
import Atptour from '../../../assetss/icons/ATPTOUR.svg'
import Infinityy from '../../../assetss/icons/iNfinity.svg'
import Oregon from  '../../../assetss/icons/oregon.svg'
import Responsibilite from  '../../../assetss/icons/responsible.svg'
import Travelka from  '../../../assetss/icons/travelka.svg'
import Secondimg from '../../../assetss/icons/groupsecond.svg'

const Second = () => {
    return (
        <section className='mt-[80px]' >
            <div className="container">
                <div className="logos  items-center flex  justify-between ">
                    <img src={Atptour} alt="atptour" className='logosimg'/>
                    <img src={Infinityy} alt="infinity"  className='logosimg' />
                    <img src={Oregon} alt="oregon"   className='logosimg'/>
                    <img src={Responsibilite} alt="r"  className='logosimg' />
                    <img src={Travelka} alt="atptour"  className='logosimg hidden md:flex' />
                </div>
                <div className="second_img h-[500px] mt-16 md:mt-[148px] w-full grid place-content-center">
                    <img src={Secondimg} alt="second" />
                </div>
            </div>
        </section>
    );
};

export default Second;