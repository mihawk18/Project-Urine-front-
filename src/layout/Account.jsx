// import axios from 'axios';
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import useAuth from '../hooks/useAuth';
import React from 'react';





export default function AccountForm() {
    const { user } = useAuth();
   
    const handleSaveClick = () => {
        // ทำตามขั้นตอนที่ต้องการบันทึกข้อมูล
        const savedData = {
            // username: '',
            // birthdate: '',
            // email: '',
            // password: '',
        };



        // หลังจากนั้นจึงเปลี่ยนหน้าไปที่ 'showtime'
        // window.location.href = 'welcome';
    };



    const myStyle = {
        width: "373px",
        height: "816px",
        background: "linear-gradient(180deg, rgba(124,200,240,1) 3%, rgba(141,217,239,1) 70%, rgba(184,238,215,1) 100%)",
        fontFamily: "'IBM Plex Sans Thai Looped', sans-serif"
    };
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
        <div className="min-w-[373px] min-h-[816px] overflow-hidden flex flex-col justify-center items-center " style={myStyle} >
            <div className="card  w-[338px] min-h-[680px] flex  items-center  justify-end  " >
                <p className=" font-bold text-2xl  text-[#483D8B] ">โปร์ไฟล์</p>
                <div className="hero-content flex-col flex  items-center  justify-center">
                    <div className=" w-[127px] h-[130px] rounded-full  ring-1 ring-white flex justify-center items-center " style={{ backgroundImage: `url(${profile})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <label htmlFor="imageInput" className="flex justify-center items-center"  >
                            <span class="text-[#5B5C5C]  bg-[#ffffff] rounded-md  opacity-50">เลือกรูปโปร์ไฟล์</span>
                            <input
                                id="imageInput"
                                type="file"
                                accept="image/*"
                                class="sr-only  "
                            // onChange={handleImageChange} // handle the image change event
                            />
                        </label>
                    </div>
                    <p className="text-[#483D8B] font-bold text-xl " >@UserID</p>
                    <form className="card-body  ">
                        <div className="form-control  text-[#483D8B] font-bold ">
                            <input
                                type="text"
                                placeholder="ชื่อ-สกุล"
                                name="username"
                                className="input text-1.5xl bg-[#76ACD6] placeholder-[#ACCDE6] rounded-2xl "
                            />
                        </div>
                        <div className="form-control  text-[#ACCDE6] font-bold">
                            <input
                                type="date"
                                placeholder="วันเดือนปีเกิด"
                                name="birthdate"
                                className="input text-1.5xl bg-[#76ACD6] placeholder-[#ACCDE6] rounded-2xl"
                            />
                        </div>
                        <div className="form-control  text-[#483D8B] font-bold ">
                            <input
                                type="text"
                                placeholder="อีเมล"
                                name="email"
                                className="input text-1.5xl bg-[#76ACD6] placeholder-[#ACCDE6] rounded-2xl"
                            />
                        </div>
                        <div className="form-control  text-[#483D8B] font-bold ">
                            <input
                                type="password"
                                placeholder="เปลี่ยนรหัสผ่าน"
                                name="password"
                                className="input text-1.5xl bg-[#76ACD6] placeholder-[#ACCDE6] rounded-2xl"
                            />
                        </div>
                        <div className="form-control  m-2 gap-4 flex  items-center  ">
                            <button
                                className="btn bg-[#B4ECD9] hover:bg-[#800080] text-black text-xl font-bold  border-opacity-40 type=submit rounded-xl shadow-lg"
                                type="submit"
                                onClick={handleSaveClick}
                            >บันทึก</button>

                            <button className="btn bg-[#483D8B] hover:bg-[#800080] text-white text-xl font-bold   border-opacity-40 type=submit rounded-xl shadow-lg"
                            onClick={(e) => { e.preventDefault(); window.location.href = 'welcome'; }}
                            >ออกระบบ</button>
                        </div>
                    </form>
                </div>
            </div>
            <footer className="footer flex items-center justify-between p-4 text-neutral-content">
                <aside className="items-center grid-flow-col">
                    <a href="#" className="label-text-start link link-hover ml-auto text-xl text-[#483D8B]" onClick={(e) => { e.preventDefault(); window.location.href = 'welcome'; }}>
                        กลับ
                    </a>
                </aside>
                <img src={logo} alt="Logo" className="rounded-lg grid-flow-col gap-4 md:place-self-center md:justify-self-end w-26 h-20" />
            </footer>
        </div >

    );
}
