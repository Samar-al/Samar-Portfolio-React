/* eslint-disable max-len */
import './styles.scss';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';
import Navbar from '../Navbar';
import SocialMedia from '../SocialMedia';
import '@fortawesome/fontawesome-free/css/all.css';

function Header({
  navData, socialMediaData, isDark, togglerIsDark,
}) {
  return (
    <div className="photo-cover">
      <Navbar navData={navData} isDark={isDark} togglerIsDark={togglerIsDark} />
      <div className="profil-container">
        <div className={`profil-parent ${isDark ? 'profil--dark' : ''}`}>
          <div className="profil-description">
            <div className="profil-description-name">
              <p>Hello, I'm <span className="highlighted-text">Samar Al khalil</span></p>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                <h1>
                  I am a
                  <span>
                    <Typewriter
                      options={{
                        strings: ['Full-stack developer', 'Back-end developer', 'Front-end developer'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </h1>
                <article className="profile-role-tagline">
                  <p>I have a preference for the back-end, but I am equally capable in the front-end and always ready to learn new technologies.</p>
                </article>
              </span>
              <div className="colz">
                <SocialMedia socialMediaData={socialMediaData} />
              </div>
            </div>

            <div className={`profile-options ${isDark ? 'profile-options-dark' : ''}`}>
              <a href="#contact_page">
                <button type="button" className="btn primary-btn">Hire Me</button>
              </a>
              <a href="../../assets/Samar-Alkhalil-Resume.pdf" download>
                <button type="button" className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background" />
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  navData: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  socialMediaData: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      icon_class: PropTypes.elementType.isRequired,
      where_to_go_link: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isDark: PropTypes.bool.isRequired,
  togglerIsDark: PropTypes.func.isRequired,
};
export default Header;
