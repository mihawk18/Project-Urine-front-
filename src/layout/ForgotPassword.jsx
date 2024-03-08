// import axios from 'axios';
import profile from "../assets/profile.png";
import logo from "../assets/logo.png";
import set from "../assets/set.png";
import useAuth from '../hooks/useAuth';
import React from 'react';




export default function ForgotPassword() {
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
                <p className="text-3xl font-bold p-8 text-[#483D8B]">ลืมรหัสผ่าน</p>
                <div className="card w-[300px] min-h-[360px] border-opacity-80 shadow-lg flex justify-center items-center bg-[#FFFF] " >
                    <div className="form-control text-center font-bold  flex justify-center items-center ">
                        <p className="gap-2 p-2 text-xl  text-[#483D8B] font-bold ">โปรดระบุอีเมลล์ของคุณเพื่อ <br />
                            ทำการตั้งค่ารหัสผ่าน <br />
                        </p>
                        <div className="form-control  py-10 text-[#483D8B] flex justify-center items-center ">
                            <input
                                type="text"
                                placeholder="อีเมล์ของคุณ..."
                                name=" email"
                                className="input text-1.5xl bg-[#CAF2E1] placeholder-[#483D8B] text-[#483D8B] w-[260px] "
                                required
                            />
                        </div>
                        <button
                            style={{ margin: '2px' }}
                            type="submit"
                            className="btn bg-[#483D8B] hover:bg-[#800080] text-white text-sm tracking-[0.1rem] font-medium border-0">
                            ยืนยันส่งข้อมูลไปยังอีเมล์
                        </button>
                    </div>
                </div>
            </div>
            <footer className="footer flex items-center justify-between p-4 text-neutral-content">
                <aside className="items-center grid-flow-col">
                    <a href="#" className="label-text-start link link-hover ml-auto text-xl text-[#483D8B]" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}>
                        กลับ
                    </a>
                </aside>
                <img src={logo} alt="Logo" className="rounded-lg grid-flow-col gap-4 md:place-self-center md:justify-self-end w-26 h-20" />
            </footer>
        </div>
    );
}
