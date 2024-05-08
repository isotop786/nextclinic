"use client"
import Link from 'next/link'
import React from 'react'
import { FaLock } from 'react-icons/fa'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import axios from 'axios';

function Header() {
   const router = useRouter()
    const [data, setData] = useState("nothing")
      const logout = async () => {
        try {
            await axios.get('/api/logout');
            router.push('/login')
        } catch (error: any) {
            console.log(error.message)
            
        }

    }
  return (
    <header className="navbar sticky-top bg-primary  flex-md-nowrap p-0 shadow" >
          <h1 className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-4 text-white d-flex  align-items-center">
              <Link className='text-white' style={{textDecoration:"none"}} href="/admin">NextClinic Admin Panel</Link>
            </h1>
          <p className="navbar-brand col-md-3 col-lg-2 me-0 px-3  text-white d-flex justify-content-end  align-items-center">
              <button onClick={logout} className='btn btn-danger d-flex align-items-center' style={{textDecoration:"none",fontSize:"15px"}}><span>Signout</span> <FaLock/></button>
            </p>
</header>
  )
}

export default Header