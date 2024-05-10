"use client"
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { getDataFromToken } from '@/helper/getDataFromToken'

const DoctorsPage = () => {

  interface DoctorInterface {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    imageURL: string,
    department: string
  }

  const router = useRouter();
  const [doctor, setDoctor] = useState({
    firstName: "",
    lastName: "",
    email: "",
    imageURL: "",
    department:"Cardiac"
  })
  const [doctorData, setDoctorData] = useState([])
  const [loading, setLoading] = useState(false)

    const onSubmit = () => {
  
    try {
      axios.post('/api/doctors/create',doctor)
      let closebtn = document.getElementById("closebtn");
      closebtn?.click();
      router.push('/admin/doctors')
      fetchData();
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData();
    
  }, [doctorData])

    useEffect(() => {
    axios.get('/api/user')
      .then(res => {
        //console.log(res.data)
        //console.log("isAdmin: "+res.data.data.isAdmin)
        if (res.data.data.isAdmin !== true) {
          router.push("/admin")
        }
    })
},[])
  
  function fetchData() {
      axios.get('/api/doctors/')
      .then(res => {
        setLoading(true)
        //console.log(res.data)
        setDoctorData(res.data.doctors)
      })
      .then(() => {
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className='container'>
      <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4"></div>
        <div className="col-md-4 d-flex justify-content-end">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add New Doctor</button>
      </div>


<div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Doctor</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <>
          <div className="mb-3">
            <label htmlFor="firstName" className="col-form-label">First Name</label>
                    <input
                      value={doctor.firstName}
                      onChange={e => setDoctor({...doctor,firstName:e.target.value})}
                      type="text" className="form-control" id="firstName" />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="col-form-label">Last Name</label>
                    <input
                       value={doctor.lastName}
                      onChange={e => setDoctor({...doctor,lastName:e.target.value})}
                      type="text" className="form-control" id="lastName" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="col-form-label">Email </label>
                    <input
                       value={doctor.email}
                      onChange={e => setDoctor({...doctor,email:e.target.value})}
                      type="text" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Image URL</label>
                    <input
                      value={doctor.imageURL}
                      onChange={e => setDoctor({...doctor,imageURL:e.target.value})}
                      type="text" className="form-control" id="recipient-name" />
          </div>
          <div className="mb-3">
            <label htmlFor="message-text" className="col-form-label">Department</label>
                    <select className='form-control' onChange={e => {
                      console.log(e.target.value)
                      setDoctor({...doctor, department:e.target.value})
                }}>
                  <option value="Emergency">Emergency Department</option>
                  <option value="Cardiac">Cardiac Department</option>
                  <option value="Pulmonary">Pulmonary Department</option>
                  <option value="Dental">Dental Department</option>
                </select>        
            {/* <textarea className="form-control" id="message-text"></textarea> */}
          </div>
        </>
      </div>
      <div className="modal-footer">
        <button id="closebtn" type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={onSubmit} type="button" className="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>
      </div>
      {loading ? (<div className='row mt-4 d-flex justify-content-center'>Loading...</div>)
      
        : (
          <div className="row">
        <div className="col-md-12">
          <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
              <th scope="col">Department</th>
            </tr>
          </thead>
        <tbody>
            {doctorData.length > 0 && doctorData.map((doctor: DoctorInterface) => (
              <tr key={doctor._id}>
                <th scope="row">
                  <Image src={doctor.imageURL} className='img-fluid' width={100} height={100} alt="image" />
              </th>
              <td>{doctor.firstName}</td>
              <td>{doctor.lastName}</td>
              <td>{doctor.email}</td>
              <td>{doctor.department}</td>
            </tr>
            ))}
   
      </tbody>
    </table>
        </div>
        </div>
        )
    }
    </div>
  )
}

export default DoctorsPage