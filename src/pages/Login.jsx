import React from 'react'
import pattern from "../assets/login/green_4.jpg"
import { FaXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate("/dashboard")
    }

    return (
        <>
            <div className="bg-white flex lg:justify-between justify-center items-center lg:h-full md:h-screen vpt-20 ">
                <div className="bg-white rounded-lg  2xl:px-48 lg:px-20 -mt10 p-5 lg:p-0">
                    <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
                        <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
                            <div className="flex items-center justify-center w-full lg:p-12">
                                <div className="flex items-center xl:p-10">
                                    <form className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
                                        <h3 className="mb-5 text-4xl font-extrabol text-dark-grey-900  font-Roboto text-[#60a563]">Sign In</h3>
                                        <p className="mb-8 text-grey-700 lg:text-lg  font-Roboto"></p>
                                        <label for="email" className="mb-2 text-sm text-start text-grey-900 font-Roboto">Email</label>
                                        <input id="email" type="email" placeholder="name@email.com"
                                            className="flex items-center lg:max-w-[430px] w-full px-5 py-3 mr-2 text-sm font-medium outline-non  mb-7  bg-grey-200 text-dark-grey-900 rounded-md border border-black" />
                                        <label for="email" className="mb-2 text-sm text-start text-grey-900 font-Roboto">Password</label>
                                        <input id="email" type="email" placeholder="********"
                                            className="flex items-center  lg:max-w-[430px] w-full px-5 py-3 mr-2 text-sm font-medium outline-non  mb-5  bg-grey-200 text-dark-grey-900 rounded-md border border-black" />
                                        <div className='flex items-center gap-5'>
                                            <div className='flex items-center relative justify-center group'>
                                                <input className='w-5 h-5 z-20 rounded-xl checked:bg-black' type="checkbox" />
                                                <div className=' absolute z-10 w-12 h-12 rounded-full group-hover:bg-gray-100 duration-150'></div>
                                            </div>
                                            <p className='font-Roboto text-gray-600 text-sm'>I agree the <span className='font-extralight text-black underline'>Terms and Conditions</span></p>
                                        </div>
                                        <button className="w-full bg-[#60a563] mt-7 py-3 rounded-md text-white text-xs font-Roboto" onClick={handleNavigate}>
                                            SIGN IN
                                        </button>
                                        <div className="flex flex-row justify-between mb-8 pt-8">
                                            <div className='flex items-center md:gap-5 gap-2'>
                                                <div className='flex items-center relative justify-center group'>
                                                    <input className='md:w-5 w-3 md:h-5 h-3 z-20 rounded-xl checked:bg-black' type="checkbox" />
                                                    <div className=' absolute z-10 w-12 h-12 rounded-full group-hover:bg-gray-100 duration-150'></div>
                                                </div>
                                                <p className='font-Roboto text-gray-600 md:text-sm text-xs'>Subscribe me to newsletter</p>
                                                <a href="javascript:void(0)" className="mr-4  md:text-sm text-xs font-medium text-purple-blue-500 font-Roboto">    Forget password</a>
                                            </div>
                                        </div>
                                        <p className=" leading-relaxed text-grey-900 font-Roboto text-gray-500 md:text-base text-sm pt-5">Not registered?
                                            <Link to="/signup">
                                                <a href="javascript:void(0)" className="font-bold text-grey-700 text-black"> Create Account</a>
                                            </Link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='lg:block hidden -mt-10 mr-8'>
                    <img className='w-[585px] w-ful h-[700px rounded-3xl' src={pattern} alt="" />
                </div>

            </div>

        </>
    )
}

export default Login