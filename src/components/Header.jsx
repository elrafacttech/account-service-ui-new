import React from 'react'
import { FaCircleUser } from 'react-icons/fa6'
import { IoNotifications } from 'react-icons/io5'
import { IoMdSettings } from "react-icons/io";
import { useNavigate } from 'react-router-dom';



const Header = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate("/")
    }
    
    return (
        <div>
            <div className='flex justify-between tems-center'>
                <div className='slg:block hidden '>
                    <p className=' text-sm text-[#b2b8bb] font-normal'>Dashboard <span className='pl-1'>/</span> <span className='text-black pl-1'> Home</span></p>
                    <p className='font-Roboto pt-0.5'>Home</p>
                </div>
                <div className='flex items-center gap-8  pr-3 pt-'>
                    <div className="relative mb-3" data-te-input-wrapper-init>
                        <input
                            type="search"
                            className="peer  block min-h-[auto] w-full placeholder:text-black rounded-md border border-[#b2b8bb] focus:border-black bg-transparent px-3 py-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear  peer-focus:text-primary 0 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleSearch2"
                            placeholder="Type query" />
                        <label
                            for="exampleSearch2"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[#868e93] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-ntext-[#b2b8bb]"
                        >Search</label>
                    </div>

                    <div className=' text-[#607d8b] slg:flex hidden items-center gap-2 ' onClick={handleNavigate}>
                        <FaCircleUser className='' size={17} />
                        <p className='text-xs font-Roboto'>Sign In</p>
                    </div>
                    <div className=' text-[#607d8b] '>
                        <IoNotifications className='' size={20} />
                    </div>
                    <div className=' text-[#607d8b] '>
                        <IoMdSettings className='' size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header