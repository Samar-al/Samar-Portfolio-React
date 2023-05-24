import PropTypes from 'prop-types';
import projImg from '../../assets/img/proj_img.png';
import './styles.scss';

function ProjHome({ isDark }) {
  return (
    <div className={`proj_containar_section ${isDark ? '--isdark' : ''}`}>
      <div className="proj_left">
        <h3>Projects & Experiences</h3>
        <p>
          You can find some of my projects on my Github profile.
          Some projects are hosted on a cloud VM so if you're unable to access them,
          it only  means i haven't turned it on, but the project works fine.
          Feel free to contact me if you have any questions.
          You can also reach out to me on any of
          the social media channels mentioned above.
        </p>
      </div>
      <div className="proj_right">
        <img src={projImg} alt="Project Img" />
      </div>
    </div>
  );
}

ProjHome.propTypes = {
  isDark: PropTypes.bool.isRequired,
};
export default ProjHome;
