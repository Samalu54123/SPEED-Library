import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import '../CSS/NavBar.css';  // Ensure this path is correct

interface NavbarProps {
  title: string;
  subtitle: string; // Add subtitle to props
  initialPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ title, subtitle, initialPage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      {/* Left: Website Title */}
      <div className="header">
        <Link href="/Analyst-home" className="header">SPEED</Link>
        <div className="subtitle">{subtitle}</div> {/* Render subtitle here */}
      </div>

      {/* Center: Current Page */}
      <div className="current-page">{initialPage}</div>

      {/* Right: Dropdown Menu */}
      <div className="dropdown-container">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
        <span className={`arrow ${isDropdownOpen ? 'open' : 'closed'}`}></span>
         
        </button>
        {isDropdownOpen && (
          <div className="dropdown">
            <Link href="/Analyst-home">ARTICLES</Link>
            <Link href="/create-article-Analyst">CREATE ARTICLES</Link>
            <Link href="/">SIGN OUT</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
