import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Header';
import navData from '../../data/categories';
import socialMedia from '../../data/SocialMData';
import applicationData from '../../data/ApplicationData';
import projectsData from '../../data/ProjectsData';
import AboutMe from '../AboutMe';
import Skills from '../Skills';
import Contact from '../Contact';
import './styles.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import Portfolio from '../Portfolio';

function App() {
  const [isDark, setIsDark] = useState(false); // 1

  const togglerIsDark = () => {
    setIsDark(!isDark);
  };
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <Header
                navData={navData}
                socialMediaData={socialMedia}
                isDark={isDark}
                togglerIsDark={togglerIsDark}
              />
              <AboutMe isDark={isDark} />
              <Skills skillsData={applicationData} isDark={isDark} />
              <Portfolio projData={projectsData} isDark={isDark} />
              <Contact isDark={isDark} />
            </>
          )}
        />
      </Routes>

    </div>
  );
}

export default App;
