import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { setState } from 'expect/build/jestMatchersObject'

const Company = () => {
  const [data, setData] = useState([])

  const getCompany = async () => {
    const resp = await axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/Company/realcompany'
    )
    console.log('company api results', resp)
    console.log('all company results', resp.data)
    console.log('one company result', resp.data[0])
    console.log('first name:', resp.data[0].firstName)
    setData(resp.data)
  }

  const getEmployees = async () => {
    const resp = await axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/realcompany/Employees'
    )
    console.log('employees', resp)
    console.log('all employees', resp.data)
    console.log('one employee', resp.data[0])
    console.log('first name:', resp.data[0].firstName)
    setData(resp.data)
  }

  useEffect(() => {
    getCompany()
    getEmployees()
  }, [])

  return (
    <>
      {data.map((name, key) => {
        return (
          <section key={key}>
            <h3>
              Employee Info: {[name.firstName, name.lastName, name.id]}
              Job Title: {name.jobTitle}
              Hired Date: {name.hiredDate}
            </h3>
          </section>
        )
      })}
    </>
  )
}
export default Company
