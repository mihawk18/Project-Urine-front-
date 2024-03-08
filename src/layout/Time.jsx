// import axios from 'axios';
import profile from "../assets/profile.png";
import logo from "../assets/logo.png";
import date from "../assets/date.png";
import set from "../assets/set.png";
import useAuth from '../hooks/useAuth';
import React, { useState } from 'react';
import moment from 'moment'; //;วันที่
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; //นำเข้าไลบาลี่ปฎิธิน
import {TimePicker}  from 'react-ios-time-picker';
import '../styles/react-ios-time-picker.css';






export default function TimeForm() {





    const currentDate = new Date();
    const formattedDate = `วันนี้-${currentDate.toLocaleDateString('th-TH', { day: 'numeric', month: 'short' })}`;


    const myStyle6 = {
        width: "373px",
        height: "816px",
        background: "linear-gradient(180deg, rgba(65, 147, 204, 1)10%, rgba(143, 219, 241, 1)70%,rgba(133, 236, 192, 1)100%",
        fontFamily: "'IBM Plex Sans Thai Looped', sans-serif"
    };
    const myStyle3 = {
        background: "linear-gradient(180deg,  rgba(141,217,239,1) 10%, rgba(184,238,215,1) 100%)",
        letterSpacing: '2px',
        lineHeight: '1.2'
    };
    //นาฬีกาปลุก

    const [selectedDate, setSelectedDate] = useState(null);
    const [alarmName, setAlarmName] = useState('');
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [value, setValue] = useState('00:00');
    const [showCalendar, setShowCalendar] = useState(false);

    const handleLinkClick = () => {
        setShowCalendar(!showCalendar);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setShowCalendar(false);
    };

    const onChange = (timeValue) => {
        setValue(timeValue);
    }

    const handleAlarmNameChange = (event) => {
        setAlarmName(event.target.value);
    };

    const handleSoundToggle = () => {
        setSoundEnabled(!soundEnabled);
    };


    const [showAlarmSettings, setShowAlarmSettings] = useState(false);  // เพิ่ม state เพื่อเปิด/ปิดสถานะเวลาที่ตั้งปลุก

    // ... (โค้ดที่เดิม)

    const handleCancelClick = () => {
        // จัดการตรงนี้เพื่อยกเลิก
        setShowAlarmSettings(false);  // เพิ่ม line นี้เพื่อปิดตัวเลือกตั้งเวลา
    };


    const handleSaveClick = () => {
        // ทำตามขั้นตอนที่ต้องการบันทึกข้อมูล
        const savedData = {
            selectedDate,
            alarmName,
            soundEnabled,
            value,

        };



        // หลังจากนั้นจึงเปลี่ยนหน้าไปที่ 'showtime'
        window.location.href = 'showtime';
    };

    return (
        <div className="min-w-[373px] min-h-[816px] overflow-hidden flex flex-col justify-center items-center " style={myStyle6} >
            <div className="card w-[338px] min-h-[680px] items-center justify-center" >
                <div className=" text-[#483D8B] w-[100px] h-[100px] relative" style={{ alignSelf: 'end', }}>
                    <img src={profile} alt="Logo" className=" gap-4 w-20 h-20 rounded-full ring-1 ring-white" />
                    <div className="set-button absolute bottom-10 right-0 transform -translate-x-1/2 translate-y-1/4">
                        <img src={set} alt="setting" className="rounded-full ring-1 ring-gray-400 w-6 h-6" onClick={(e) => { e.preventDefault(); window.location.href = 'account'; }} />
                    </div>
                    <p className="font-bold">@Username</p>
                </div>
                <p className="text-3xl font-bold p-8 flex text-[#483D8B] ">ตั้งค่าการแจ้งเตือน</p>
                <div className="card w-[300px] h-[300px] border-opacity-80 flex justify-center items-center m-10 ">
                    <div className="form-control  ">
                        <div className="m-4 text-[#483D8B] text-xl  font-bold" >
                            <div className="" >
                                <TimePicker
                                    onChange={onChange}
                                    value={value}
                                    className=""

                                />
                            </div>
                        </div>
                    </div>

                    <div className="card w-[300px] h-[67px] border-opacity-80  justify-center items-center m-4 " >
                        <div className="form-control justify-center items-center ">
                            <div className="flex flex-row items-center justify-between gap-40 p-2 ">
                                <p className=" text-sm   text-[#483D8B]  font-bold">
                                    {formattedDate}
                                </p>
                                <div className="flex items-center space-x-2 text-xs ml-auto">
                                    <img
                                        src={date}
                                        alt="Logo"
                                        className=" gap-4 w-6 h-6 "
                                        onClick={handleLinkClick}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-2 p-2 text-[#535098] font-bold flex-row">

                            <div className=" flex gap-2 ">
                                <button
                                    className="bg-[#FF0000] w-8 h-8 rounded-full text-sm border border-white ring-1 ring-white"

                                >
                                    อ
                                </button>
                                <button
                                    className="bg-[#F6F889] w-8 h-8 rounded-full text-sm shadow-md border border-white ring-1 ring-white"

                                >
                                    จ
                                </button>
                                <button className="bg-[#EEADD4]  w-8 h-8 rounded-full text-sm border border-white ring-1 ring-white"
                                >
                                    อ
                                </button>
                                <button className="bg-[#C8F1A7] w-8 h-8 rounded-full text-sm border border-white ring-1 ring-white"
                                >
                                    พ
                                </button>
                                <button className="bg-[#EB9C3F] w-8 h-8 rounded-full text-sm border border-white ring-1 ring-white"
                                >
                                    พฤ
                                </button>
                                <button className="bg-[#7CC8F0]  w-8 h-8  rounded-full text-sm border border-white ring-1 ring-white"
                                >
                                    ศ
                                </button>
                                <button className="bg-[#A29DC3]  w-8 h-8  rounded-full text-sm border border-white ring-1 ring-white"
                                >
                                    ส
                                </button>
                            </div>
                        </div>
                        {showCalendar && (
                            <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', zIndex: '9999' }}>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    inline
                                />
                                <button onClick={() => setShowCalendar(false)} className="text-[#483D8B] font-medium text-lg">ปิดปฏิทิน</button>
                            </div>
                        )}
                    </div>
                    <div className="card w-[300px] h-[86px] border-opacity-80 shadow-md  justify-center items-center m-2 " style={myStyle3}>
                        <div className="flex flex-row items-center justify-start gap-10 ">
                            <input
                                type="text"
                                className=" card w-[260px] h-[86px] border-b   border-[#483D8B] text-[#483D8B] focus:outline-none bg-transparent text-xl font-medium  placeholder-[#483D8B] tracking-[0.1rem] "
                                placeholder="ชื่อการปลุก"
                                name="alarmName"
                                value={alarmName}
                                onChange={handleAlarmNameChange}
                            />
                        </div>
                    </div>
                    <div className="card w-[300px] h-[86px] border-opacity-80 shadow-md flex justify-center items-center m-2 " style={myStyle3}>
                        <div className="form-control justify-center items-center ">
                            <div className="flex flex-row items-center justify-start gap-10 w-[260px] h-[86px] ">
                                <span className=" text-xl font-medium  text-[#483D8B] ">เสียงการเตือน</span>
                                <div className="flex flex-col gap-2 ml-6">
                                    <div className="flex items-center space-x-2 text-xs ml-auto">
                                        <label className="inline-flex  items-start cursor-pointer ">
                                            <input
                                                type="checkbox"
                                                checked={soundEnabled}
                                                onChange={handleSoundToggle}
                                                className="sr-only peer"
                                            />
                                            <div className={`relative w-11 h-6 bg-[#8FDBF1] rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-400 dark:bg-gray-00 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#A29DC3]`}></div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex items-center gap-10 p-2">
                        <button
                            className="btn ml-auto text-lg text-[#483D8B] bg-transparent hover:bg-transparent shadow-transparent "
                            onClick={handleCancelClick}
                        >
                            ยกเลิก
                        </button>
                        <button
                            className="btn ml-auto text-lg text-[#483D8B] bg-transparent hover:bg-transparent shadow-transparent"
                            type="submit"
                            onClick={handleSaveClick}
                        >
                            บันทึก
                        </button>
                    </div>
                </div>
            </div>

            <footer className="footer flex items-center justify-between p-4 text-neutral-content">
                <aside className="items-center grid-flow-col">
                    <a href="#" className="label-text-start link link-hover ml-auto text-xl text-[#483D8B]" onClick={(e) => { e.preventDefault(); window.location.href = 'setting'; }}>
                        กลับ
                    </a>
                </aside>
                <img src={logo} alt="Logo" className="rounded-lg grid-flow-col gap-4 md:place-self-center md:justify-self-end w-26 h-20" />
            </footer>
        </div>
    );
}
