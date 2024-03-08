// import axios from 'axios';
import profile from "../assets/profile.png";
import logo from "../assets/logo.png";
import set from "../assets/set.png";
import useAuth from '../hooks/useAuth';
import React from 'react';





export default function History() {
    const { user } = useAuth();
 


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



    return (
        <div className="min-w-[373px] min-h-[816px] overflow-hidden flex flex-col justify-center items-center " style={myStyle2} >
            <div className="card  w-[338px] min-h-[680px]  items-center justify-center" >
                <div className=" text-[#483D8B] w-[100px] h-[100px] relative" style={{ alignSelf: 'end', }}>
                    <img src={profile} alt="Logo" className=" gap-4 w-20 h-20 rounded-full ring-1 ring-white" />
                    <div className="set-button absolute bottom-10 right-0 transform -translate-x-1/2 translate-y-1/4">
                        <img src={set} alt="setting" className="rounded-full ring-1 ring-gray-400 w-6 h-6" onClick={(e) => { e.preventDefault(); window.location.href = 'account'; }} />
                    </div>
                    <p className="font-bold">@Username</p></div>
                <p className="text-3xl font-bold p-8 text-[#483D8B]">ประวัติการตั้งค่า</p>
                <div className="card w-[300px] min-h-[360px] border-opacity-80 shadow-lg flex justify-center items-center  " style={myStyle3}>
                    <div className="form-control text-center font-bold  flex justify-center items-center ">
                        <table className="w-[260px] border-collapse mb-2">
                            <thead>
                                <tr>
                                    <th className="border-2 border-black text-center py-2 px-4 bg-[#473B8F] text-white ">เดือน</th>
                                    <th className="border-2 border-black text-center py-2 px-4 bg-[#473B8F] text-white ">ชั่วโมง/ครั้ง</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-2  border-black text-center py-2 px-4 bg-[#A29DC3] text-black ">มกราคม</td>
                                    <td className="border-2  border-black text-center py-2 px-4 bg-[#A29DC3] text-black " >  0</td>
                                </tr>
                                <tr>
                                    <td className="border-2  border-black text-center py-2 px-4 bg-[#A29DC3] text-black ">กุมภาพันธ์</td>
                                    <td className="border-2  border-black text-center py-2 px-4 bg-[#A29DC3] text-black ">0</td>
                                </tr>
                                <tr>
                                    <td className="border-2  border-black text-center py-2 px-4 bg-[#A29DC3] text-black ">มีนาคม</td>
                                    <td className="border-2  border-black text-center py-2 px-4 bg-[#A29DC3] text-black ">0</td>
                                </tr>
                            </tbody>
                        </table>

                        <p className="gap-2 p-2 text-base  text-[#483D8B] font-bold ">ตั้งเวลาเฉลี่ยที่ <br />
                            0 ชั่วโมง/ครั้ง <br />
                            ในระยะเวลา  3 เดือนย้อนหลัง</p>
                        <button
                            style={{ margin: '10px' }}
                            type="submit"
                            className="btn bg-[#483D8B] hover:bg-[#800080] text-white text-2xl tracking-[0.1rem] font-medium border-0" onClick={(e) => { e.preventDefault(); window.location.href = 'setting'; }}>
                            ตั้งเวลาด้วยตัวเอง
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
