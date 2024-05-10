"use client"
import React,{useState, useEffect} from 'react'
import Link from 'next/link'
import { MdSpaceDashboard } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { GiNurseFemale } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { MdSchedule } from "react-icons/md";
import { HiOutlineUserAdd } from "react-icons/hi";
import axios from 'axios'
import { useRouter } from 'next/navigation';





function Sidebar() {
const router = useRouter()

  const [isAdmin,setIsAdmin] = useState(false)
  
  useEffect(() => {
    axios.get('/api/user')
      .then(res => {
        //console.log(res.data)
        //console.log("isAdmin: "+res.data.data.isAdmin)
        // if (res.data.data.isAdmin !== true) {
        //   router.push("/admin")
        // }
        setIsAdmin(res.data.data.isAdmin)
    })
},[])
  

  return (
        <div style={{height:"100vh"}} className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
      <div className="offcanvas-md offcanvas-end bg-body-tertiary"  id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2 active d-flex align-items-center" aria-current="page" href="/admin">
                
              <MdSpaceDashboard />
              <span>Dashboard</span>
              </Link>
            </li>
            
            {isAdmin && (
                <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" href="/admin/doctors">
                <FaUserDoctor />
                Doctors
              </Link>
            </li>
             )}
          
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
               <MdSchedule />
                Appointments
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <FaUser />
                Paitents
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <GiNurseFemale />
                Nurses
              </a>
            </li>
            
            
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" href="/admin/register">
                <HiOutlineUserAdd />
                Add Admin
              </Link>
            </li>
          </ul>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
            <span>Saved reports</span>
            <a className="link-secondary" href="#" aria-label="Add a new report">
              
            </a>
          </h6>
          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                
                Current month
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
              
                Last quarter
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                
                Social engagement
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
              
                Year-end sale
              </a>
            </li>
          </ul>

          <hr className="my-3"/>

          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
               
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
               
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar