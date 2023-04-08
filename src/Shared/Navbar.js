import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '../assets/images/Ellipse 90.png'
import { useRouter } from "next/router";
import { MdOutlineDashboard } from 'react-icons/md';

const Navbar = () => {
  const router = useRouter();
  const { pathname } = useRouter();
  const [tabOpen, setTabOpen] = useState(false);


  return (
    <>
      <div className='shadow-sm sticky top-0 z-50 bg-base-100'>
        <div className='mid-container '>
          <div className="navbar bg-base-100 px-0 py-3">

            <div className="navbar-start ">

              <div className="dropdown">
                <label
                  onClick={() => setTabOpen(!tabOpen)}
                  tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>


                {
                  tabOpen && (
                    <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                      <Link href='/'>
                        <li><h6 className='font-medium text-[16px] hover:bg-base-100 hover:text-primary'>Home</h6></li>
                      </Link>
                      <Link href='/about'>
                        <li><h6 className='font-medium text-[16px] hover:bg-base-100 hover:text-primary'>About</h6></li>
                      </Link>
                      <Link href='/service'>
                        <li><h6 className='font-medium text-[16px] hover:bg-base-100 hover:text-primary'>Service</h6></li>
                      </Link>
                      <Link href='/blog'>
                        <li><h6 className='font-medium text-[16px] hover:bg-base-100 hover:text-primary'>Blog</h6></li>
                      </Link>
                      <Link href='/contact'>
                        <li><h6 className='font-medium text-[16px] hover:bg-base-100 hover:text-primary'>Contact</h6></li>
                      </Link>
                      <Link href='/payment'>
                        <li><h6 className='font-medium text-[16px] hover:bg-base-100 hover:text-primary'>Payment</h6></li>
                      </Link>
                    </ul>
                  )
                }
              </div>

              <Link href='/' className="ml-3 flex justify-center items-center gap-2">
                <Image
                  src={logo}
                  alt="logo"
                  width={100}
                  height={100}
                  className='w-5'
                ></Image>
                <h1 className="font-bold text-xl text-info">Portfolio</h1>
              </Link>



            </div>

            <div className='navbar-end'>
              <div className="hidden lg:flex mr-5">
                <ul className="menu menu-horizontal px-1 hover:bg-base-100">
                  <Link href='/'>
                    <li><h6 className='font-medium text-[16px] hover:bg-base-100 hover:text-primary'>Home</h6></li>
                  </Link>
                  <Link href='/about'>
                    <li><h6 className='font-medium text-[16px] hover:bg-base-100 hover:text-primary'>About</h6></li>
                  </Link>
                  <Link href='/service'>
                    <li><h6 className='font-medium text-[16px] hover:bg-base-100 hover:text-primary'>Service</h6></li>
                  </Link>
                  <Link href='/blog'>
                    <li><h6 className='font-medium text-[16px] hover:bg-base-100 hover:text-primary'>Blog</h6></li>
                  </Link>
                  <Link href='/contact'>
                    <li><h6 className='font-medium text-[16px] hover:bg-base-100 hover:text-primary'>Contact</h6></li>
                  </Link>
                  <Link href='/payment'>
                    <li><h6 className='font-medium text-[16px] hover:bg-base-100 hover:text-primary'>Payment</h6></li>
                  </Link>

                </ul>
              </div>
              <div className="flex justify-end gap-4 items-center">

                <div className='lg:hidden '>
                  {
                    pathname.includes("admin") && (<label htmlFor="my-drawer-2" tabIndex="1" className=" cursor-pointer">
                      <MdOutlineDashboard className='text-2xl' />
                    </label>)
                  }
                </div>

              </div>

              <div className="ml-3">
                <button className='btn btn-sm btn-primary text-white rounded-full font-bold'>
                  Contact
                </button>

              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Navbar;

// cart drawer
