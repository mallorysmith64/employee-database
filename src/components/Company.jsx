import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Company = () => {
  const [employee, setEmployee] = useState([])

  const getCompany = async () => {
    const resp = await axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/Company/realcompany'
    )
    console.log('api call', resp)
  }

  useEffect(() => {
    getCompany()
  }, [])

  return (
    <>
      <h2>something</h2>
    </>
  )
}
export default Company
