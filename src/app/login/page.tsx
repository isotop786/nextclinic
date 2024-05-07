import React from 'react'
import PageBreadCrumb from '@/components/PageBreadCrumb'

const LoginPage = () => {
    return (
        <>
        <PageBreadCrumb sub='Login' />
            
      <div className="container">
          <div className="row d-flex justify-content-center">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="bg-light rounded p-5">
                        
                        <h1 className="mb-4">Login</h1>
                        
                        <form>
                            <div className="row g-3">
                               
                                
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="email" placeholder="Email"/>
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="password" className="form-control" id="subject" placeholder="Subject"/>
                                        <label htmlFor="subject">Password</label>
                                    </div>
                                </div>
                              
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
          </div>
            </div>
        </>
  )
}

export default LoginPage