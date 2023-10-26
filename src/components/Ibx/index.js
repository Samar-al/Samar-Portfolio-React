/* eslint-disable max-len */
import './styles.scss';
import PropTypes from 'prop-types';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Ibx = ({ isDark }) => (
  <>
    <section className={`modules_section ${isDark ? 'dark-mode' : ''}`}>
      <h3>This project belongs to IBX Technology, therefore the code is private</h3>
    </section>
    <section className={`modules_section2 ${isDark ? 'dark-mode' : ''}`}>
      <article className={`article ${isDark ? 'dark-mode' : ''}`}>
        <h3>IBX Technology</h3>
        <p>This project involved creating a professional website for IBX Technology, a dynamic startup. Their primary requirement was a modern and visually appealing ‘vitrine’ website to showcase their products and projects. To ensure I understood their vision, I meticulously documented their specifications in a comprehensive project brief.</p>
        <p>Subsequently, I designed and developed a prototype for the website, optimizing it for both widescreen and mobile devices. This prototype underwent thorough validation and fine-tuning, aligning every detail with the client’s preferences.</p>
        <p>IBX Technology had a clear vision of what they wanted, as well as what they didn’t. With their input, I utilized JavaScript, React, and Gatsby to create the website, emphasizing search engine optimization (SEO) for maximum online visibility.</p>
        <p>Additionally, the logo for the website was expertly crafted by web designer and developer Stanislas Gerbault</p>
        <p>Throughout the project, we engaged in multiple rounds of feedback and revision, ensuring that every element resonated with their preferences.</p>
        <p>The final stages involved deploying the website, managing DNS transfers, domain registration, and configuring email settings. The end result is a fully responsive website that perfectly aligns with IBX Technology’s vision and delivers a seamless online experience.</p>
      </article>
    </section>
  </>
);

Ibx.propTypes = {
  isDark: PropTypes.bool.isRequired.isRequired,
};
export default Ibx;
