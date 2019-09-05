import React, { useEffect } from 'react'
//don't forget to add useState
import axios from 'axios'

const Company = () => {
  // const [employee, setEmployee] = useState([])

  const getCompany = async () => {
    const resp = await axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/Company/realcompany'
    )
    console.log('company', resp)
  }

  const getEmployee = async () => {
    const resp = await axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/realcompany/Employees'
    )
    console.log('employees', resp)
  }

  useEffect(() => {
    getCompany()
    getEmployee()
  }, [])

  return (
    <>
      <h2>Company component renders</h2>
    </>
  )
}
export default Company
