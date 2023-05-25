/* eslint-disable max-len */
import PropTypes from 'prop-types';
import './styles.scss';
import aboutMeImg from '../../assets/img/pexels-luis-gomes-546819.jpg';

function About({ isDark }) {
  return (
    <section className={`about_me ${isDark ? 'aboutMe-dark' : ''}`} id="about_myself">
      <div className="container_01">
        <div className="my_img">
          <img id="img" src={aboutMeImg} alt="profile_image" />
        </div>
        <div className={`my_info ${isDark ? 'myInfo-dark' : ''}`}>
          <h2>
            About <span>Me</span>
          </h2>
          <article>
            <p>After eight years of successful experience in the optical industry, I decided to devote myself to a world that I have long been passionate about.</p>
            <p>I started self-training in order to make a career change.</p>
            <p>I then joined the <a href="https://oclock.io/">Ecole O'clock</a>, which has the Grande école du Numérique label, to become a full stack developer with a specialisation in the symfony framework.
              The training is intensive and adapted to the demands of the market.
              With the high level of my training and my personal involvement, I now have a solid level to work in the web development field.
            </p>
            <p> Over the past 8 years, I have acquired a great capacity to listen and understand the needs of customers as an optician.
              This experience allows me to better understand the expectations of customers and to communicate effectively with them in order to provide them with a website that meets their needs.
              For three years, I was the assistant manager of a team of 15 people. I gained solid experience in managing and uniting a team around a common goal.
            </p>
            <p>You are faced with a highly motivated person who learns quickly and has a great capacity to adapt.
              I never shy away from a challenge!
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

About.propTypes = {
  isDark: PropTypes.bool.isRequired,
};
export default About;
