// import axios from 'axios';
import profile from "../assets/profile.png";
import set from "../assets/set.png";
import useAuth from '../hooks/useAuth';
import React from 'react';





export default function WelcomeForm() {
  const { user } = useAuth();



  const myStyle = {
    width: "373px",
    height: "816px",
    background: "linear-gradient(180deg, rgba(124,200,240,1) 3%, rgba(141,217,239,1) 70%, rgba(184,238,215,1) 100%)",
    fontFamily: "'IBM Plex Sans Thai Looped', sans-serif"
  };

  return (
    <div className="min-w-[373px] min-h-[816px] overflow-hidden flex flex-col" style={myStyle}>
      <div className="hero-content flex-col flex-auto relative">
        <div className="w-[130px] h-[130px] relative">
          <img src={profile} alt="Logo" className="max-w-sm rounded-full ring-1 ring-white" />
          <div className="set-button absolute bottom-6 right-0 transform -translate-x-1/4 translate-y-1/2">
            <img src={set} alt="setting" className="rounded-full ring-1 ring-gray-400 w-6 h-6" onClick={(e) => { e.preventDefault(); window.location.href = 'account'; }} />
          </div>
        </div>
        <div>
          <p className="text-[#483D8B] font-bold text-2xl p-4" >
            ยินดีต้อนรับ
          </p></div>
        <div className="card shrink-0 w-full max-w-sm bg-white bg-opacity-25 border-2 border-[#FFFFFF] border-opacity-40">
          <form className="card-body ">

            <div className="form-control py-2  text-[#483D8B] text-center  font-bold">
              ความสามารถในการควบคุมการขับถ่ายปัสาวะได้ปกติหรือไม่
            </div>
            <div className="form-control" style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <button className="btn bg-[#483D8B] hover:bg-[#800080] text-white border-2 border-[#FFFFFF] border-opacity-40 rounded-3xl " onClick={(e) => { e.preventDefault(); window.location.href = 'water0'; }}>ปกติ</button>
              <button className="btn bg-[#483D8B] hover:bg-[#800080] text-white font-bold border-2 border-[#FFFFFF] border-opacity-40 rounded-3xl" onClick={(e) => { e.preventDefault(); window.location.href = 'water1'; }}>ไม่ปกติ</button>
            </div>
          </form>
        </div>
      </div>
      <footer className="footer items-center p-4 text-neutral-content flex flex-row justify-between">
        <aside className="items-center grid-flow-col">
          <a href="#" className="label-text-start link link-hover ml-auto text-xl text-[#483D8B]" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}>
            กลับ
          </a>
        </aside>
      </footer>
    </div>
  );
}
