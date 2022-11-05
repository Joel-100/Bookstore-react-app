import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navbar = () => (
  <>
    <div className="nav-container flex">
      <h1>Bookstore CMS</h1>
      <ul className="list flex">
        <Link className="link" to="/">
          Books
        </Link>
        <Link className="link" to="/categories">
          Categories
        </Link>
      </ul>
      <FaUser className="icon" />
    </div>
  </>
);

export default Navbar;
