import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AddEmployee = () => {
  const [newHire] = useState({})

  const newEmployee = async () => {
    const resp = await axios.post(
      `https://sdg-staff-directory-app.herokuapp.com/api/realcompany/Employees`,
      { newHire }
    )
    console.log('employee form', resp.data)
  }

  useEffect(() => {
    newEmployee()
  }, [])

  return (
    <>
      <h5>New Employee Form</h5>
      {/* <form>
        <input type="text" id={firstName} onChange={handleChange} />
      </form> */}
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input
                placeholder="Placeholder"
                id="first_name"
                type="text"
                class="validate"
              />
              <label for="first_name">First Name</label>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddEmployee
