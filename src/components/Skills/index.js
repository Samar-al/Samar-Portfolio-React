import './styles.scss';
import PropTypes from 'prop-types';

function Skills({ skillsData, isDark }) {
  const mySkillDescription = [
    {
      index: 1,
      info: '⚡ Building responsive website front end and back-end using Symfony and Twig',
    },
    {
      index: 2,
      info: '⚡ Creating back-end web application in PHP with API REST endPoints end front-ends with React',
    },
    {
      index: 3,
      info: '⚡ Manage MySql databases with native PHP, Symfony or Laravel',
    },
  ];
  return (
    <div>
      <section id="my_skill">
        <div className={`my_skills ${isDark ? 'skills-dark' : ''}`}>
          <h2>
            My Skills <span>&</span> Abilities
          </h2>
        </div>
        <div className={`section_container_skills_gif ${isDark ? 'dark-mode' : ''}`}>
          <div className="skills_gif_container">
            {mySkillDescription.map((data) => (
              <div key={data.index}>{data.info}</div>
            ))}
          </div>
        </div>
        <div className={`container_s ${isDark ? 'container-dark' : ''}`}>
          {skillsData.map((skill) => (
            <div
              className="skill_box"
              key={skill.id}
              style={{ boxShadow: `0px 0px 12px ${skill.bx_shadow}` }}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="content_img_container">
                <img
                  src={skill.img_link}
                  alt={skill.img_content}
                  style={{ height: skill.img_height, filter: skill.img_styles }}
                />
              </div>
              <h3>{skill.skill_name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

Skills.propTypes = {
  skillsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      skill_name: PropTypes.string.isRequired,
      img_link: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isDark: PropTypes.bool.isRequired,
};
export default Skills;
