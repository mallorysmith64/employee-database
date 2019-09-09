import React, { useState } from 'react'
import axios from 'axios'

const AddEmployee = () => {
  const [Hire, setHire] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    city: '',
    state: '',
    zip: ''
  })

  const newEmployee = async e => {
    e.preventDefault()
    const resp = await axios.post(
      `https://sdg-staff-directory-app.herokuapp.com/api/realcompany/Employees`,
      { Hire }
    )
    console.log('employee form', resp.data)
    // setHire(resp.data)
  }

  const updateForm = e => {
    setHire({
      ...Hire,
      [e.target.id]: e.target.value
    })
  }

  return (
    <>
      <section className="contact-header">
        <h5 className="form-header">New Employee Form</h5>
      </section>
      <section className="form">
        <form action="" className="col s12" onSubmit={newEmployee}>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">account_circle</i>
              <input
                id="first_name"
                type="text"
                className="validate"
                onChange={updateForm}
              />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="last_name"
                  type="text"
                  className="validate"
                  onChange={updateForm}
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
              <div className="row email">
                <div className="input-field col s6">
                  <i className="material-icons prefix">email</i>
                  <input
                    id="email"
                    type="text"
                    className="validate"
                    onChange={updateForm}
                  />
                  <label htmlFor="email">Email</label>
                  <span
                    className="helper-text"
                    data-error="wrong"
                    data-success="right"
                  ></span>
                </div>
                <div className="row">
                  <div className="input-field col s6">
                    <input
                      id="job_title"
                      type="text"
                      className="validate"
                      onChange={updateForm}
                    />
                    <label htmlFor="job_title">Job Title</label>
                  </div>
                </div>
                <div className="row city">
                  <div className="input-field col s2">
                    <i className="material-icons prefix">add_location</i>
                    <input
                      id="city"
                      type="text"
                      className="validate"
                      onChange={updateForm}
                    />
                    <label htmlFor="city">City</label>
                  </div>
                  <div className="row">
                    <div className="input-field col s1">
                      <input
                        id="state"
                        type="text"
                        className="validate"
                        onChange={updateForm}
                      />
                      <label htmlFor="state">State</label>
                    </div>
                    <div className="row">
                      <div className="input-field col s1">
                        <input
                          id="zip"
                          type="text"
                          className="validate"
                          onChange={updateForm}
                        />
                        <label htmlFor="zip">Zip</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}

export default AddEmployee
