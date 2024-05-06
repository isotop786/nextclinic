import React from 'react'
import { FaMapMarkerAlt,FaClock,FaFacebook,FaTwitter, FaLinkedinIn, FaInstagram,FaPhoneAlt} from 'react-icons/fa'

const TopHeader = () => {
  return (
    <div className="container-fluid bg-light p-0 wow fadeIn">
        <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <FaMapMarkerAlt className='text-primary'/>
                    <small className='ms-1'>123 Street, New York, USA</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center py-3 ">
                    <FaClock className='text-primary'/>
                    <small className='ms-2'>Mon - Fri : 09.00 AM - 09.00 PM</small>
                </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <FaPhoneAlt className='text-primary'/>
                    <small className='ml-3'>+012 345 6789</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center">
                    <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href=""><FaFacebook/></a>
                    <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href=""><FaTwitter/></a>
                    <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href=""><FaLinkedinIn/></a>
                    <a className="btn btn-sm-square rounded-circle bg-white text-primary me-0" href=""><FaInstagram/></a>
                </div>
            </div>
        </div>
      </div>
  )
}

export default TopHeader