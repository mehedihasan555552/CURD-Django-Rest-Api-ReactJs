import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>



<nav className="navbar navbar-expand-lg navbar-light bg-warning">
  <Link className="navbar-brand" to="/">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
      <Link className="nav-link active" to="/about">About </Link>
     
    </div>
  </div>
  <Link className='btn btn-primary' to='/adduser'>Add User</Link>
</nav>
            
        </div>
    )
}

export default Navbar
