// import react from 'react';
import { useState } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="brand">MySite</a>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </div>
        </div>
        <div className="nav-toggle" onClick={toggleMenu}>☰</div>
      </div>
    </nav>
  );
};

export default Navbar;