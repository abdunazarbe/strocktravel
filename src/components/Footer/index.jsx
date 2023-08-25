import React from "react"
import Locationn from '../../assetss/icons/Icon (1).svg'
import Alt from '../../assetss/icons/alt.svg'
import Mail from '../../assetss/icons/mail.svg'
import Facebook from '../../assetss/icons/facebook black.1.svg'
import Twitter from '../../assetss/icons/twitter black.1.svg'
import Youtoube from '../../assetss/icons/youtube color.1.svg'
import Instagram from '../../assetss/icons/instagram black.1.svg'
const index = () => {
    return (
        <footer className="mt-[80px] bg-[#F7F7F7] h-fit pb-10 ">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between pt-[60px]">
                    <div className="">
                        <h1 className="text-[22px] md:text-2xl text-center mb-5 font-bold text-[#0154A7]">
                            STORK TOUR
                        </h1>
                    </div>
                    <ul className="flex md:flex-col gap-[25px] flex-wrap mb-[35px]">
                        <li className="text-base md:text-[18px]   hover:text-blue-700  font-medium text-[#1E1E1ECC]">
                            Главная
                        </li>
                        <li className="text-base md:text-[18px]   hover:text-blue-700  font-medium text-[#1E1E1ECC]">
                            О компании
                        </li>
                        <li className="text-base md:text-[18px] hover:text-blue-700 font-medium text-[#1E1E1ECC]">
                            Путешествия
                        </li>
                        <li className="text-base md:text-[18px]   hover:text-blue-700  font-medium text-[#1E1E1ECC]">
                            Отзывы
                        </li>
                        <li className="text-base md:text-[18px]    hover:text-blue-700  font-medium text-[#1E1E1ECC]">
                            Контакты
                        </li>
                    </ul>
                    <div className="block ">
                        <p className="font-[Montserrat] text-[18px] pb-[10px]   hover:text-blue-700  font-semibold text-[#1E1E1ECC]">Контактные данные</p>
                        <div className="flex pb-9 mt-5">
                            <img src={Locationn} alt="" />
                            <p className=" font-[Montserrat] ml-4 text-base md:text-[18px]    hover:text-blue-700  font-semibold text-[#1E1E1ECC]">Адрес:</p>
                            <p className=" font-[Montserrat] ml-4 text-base md:text-[18px]    border-b-2 border-transparent cursor-pointer hover:border-blue-700  font-medium text-[#1E1E1ECC]">Company adress</p>
                        </div>
                        <div className="flex pb-9">
                            <img src={Alt} alt="" />
                            <p className=" font-[Montserrat] ml-2 text-base md:text-[18px]    hover:text-blue-700  font-semibold text-[#1E1E1ECC] ">Телефон номер:</p>
                            <p  className=" font-[Montserrat] ml-4 text-base md:text-[18px]    border-b-2 border-transparent cursor-pointer hover:border-blue-700  font-medium text-[#1E1E1ECC]">+998 90 123 45 67</p>
                        </div>
                        <div className="flex pb-5">
                            <img src={Mail} alt="" />
                            <p className=" font-[Montserrat] ml-2 text-base md:text-[18px]    hover:text-blue-700  font-semibold text-[#1E1E1ECC]">Эл.почта:</p>
                            <p  className=" font-[Montserrat] ml-4 text-base md:text-[18px]    border-b-2 border-transparent cursor-pointer hover:border-blue-700  font-medium text-[#1E1E1ECC]">companymail@gmail.com</p>
                        </div>
                    </div>
                    <div className="block  ">
                         <h3 className="font-[Montserrat] text-base md:text-[18px]    hover:text-blue-700  font-semibold text-[#1E1E1ECC]">Социальные сети</h3>
                        <div className=" flex gap-x-[10px] mt-[30px] ">
                          <img src={Twitter} alt="" /> 
                          <img src={Facebook} alt="" />
                          <img src={Youtoube} alt="" />
                          <img src={Instagram} alt="" />
                           

                        </div>
                    </div>

                    <p className="md:text-center mt-10 md:mt-20 text-sm text-[#1E1E1E] font-[Montserrat]">Авторские права © 2023 • Все правы защищены.</p>
                </div>

            </div>

        </footer>
    );
};

export default index;