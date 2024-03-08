import React, { useState } from 'react';
import profile from "../assets/profile.png";
import logo from "../assets/logo.png";
import set from "../assets/set.png";
import useAuth from '../hooks/useAuth';

export default function ShowTime4() {
    const { user } = useAuth();
    const [isChecked1, setChecked1] = useState(true);
    const [isChecked2, setChecked2] = useState(true);
    const [isChecked3, setChecked3] = useState(true);
    const [isChecked4, setChecked4] = useState(true);
    const [isChecked5, setChecked5] = useState(true);

    const handleToggle1 = () => {
        setChecked1(!isChecked1);
    };

    const handleToggle2 = () => {
        setChecked2(!isChecked2);
    };

    const handleToggle3 = () => {
        setChecked3(!isChecked3);
    };

    const handleToggle4 = () => {
        setChecked4(!isChecked4);
    };

    const handleToggle5 = () => {
        setChecked5(!isChecked5);
    };

    const myStyle2 = {
        width: "373px",
        height: "816px",
        background: "linear-gradient(180deg, rgba(65,147,204,1) 3%, rgba(143,219,241,1) 10%, rgba(202,242,225,1) 33%, rgba(255,255,255,1) 43%)",
        fontFamily: "'IBM Plex Sans Thai Looped', sans-serif"
    };

    const myStyle3 = {
        background: "linear-gradient(180deg,  rgba(141,217,239,1) 10%, rgba(184,238,215,1) 100%)",
        letterSpacing: '2px',
        lineHeight: '1.2'
    };

    const renderTimeSettingCard = (time, isChecked, handleToggle) => {
        const textColor = isChecked ? '#000000' : '#A29DC3';

        return (
            <div className="card w-[300px] h-[67px] border-opacity-80 shadow-md justify-center items-center m-2 " style={myStyle3}>
                <div className="form-control justify-center items-center ">
                    <div className="flex flex-row items-center justify-start gap-10 ">
                        <p className="font-bold text-2xl" style={{ color: textColor }}>{time}</p>
                        <div className="flex flex-col gap-2 ml-6">
                            <div class="flex items-center space-x-2 text-xs  text-black font-bold ">
                                <p style={{ color: textColor }}>อ</p>
                                <p style={{ color: textColor }}>จ</p>
                                <p style={{ color: textColor }}>อ</p>
                                <p style={{ color: textColor }}>พ</p>
                                <p style={{ color: textColor }}>พฤ</p>
                                <p style={{ color: textColor }}>ศ</p>
                                <p style={{ color: textColor }}>ส</p>
                            </div>
                            <div className="flex items-center space-x-2 text-xs ml-auto">
                                <label className="inline-flex  items-start cursor-pointer ">
                                    <input
                                        type="checkbox"
                                        value=""
                                        className="sr-only peer"
                                        checked={isChecked}
                                        onChange={handleToggle}
                                    />
                                    <div className={`relative w-11 h-6 bg-[#8FDBF1] rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-400 dark:bg-gray-00 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#A29DC3]`}></div>
                                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-w-[373px] min-h-[816px] overflow-hidden flex flex-col justify-center items-center " style={myStyle2} >
            <div className="card  w-[338px] min-h-[680px]  items-center justify-center" >
                <div className=" text-[#483D8B] w-[100px] h-[100px] relative" style={{ alignSelf: 'end', }}>
                    <img src={profile} alt="Logo" className=" gap-4 w-20 h-20 rounded-full ring-1 ring-white" />
                    <div className="set-button absolute bottom-10 right-0 transform -translate-x-1/2 translate-y-1/4">
                        <img src={set} alt="setting" className="rounded-full ring-1 ring-gray-400 w-6 h-6" onClick={(e) => { e.preventDefault(); window.location.href = 'account'; }} />
                    </div>
                    <p className="font-bold">@username</p>
                </div>
                <p className="text-3xl font-bold p-8 text-[#483D8B]">ตั้งค่าการแจ้งเตือน</p>

                {renderTimeSettingCard("08.00", isChecked1, handleToggle1)}
                {renderTimeSettingCard("12.00", isChecked2, handleToggle2)}
                {renderTimeSettingCard("16.00", isChecked3, handleToggle3)}
                {renderTimeSettingCard("20.00", isChecked4, handleToggle4)}
                {renderTimeSettingCard("00.00", isChecked5, handleToggle5)}

            </div>
            <footer className="footer flex items-center justify-between p-4 text-neutral-content">
                <aside className="items-center grid-flow-col">
                    <a href="#" className="label-text-start link link-hover ml-auto text-xl text-[#483D8B]" onClick={(e) => { e.preventDefault(); window.location.href = 'settingnotictype'; }}>
                        กลับ
                    </a>
                </aside>
                <img src={logo} alt="Logo" className="rounded-lg grid-flow-col gap-4 md:place-self-center md:justify-self-end w-26 h-20" />
            </footer>
        </div>
    );
}
