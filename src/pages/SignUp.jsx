import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import pattern from "../assets/login/green_4.jpg"
import { FaXTwitter } from "react-icons/fa6";


export function SignUp() {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate("/dashboard")
    }

    return (
        <section className="m-8 flex">
            <div className="w-2/5 h-full hidden lg:block">
                <img
                    src={pattern}
                    className="h-full w-full object-cover rounded-3xl"
                />
            </div>
            <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
                <div className="text-center">
                    <Typography variant="h2" className="font-bold mb-4 font-Roboto">Sign Up</Typography>
                    <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal font-Roboto">Enter your email and password to register.</Typography>
                </div>
                <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="small" color="blue-gray" className="-mb-3 font-medium font-Roboto">
                            Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>

                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="small" color="blue-gray" className="-mb-3 font-medium font-Roboto">
                            Password
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="******"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    <div className="flex flex-row justify-between  pt-8">
                        <div className='flex items-center md:gap-5 gap-2'>
                            <div className='flex items-center relative justify-center group'>
                                <input className='md:w-5 w-3 md:h-5 h-3 z-20 rounded-xl checked:bg-black' type="checkbox" />
                                <div className=' absolute z-10 w-12 h-12 rounded-full group-hover:bg-gray-100 duration-150'></div>
                            </div>
                            <p className='font-Roboto text-gray-600 md:text-sm text-xs'>I agree the <span className="text-black underline">Terms and Conditions</span></p>
                        </div>
                    </div>

                    <button className="w-full bg-[#60a563] mt-7 py-3 rounded-md text-white text-xs font-Roboto" onClick={handleNavigate}>
                        Register Now
                    </button>
                    <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4 font-Roboto">
                        Already have an account?
                        <Link to="/" className="text-gray-900 ml-1">Sign in</Link>
                    </Typography>
                </form>

            </div>
        </section>
    );
}

export default SignUp;
