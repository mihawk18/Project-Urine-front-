import water from "../assets/water.png";

import React from 'react';




export default function WaterForm() {
 



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
        <div className="min-w-[373px] min-h-[816px] overflow-hidden flex flex-col" style={myStyle2}>
            <div className="hero-content flex-col flex-auto rounded-full ring-1 ring-white">
                <img src={water} alt="Logo" className="max-w-sm " />
                <div>
                    <p className="text-[#483D8B] font-bold text-2xl p-4" >
                        ปริมาณน้ำที่ดื่ม
                    </p>
                </div>
                <div>
                    <p className="text-[#483D8B]  text-center p-3 " >
                        กรณีที่เป็นเครื่องดื่มแอลกอฮอล์ ชา กาแฟ น้ำอัดลม และเครื่องดื่มชูกำลัง  ผลไม้ที่มีกรด และน้ำผลไม้  ให้เลือกเป็นการดื่มน้ำมากกว่าปกติ
                    </p>
                </div>
                <div className="card shrink-0 w-full max-w-sm bg-white bg-opacity-25  border-[#FFFFFF] border-opacity-40 items-center ">
                    <form className="card-body ">
                        <div className="form-control text-center" style={{ justifyContent: 'space-between', gap: '20px', width: '240px'  }}>
                            <button className="btn   text-[#483D8B] font-bold border-2 border-[#FFFFFF] border-opacity-40" onClick={(e) => { e.preventDefault(); window.location.href = 'recomment'; }} style={myStyle3}>
                                <p>ปกติ<br />(8-10แก้ว/วัน)</p></button>
                            <button className="btn  text-[#483D8B] font-bold border-2 border-[#FFFFFF] border-opacity-40" onClick={(e) => { e.preventDefault(); window.location.href = 'recomment2'; }} style={myStyle3}>
                                <p>น้อย<br />(น้อยกว่า8แก้ว/วัน)</p> </button>
                            <button className="btn  -center text-[#483D8B] font-bold border-2 border-[#FFFFFF] border-opacity-40" onClick={(e) => { e.preventDefault(); window.location.href = 'recomment3'; }} style={myStyle3}>
                                <p>มาก<br />(เกิน10แก้ว/วัน)</p></button>
                        </div>
                    </form>
                </div>
            </div>
            <footer className="footer items-center p-4 text-neutral-content flex flex-row justify-between">
                <aside className="items-center grid-flow-col">
                    <a href="#" className="label-text-start link link-hover ml-auto text-xl text-[#483D8B]" onClick={(e) => { e.preventDefault(); window.location.href = 'welcome'; }}>
                        กลับ
                    </a>
                </aside>
            </footer>
        </div>
    );
}
