import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Dashboard() {
    return (
        // untuk right side
        // <div className='w-screen min-h-screen flex flex-row-reverse'></div>
        <div className='w-screen min-h-screen flex'>
            {/* Left Side */}
            <aside className='w-[200px] h-screen flex flex-col bg-white shadow-lg'>

                <div className='w-full h-[60px] flex flex-col justify-center items-center bg-gradient-to-tr from-slate-400 to-slate-500'>
                    <h1 className='text-xl text-white'>Halaman Dashboard</h1>
                    {/* <img src="https://edukasi.pajak.go.id/images/NagaraDanaRakca.png" alt="" /> */}
                </div>

                <nav className='w-full flex-1'>
                    <Link to={"/"} className="w-full h-12 flex items-center px-4 hover:bg-slate-100"> Dashboard</Link>
                    <Link to={"/bandara"} className="w-full h-12 flex items-center px-4 hover:bg-slate-100"> Bandara</Link>
                    <Link to={"/penerbangan"} className="w-full h-12 flex items-center px-4 hover:bg-slate-100"> Penerbangan</Link>
                    <Link to={"/penumpang"} className="w-full h-12 flex items-center px-4 hover:bg-slate-100"> Penumpang</Link>

                    {/* <Link to={"/dashboard"} className="w-full h-12 flex items-center px-4 hover:bg-slate-100"> Dashboard</Link>
                    <Link to={"/dashboard/master"} className="w-full h-12 flex items-center px-4 hover:bg-slate-100"> Master</Link>
                    <Link to={"/dashboard/penerbangan"} className="w-full h-12 flex items-center px-4 hover:bg-slate-100"> Penerbangan</Link>
                    <Link to={"/dashboard/penumpang"} className="w-full h-12 flex items-center px-4 hover:bg-slate-100"> Penumpang</Link> */}
                </nav>
            </aside>
            {/* End Left Side */}

            {/* Right Side */}
            <div className='flex-1 h-screen p-6 overflow-y-auto'>
                <Outlet />
            </div>
            {/* End Right Side */}


        </div >
    )
}
