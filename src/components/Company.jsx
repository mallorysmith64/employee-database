import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { setState } from 'expect/build/jestMatchersObject'

const Company = () => {
  const [employees, setEmployees] = useState('')

  const getCompany = async () => {
    const resp = await axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/Company/realcompany'
    )
    console.log('company api results', resp)
    console.log('all company results', resp.data)
    console.log('one company result', resp.data[0])
    setEmployees(resp.data[0])
  }

  const getEmployees = async () => {
    const resp = await axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/realcompany/Employees'
    )
    console.log('employees', resp)
    console.log('all employees', resp.data)
    console.log('one employee', resp.data[0])
    // setEmployees(resp.data[0])
  }

  useEffect(() => {
    getCompany()
    getEmployees()
  }, [])

  return (
    <>
      {/* {employees.map((employee, key) => {
        return <h3 key={key}>{employee}</h3>
      })} */}
    </>
  )
}
export default Company
