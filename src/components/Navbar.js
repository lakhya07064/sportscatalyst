import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from "react-router-dom"

export class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-warning ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><h3>Sports Catalyst</h3></Link >
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link >
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link"to="/about">About</Link >
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/Cricket">Cricket</Link >
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Football">Football</Link >
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Hockey">Hockey</Link >
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Tennis">Tennis</Link >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar