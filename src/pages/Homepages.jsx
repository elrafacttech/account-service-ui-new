import React from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/dashboard/Dashboard'
import { useLocation } from 'react-router-dom'

const Homepages = ({children}) => {
  const location = useLocation();

  return (
    <div className='bg-[#f5f7f8] w-screen h-screen pl-4 flex'>
      <div className='py-4 absolute z-50'>
            <Sidebar />
      </div>

      <div className='w-full h-full lgxl:pl-80 pr-4 pt-5'>
        {
          (location.pathname === "/dashboard") ? (
            <>
             {children}
            </>
          ) 
          : ( location.pathname === "/profile") ? (
            <>
             {children}
            </>
          )
           : (location.pathname === '/table') ? (
            <>
             {children}
            </>
           ) 
           : (location.pathname === '/notifications') ? (
            <>
             {children}
            </>
           ) 
           :(location.pathname === '/organisationdetails') ?(
            <>
            {children}
            </>
           ) 
           :(location.pathname === '/sales') ? (
            <>
            {children}
            </>
           )
           :(location.pathname === '/purchase') ? (
            <>
            {children}
            </>
           )
           :(location.pathname === '/accounts') ? (
            <>
            {children}
            </>
           )
           :(location.pathname === '/receipt') ? (
            <>
            {children}
            </>
           )
           :(location.pathname === '/payment') ? (
            <>
            {children}
            </>
           )
           :(location.pathname === '/income') ? (
            <>
            {children}
            </>
           )
           :(location.pathname === '/productservice') ? (
            <>
            {children}
            </>
           )
           :(location.pathname === '/addsales') ? (
            <>
            {children}
            </>
           )
           :(location.pathname === '/addpurchase') ? (
            <>
            {children}
            </>
           )
           :(location.pathname === '/addreceipt') ? (
            <>
            {children}
            </>
           )
           :(location.pathname === '/addpayment') ? (
            <>
            {children}
            </>
           )
           :(location.pathname === '/addproductservice') ? (
            <>
            {children}
            </>
           )
           :
          <>
          </>
        }
        {/* <Dashboard /> */}
      </div>
    </div>
  )
}

export default Homepages