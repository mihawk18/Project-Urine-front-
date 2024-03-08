// import axios from 'axios';
import profile from "../assets/profile.png";
import logo from "../assets/logo.png";
import bell from "../assets/bell.png";
import set from "../assets/set.png";
import useAuth from '../hooks/useAuth';
import React from 'react';





export default function Setting() {
    const { user } = useAuth();
  



    const myStyle2 = {
        width: "373px",
        height: "816px",
        background: "linear-gradient(180deg, rgba(65,147,204,1) 3%, rgba(143,219,241,1) 10%, rgba(202,242,225,1) 33%, rgba(255,255,255,1) 43%)",
        fontFamily: "'IBM Plex Sans Thai Looped', sans-serif"
    };
    const myStyle5 = {

        background: "linear-gradient(180deg,rgba(143,219,241,1) 20%, rgba(202,242,225,1) 60%, rgba(255,255,255,1) 100%"

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
                <p className="text-3xl font-bold p-8 text-[#483D8B]">ตั้งค่าการแจ้งเตือน</p>
                <div className="card w-[300px] h-[200px] border-opacity-80 shadow-lg justify-center items-center" style={myStyle5}>
                    <div className="form-control  ">
                        <button
                            style={{ margin: '10px' }}
                            type="submit"
                            className=" btn bg-[#483D8B] hover:bg-[#800080] text-white text-2xl tracking-[0.1rem] font-medium border-0" onClick={(e) => { e.preventDefault(); window.location.href = 'settingnotictype'; }}>
                            ตั้งอัตโนมัติ
                        </button>
                        <button
                            style={{ margin: '10px' }}
                            type="submit"
                            className="btn bg-[#483D8B] hover:bg-[#800080] text-white text-2xl tracking-[0.1rem] font-medium border-0" onClick={(e) => { e.preventDefault(); window.location.href = 'time'; }}>
                            ตั้งด้วยตัวเอง
                        </button>
                    </div>
                </div>
                <div className="flex items-center m-5 font-bold cursor-pointer" style={{ alignSelf: 'end', }} onClick={(e) => { e.preventDefault(); window.location.href = 'history'; }}>
                    <img src={bell} alt="bell" className=" w-6 h-6" />
                    <p href="#" className="ml-1 text-[#F02525]" >ตั้งตามประวัติ!!</p>
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
