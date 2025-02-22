import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">RecipeSpot</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/"><i className="fas fa-home"></i> Home</Link>
            </li>
            {isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link" to="/add-recipe"><i className="fas fa-plus"></i> Add Recipe</Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/about"><i className="fas fa-info-circle"></i> About Us</Link>
            </li>
          </ul>
          <div className="d-flex">
            {isLoggedIn ? (
              <div className="dropdown">
                <button className="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                  <i className="fas fa-user"></i> My Account
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                  <li><Link className="dropdown-item" to="/my-recipes">My Recipes</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
                </ul>
              </div>
            ) : (
              <>
                <Link className="btn btn-outline-light me-2" to="/login">Login</Link>
                <Link className="btn btn-primary" to="/register">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
