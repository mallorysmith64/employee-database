import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

const EmployeePage = props => {
  const [id, setId] = useState(props.match.params.id)
  const [employee, setEmployee] = useState({})

  const getEmployee = async () => {
    const resp = await axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/realcompany/Employees/1'
    )
    console.log('employee id', resp.data)
    setEmployee(resp.data)
  }

  useEffect(() => {
    getEmployee()
  }, [id])

  useEffect(() => {
    console.log(props.match.params.id)
    setId(props.match.params.id)
  }, [props])

  return (
    <>
      <h1>
        {employee.firstName} {employee.lastName}
      </h1>
      {/* <details>
        {employee.jobTitle}
        {employee.state}
      </details> */}
    </>
  )
}

export default EmployeePage
