import './styles.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo/SamarLogo.png';

const Navbar = ({ navData, isDark, togglerIsDark }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className={`navbar ${isDark ? 'navbar--dark' : ''}`}>
      <div className="navbar__logo">
        <NavLink to="/" className="active"><img className="logo" src={logo} alt="logo representing an S and an A" /></NavLink>
      </div>
      <button
        className="menu-btn"
        type="button"
        onClick={() => {
          togglerIsDark();
        }}
      >{ isDark ? 'Deactivate' : 'Activate'} Dark mode
      </button>
      <div className={`navbar__items ${isMenuOpen ? 'open' : ''}`}>
        {
          navData.map((category) => (
            <NavLink
              to={`#${category.route}`}
              className={({ isActive }) => (isActive ? 'navlink--active' : 'navlink')}
              key={category.label}
              onClick={() => {
                handleMenuToggle();
                scrollToSection(category.route);
              }}
            >
              {category.label}
            </NavLink>
          ))
        }
      </div>
      <div className="navbar__burger" onClick={handleMenuToggle}>
        <div className={`navbar__burger-line ${isMenuOpen ? 'open' : ''}`} />
        <div className={`navbar__burger-line ${isMenuOpen ? 'open' : ''}`} />
        <div className={`navbar__burger-line ${isMenuOpen ? 'open' : ''}`} />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  navData: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isDark: PropTypes.bool.isRequired,
  togglerIsDark: PropTypes.func.isRequired,
};
export default Navbar;
