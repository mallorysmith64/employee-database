import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

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
      <h2>Employee</h2>
      <h2>Name: {[employee.firstName, employee.lastName]}</h2>
      <h2>Job Title: {employee.jobTitle}</h2>
      <h2>Location: {employee.zip || 'N/A'}</h2>
      <h2>Full-time: Yes</h2>
    </>
  )
}

export default EmployeePage
