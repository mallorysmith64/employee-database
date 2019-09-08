import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AddEmployee = () => {
  const [Hire, setHire] = useState({})

  const newEmployee = async () => {
    const resp = await axios.post(
      `https://sdg-staff-directory-app.herokuapp.com/api/realcompany/Employees`,
      { Hire }
    )
    console.log('employee form', resp)
    setHire(resp)
  }

  useEffect(() => {
    newEmployee()
  }, [])

  return (
    <>
      {/* <input type="text" id={firstName} onChange={handleChange} /> */}

      <section className="contact-header">
        <h5>New Employee Form</h5>
      </section>
      <section className="form">
        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <input
                  placeholder="first name"
                  id="first_name"
                  type="text"
                  // onChange={handleChange}
                  class="validate"
                />
                <label for="first_name">First Name</label>
              </div>
              <div class="input-field col s6">
                <input
                  placeholder="last name"
                  id="last_name"
                  type="text"
                  class="validate"
                />
                <label for="last_name">Last Name</label>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default AddEmployee
