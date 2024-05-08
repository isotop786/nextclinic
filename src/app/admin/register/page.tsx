"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import PageBreadCrumb from '@/components/PageBreadCrumb'



const RegisterPage = () => {

    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
        username:"",
    })

    const onSignup = async () => {
        try {
            const res = await axios.post("/api/register", user);
            router.push("/admin")

        } catch (error: any) {
            console.log("Signup failed",error.message)
        }
    }

    return (
      <>
    <div className="container">
          <div className="row d-flex justify-content-center">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="bg-light rounded p-5">
                        
                        <h3 className="mb-4">Add an Admin</h3>
                        
                            <div className="row g-3">
                               
                                
                                <div className="col-12">
                                    <div className="form-floating">
                                            <input
                                                value={user.username}
                                                onChange={e => setUser({...user, username:e.target.value})}
                                                type="text" className="form-control" id="username" placeholder="Username" />
                                        <label htmlFor="username">Username</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                            <input
                                                value={user.email}
                                                onChange={e => setUser({...user, email:e.target.value})}
                                                type="email" className="form-control" id="email" placeholder="Email" />

                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                            <input
                                                value={user.password}
                                                onChange={e => setUser({...user, password:e.target.value})}
                                                type="password" className="form-control" id="password" placeholder="Password" />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                </div>
                              
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" onClick={onSignup} >Register</button>
                                </div>
                            </div>

                    </div>
                </div>
          </div>
            </div>
             </>
  )
}

export default RegisterPage