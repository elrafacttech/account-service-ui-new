import React from 'react'
import { HiHome } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { HiTableCells } from "react-icons/hi2";
import { FaCircleUser } from 'react-icons/fa6';
import { IoNotifications } from "react-icons/io5";







const Sidebar = () => {
  return (
    <div className='w-[288px] bg-[#ffffff] h-[calc(100vh-2rem)] rounded-xl border border-gray-300 lgxl:block hidden'>
      <div className='p-4'>
        <h3 className='font-Roboto text-[#263238] font-medium text-center pt-2'>Material Tailwind React</h3>

        <section className='p-4 pt-[55px] flex flex-col gap-[30px] justify-center'>
          <div className='flex items-center gap-4 text-[#607d8b hover: text-white relative group z-20 cursor-pointer'>
            <HiHome className='z-20' size={20} />
            <p className='font-Roboto z-20'>Dashboard</p>
            <div className='group-hover: bg-[#60a563] absolute h-[50px] w-[254px] -mx-4 z-10 rounded-lg'></div>
          </div>

          <div className='flex items-center gap-4 text-[#607d8b] relative group z-20 cursor-pointer'>
            <FaCircleUser className='z-20' size={20} />
            <p className='font-Roboto z-20'>Profile</p>
            <div className='group-hover:bg-[#efefef] absolute h-[50px] w-[254px] -mx-4 z-10 rounded-lg'></div>
          </div>
          <div className='flex items-center gap-4 text-[#607d8b] relative group z-20 cursor-pointer'>
            <HiTableCells className='z-20' size={20} />
            <p className='font-Roboto z-20'>Tables</p>
            <div className='group-hover:bg-[#efefef] absolute h-[50px] w-[254px] -mx-4 z-10 rounded-lg'></div>
          </div>
          <div className='flex items-center gap-4 text-[#607d8b] relative group z-20 cursor-pointer'>
            <IoNotifications className='z-20' size={20} />
            <p className='font-Roboto z-20'>Notifications</p>
            <div className='group-hover:bg-[#efefef] absolute h-[50px] w-[254px] -mx-4 z-10 rounded-lg'></div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Sidebar