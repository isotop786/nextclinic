import React from 'react'
import { 
    FaPlus,
    FaHeartbeat,
    FaXRay,
    FaBrain,
    FaWheelchair,
    FaTooth,
    FaVials

} from 'react-icons/fa'

export const ServiceComponent = () => {
  return (
        <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:"600px"}}>
                <p className="d-inline-block border rounded-pill py-1 px-4">Services</p>
                <h1>Health Care Solutions</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width:"65px",height:"65px"}}>
                            <FaHeartbeat className="text-primary fs-4"/>
                        </div>
                        <h4 className="mb-3">Cardiology</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href=""><FaPlus className="text-primary me-2"/> <span>Read More</span></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width:"65px",height:"65px"}}>
                            <FaXRay className="text-primary fs-4"/>
                        </div>
                        <h4 className="mb-3">Pulmonary</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href=""><FaPlus className="text-primary me-2"/>Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width:"65px",height:"65px"}}>
                            <FaBrain className="text-primary fs-4"/>
                        </div>
                        <h4 className="mb-3">Neurology</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href=""><FaPlus className="text-primary me-2"/>Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width:"65px",height:"65px"}}>
                            <FaWheelchair className="text-primary fs-4"/>
                        </div>
                        <h4 className="mb-3">Orthopedics</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href=""><FaPlus className="text-primary me-2"/>Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width:"65px",height:"65px"}}>
                            <FaTooth className="text-primary fs-4"/>
                        </div>
                        <h4 className="mb-3">Dental Surgery</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href=""><FaPlus className="text-primary me-2"/>Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width:"65px",height:"65px"}}>
                            <FaVials className="text-primary fs-4"/>
                        </div>
                        <h4 className="mb-3">Laboratory</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href=""><FaPlus className="text-primary me-2"/>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
