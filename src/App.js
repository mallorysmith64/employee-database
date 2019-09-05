import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Company from './components/Company'
import EmployeePage from './components/EmployeePage'
import AddEmployee from './components/AddEmployee'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <ul>
            <li>
              <Link to="/">Home </Link>
              <Link to="/EmployeePage">Employees</Link>
              <Link to="/AddEmployee">Add Employee</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Company}></Route>
            <Route exact path="/EmployeePage" component={EmployeePage}></Route>
            <Route exact path="/AddEmployee" component={AddEmployee}></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
