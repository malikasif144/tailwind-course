import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const Header = () => {
    const [toggle , setToggle ] = useState(false)
  return (
    <div className='bg-[#2699fb] p-4'>
    <div className='max-w-[1240px] flex justify-between items-center'>
    <div className='text-3xl font-bold text-white'>Naveed_test_app</div>
    {
        toggle? <AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-white text-3xl md:hidden block'/> :
        <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white text-3xl md:hidden block '/>

    }
    
    <ul className='hidden  md:flex gap-10 text-white'>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li>Services</li>
    </ul>
    {/*responsive menu */}
    <ul className={`duration-300 md:hidden gap-10 w-full h-screen text-white fixed bg-black left-0 top-[67px]
    ${toggle? 'left-[0%]' : 'left-[-100%]' }`}>
    <li className='p-5'>Home</li>
    <li className='p-5'>About</li>
    <li className='p-5'>Contact</li>
    <li className='p-5'>Services</li>
    </ul>
    </div>
    </div>
  )
}

export default Header