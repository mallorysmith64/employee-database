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

  return (
    <>
      <h2>Employee</h2>
      <h1>{[employee.firstName, employee.lastName]}</h1>
    </>
  )
}

export default EmployeePage
