"use client"
import React,{useEffect,useState} from 'react'
import PageBreadCrumb from '@/components/PageBreadCrumb'
import axios from 'axios'
import {FaFacebook,FaLinkedinIn, FaInstagram } from 'react-icons/fa'


interface Doctor{
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    imageURL: string,
    department: string
}

const DoctorsPage = () => {
    const [docotrs, setDoctors] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        fetchData()
    }, [])
    
      function fetchData() {
      axios.get('/api/doctors')
      .then(res => {
        setLoading(true)
        console.log(res.data)
        setDoctors(res.data.doctors)
        
      })
    .then(() => {
        setLoading(false)
    })
      .catch(err => {
        console.log(err)
      })
  }

    return (
        <>
      <PageBreadCrumb sub='Our Doctors'/>
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:"600px"}}>
                <p className="d-inline-block border rounded-pill py-1 px-4">Doctors</p>
                <h1>Our Experience Doctors</h1>
            </div>
            <div className="row g-4">
                        {loading && (<div className='text-center'>
                            <h3>Doctors data is loading...</h3>
                </div>)}
                {docotrs.length > 0 && docotrs.map((doctor : Doctor) => (
                    <div key={doctor._id} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden">
                        <img className="img-fluid d-flex align-content-stretch flex-wrap" src={doctor.imageURL} style={{height:"200px!important"}} alt=""/>
                        </div>
                        <div className="team-text bg-light text-center p-4">
                                <h5>{doctor.firstName} {doctor.lastName}</h5>
                                <p className="text-primary">{doctor.department}</p>
                            <div className="team-social text-center">
                                <a className="btn btn-square" href=""><FaFacebook /></a>
                                <a className="btn btn-square" href=""><FaInstagram /></a>
                                <a className="btn btn-square" href=""><FaLinkedinIn /></a>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                {/* <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/team-3.jpg" alt=""/>
                        </div>
                        <div className="team-text bg-light text-center p-4">
                            <h5>Doctor Name</h5>
                            <p className="text-primary">Department</p>
                            <div className="team-social text-center">
                                <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/team-4.jpg" alt=""/>
                        </div>
                        <div className="team-text bg-light text-center p-4">
                            <h5>Doctor Name</h5>
                            <p className="text-primary">Department</p>
                            <div className="team-social text-center">
                                <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    </>
  )
}

export default DoctorsPage