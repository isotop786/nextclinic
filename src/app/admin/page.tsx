"use client"
import React,{useEffect, useState} from 'react'
import { NextRequest } from 'next/server'
import { getDataFromToken } from '@/helper/getDataFromToken'
import axios from 'axios'
import {useRouter} from 'next/navigation'


const AdminPage = () => {

const [isAdmin,setIsAdmin] = useState(false)
  const router = useRouter();
  

  
  return (
    <div className="container" style={{height:"100vh"}}>
      <div className="row">
        
        <div className="col-md-4">
         <div className="card text-bg-primary mb-3" style={{maxWidth:"18rem"}}>
          <div className="card-header text-center">Total Number of Doctors</div>
          <div className="card-body text-center">
            <h5 className="card-title">123 Doctors</h5>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
          </div>
        </div>
        </div>
        
        <div className="col-md-4">
         <div className="card text-bg-primary mb-3" style={{maxWidth:"18rem"}}>
          <div className="card-header text-center">Total Number of Nurses</div>
          <div className="card-body text-center">
            <h5 className="card-title">200 Nurses</h5>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
          </div>
        </div>
        </div>
        
        <div className="col-md-4">
         <div className="card text-bg-primary mb-3" style={{maxWidth:"18rem"}}>
          <div className="card-header text-center">Total Number of Paitents</div>
          <div className="card-body text-center">
            <h5 className="card-title">1234 Paitents</h5>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
          </div>
        </div>
        </div>
      
    
       
      </div>
    </div>
  )
}

export default AdminPage