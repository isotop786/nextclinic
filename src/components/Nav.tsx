import React from 'react'
import { FaHospitalAlt, FaArrowRight,FaArrowAltCircleDown } from 'react-icons/fa'
import Link from 'next/link'

const Nav = () => {
  return (
     <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s">
        <Link href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 className="m-0 text-primary d-flex align-items-center "><FaHospitalAlt/>NextClinic</h2>
        </Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link href="/" className="nav-item nav-link active">Home</Link>
                <Link href="/about" className="nav-item nav-link">About</Link>
                <Link href="/doctors" className="nav-item nav-link">Our Doctors</Link>
                <Link href="/service" className="nav-item nav-link">Service</Link>
                <Link href="/contact" className="nav-item nav-link">Contact</Link>
                <div className="nav-item dropdown">
                    <Link href="#" className="nav-link dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown"><span>Admin</span><FaArrowAltCircleDown/></Link>
                    <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                        <Link href="/admin/Login" className="dropdown-item">Login</Link>
                    </div>
                </div>
                
            </div>
            <a href="" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Appointment<FaArrowRight className="ms-3"/></a>
        </div>
    </nav>
  )
}

export default Nav