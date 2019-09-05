import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Company = () => {
  const [employee, setEmployee] = useState([])

  const getCompany = async () => {
    const resp = await axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/Company/realcompany'
    )
    console.log('company', resp)
  }

  const getEmployee = async () => {
    const resp = await axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/realcompany/Employees'
      //
    )
    console.log('employee', resp)
  }

  useEffect(() => {
    getCompany()
    getEmployee()
  }, [])

  return (
    <>
      <h2>something</h2>
    </>
  )
}
export default Company
