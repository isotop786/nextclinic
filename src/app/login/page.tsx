"use client"

import PageBreadCrumb from '@/components/PageBreadCrumb'
import Link from "next/link";
import React, {useState, useEffect} from 'react'
import { useRouter } from "next/navigation";
import axios from "axios";

const LoginPage = () => {

    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password:"",
    })

     const onLogin = async () => {
        try {
            setLoading(true);
            const res = await axios.post("/api/login", user);
            router.push("/admin");
        }
        catch (error: any) {
            console.log("Login failed", error.message);
            alert("Invalid email/password")
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <>
        <PageBreadCrumb sub='Login' />
            
      <div className="container">
          <div className="row d-flex justify-content-center">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="bg-light rounded p-5">
                        
                        <h1 className="mb-4">Login</h1>
                        
   
                            <div className="row g-3">
                               
                                
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
                                            onChange={e => setUser({...user, password: e.target.value})}
                                            type="password" className="form-control" id="subject" placeholder="Subject" />
                                        <label htmlFor="subject">Password</label>
                                    </div>
                                </div>
                              
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3"
                                    onClick={onLogin}
                                    >{loading ? 'Processing' : 'Login'}</button>
                                </div>
                            </div>

                    </div>
                </div>
          </div>
            </div>
        </>
  )
}

export default LoginPage