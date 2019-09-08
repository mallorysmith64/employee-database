import React, { useState } from 'react'
import axios from 'axios'

const AddEmployee = () => {
  const [Hire, setHire] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
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

  // useEffect(() => {
  //   newEmployee()
  // }, [])

  return (
    <>
      <section className="contact-header">
        <h5>New Employee Form</h5>
      </section>
      <section className="form">
        <form action="" className="col s12" onSubmit={newEmployee}>
          <div className="row">
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input
                  id="first_name"
                  type="text"
                  onChange={updateForm}
                  className="validate"
                />
                <label for="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" />
                <label for="last_name">Last Name</label>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}

export default AddEmployee
