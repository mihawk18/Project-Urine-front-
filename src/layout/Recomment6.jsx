// import axios from 'axios';
import logo from "../assets/logo.png";
import useAuth from '../hooks/useAuth';
import React from 'react';

// import { useNavigate } from 'react-router-dom';



export default function Recomment6() {
    const { user } = useAuth();
  


    const myStyle = {
        width: "373px",
        height: "816px",
        background: "linear-gradient(180deg, rgba(124,200,240,1) 3%, rgba(141,217,239,1) 70%, rgba(184,238,215,1) 100%)",
        fontFamily: "'IBM Plex Sans Thai Looped', sans-serif"
    };
    const myStyle4 = {

        background: "linear-gradient(180deg, rgba(255, 255, 255, 1) 1%, rgba(150, 219, 241, 1)40%"

    };


    return (
        <div className="min-w-[373px] min-h-[816px] overflow-hidden flex flex-col justify-center items-center " style={myStyle} >
            <div className="card  w-[338px] min-h-[680px]  justify-center " >
                <div className="card w-[338px] h-[500px] border-opacity-80 items-center " style={myStyle4}>

                    <div className="text-center  text-[#483D8B]  ">
                        <p className="text-3xl font-bold p-8">คำแนะนำ</p>
                    </div>
                    <div><p className="text-2xl p-10 text-[#483D8B] font-medium">ปัสสาวะ เร็วกว่า<br /> 4 ชั่วโมง / ครั้ง</p></div>
                    <div className="form-control p-10">
                        <button
                            type="submit"
                            className="btn bg-[#483D8B] hover:bg-[#800080] text-white text-2xl tracking-[0.1rem] font-medium border-0" onClick={(e) => { e.preventDefault(); window.location.href = 'setting'; }}>
                            ตั้งค่าแจ้งเตือน
                        </button>
                    </div>
                </div>
            </div>
            <footer className="footer flex items-center justify-between p-4 text-neutral-content">
                <aside className="items-center grid-flow-col">
                    <a href="#" className="label-text-start link link-hover ml-auto text-xl text-[#483D8B]" onClick={(e) => { e.preventDefault(); window.location.href = 'welcome'; }} >
                        กลับ
                    </a>
                </aside>
                <img src={logo} alt="Logo" className="rounded-lg grid-flow-col gap-4 md:place-self-center md:justify-self-end w-26 h-20" />
            </footer>
        </div>


    );
}
