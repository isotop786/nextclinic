import React from 'react'

const DoctorsPage = () => {
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
            <input type="text" className="form-control" id="firstName"/>
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="col-form-label">Last Name</label>
            <input type="text" className="form-control" id="lastName"/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="col-form-label">Email </label>
            <input type="text" className="form-control" id="email"/>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Image URL</label>
            <input type="text" className="form-control" id="recipient-name"/>
          </div>
          <div className="mb-3">
            <label htmlFor="message-text" className="col-form-label">Department</label>
                <select className='form-control'>
                  <option value="ER">Emergency Department</option>
                  <option value="CD">Cardiac Department</option>
                  <option value="PD">Pulmonary Department</option>
                  <option value="PD">Dental Department</option>
                </select>        
            {/* <textarea className="form-control" id="message-text"></textarea> */}
          </div>
        </>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Department</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Howard</td>
      <td>Hamlin</td>
      <td>Dental</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Emmergency</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Larry</td>
      <td>Paige</td>
      <td>Cardiarc</td>
    </tr>
  </tbody>
</table>
        </div>
        </div>
    </div>
  )
}

export default DoctorsPage