import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
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
    // console.log('first name:', resp.data[0].firstName)
    setData(resp.data)
  }

  const getEmployees = async () => {
    const resp = await axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/realcompany/Employees'
    )
    console.log('api employee results', resp)
    console.log('all employees', resp.data)
    console.log('one employee', resp.data[0])
    // console.log('first name:', resp.data[0].firstName)
    setData(resp.data)
  }

  useEffect(() => {
    getCompany()
    getEmployees()
  }, [])

  return (
    <>
      <h2>Current Employees</h2>
      {data.map((name, key) => {
        return (
          <section key={key}>
            <h3>
              {/*how to make link: link to component then string interpolation using the parameter in map, then {dot notation} */}
              Job Title: {name.jobTitle}
              <Link to={`/EmployeePage/${name.id}`}>
                {[name.firstName, name.lastName, name.id]}
              </Link>
              {/* Hired Date: {name.hiredDate} */}
            </h3>
          </section>
        )
      })}
    </>
  )
}
export default Company
