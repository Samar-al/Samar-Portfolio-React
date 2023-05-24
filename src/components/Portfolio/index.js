import PropTypes from 'prop-types';
import './styles.scss';
import ProjHome from '../ProjHome';

const Portfolio = ({ projData, isDark }) => (
  <div>
    <div className={`work_page ${isDark ? 'dark-mode' : ''}`} id="my-work">
      <div className="proj_component">
        <ProjHome isDark={isDark} />
      </div>
      <div className="project_work_page">
        {projData.map((project) => (
          <div
            className="section"
            key={project.id}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="pcontainer">
              <img src={project.project_image} alt="project Images" />
              <div className="proj_header">
                <h3>{project.project_name}</h3>
                <h4>{project.proj_creation_date}</h4>
              </div>
              <div className="proj_descriptions">
                <p>{project.proj_description}</p>
              </div>
              <div className="proj_btns">
                <a
                  href={project.proj_code_like}
                  target={project.proj_code_like !== '#' ? '_blank' : ''}
                  rel="noreferrer"
                >
                  <button type="button" className="proj_code">Project Code</button>
                </a>
                <a
                  href={project.proj_live_link}
                  target={project.proj_live_link !== '#' ? '_blank' : ''}
                  rel="noreferrer"
                >
                  <button type="button" className="proj_live">Live Project</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
Portfolio.propTypes = {
  projData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      project_name: PropTypes.string.isRequired,
      proj_creation_date: PropTypes.string.isRequired,
      project_image: PropTypes.elementType.isRequired,
      proj_code_like: PropTypes.string.isRequired,
      proj_live_link: PropTypes.string.isRequired,

    }),
  ).isRequired,
  isDark: PropTypes.bool.isRequired,
};
export default Portfolio;
