import React from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/dashboard/Dashboard'

const Homepages = () => {
  return (
    <div className='bg-[#f5f7f8] w-screen h-screen pl-4 flex'>
      <div className='py-4'>
            <Sidebar />
      </div>

      <div className='w-full h-full lgxl:pl-8 pr-4 pt-5'>
        <Dashboard />
      </div>
    </div>
  )
}

export default Homepages