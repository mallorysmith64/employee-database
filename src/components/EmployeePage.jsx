import React, { useEffect, useState } from 'react'
import axios from 'axios'

const EmployeePage = props => {
  const [id] = useState(props.match.params.id)
  const [employee, setEmployee] = useState({})

  const getEmployee = async id => {
    const resp = await axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/realcompany/Employees/${id}`
    )
    console.log('employee id', resp.data)
    setEmployee(resp.data)
  }

  useEffect(() => {
    getEmployee(id)
  }, [id])

  if (!employee) return 'null'

  return (
    <>
      <h5>Employee Profile</h5>
      <h5>Name: {[employee.firstName, employee.lastName]}</h5>
      <h5>Job Title: {employee.jobTitle || 'N/A'}</h5>
      <h5>Location: {employee.zip || 'N/A'}</h5>
      <h5>Full-time: Yes</h5>
    </>
  )
}

export default EmployeePage
