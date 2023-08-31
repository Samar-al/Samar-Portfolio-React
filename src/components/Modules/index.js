import './styles.scss';
import PropTypes from 'prop-types';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Modules = ({ isDark, ModulesData }) => (
  <section className={`modules_section ${isDark ? 'dark-mode' : ''}`}>
    <h3>Since thoses are modules, you can't access live demos. here's a description.</h3>
    {ModulesData.map((data) => (
      <div key={data.id} className="modules_project" id={data.title}>
        <Card className={`modules_card ${isDark ? 'dark-mode' : ''}`} sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Prestashop Module
            </Typography>
            <ImageList
              className="module_imageList"
              sx={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}
              cols={3}
              rowHeight={164}
            >
              {data.img.map((item) => (
                <ImageListItem key={item} style={{ border: '1px solid #e0e0e0' }}>
                  <img
                    src={`${item}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
            <Typography sx={{ mb: 1.5 }} color="text.primary" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
              {data.title}
            </Typography>
            <Typography variant="body2" style={{ textAlign: 'justify', margin: '0 auto', maxWidth: '600px' }}>
              {data.description.split('\n').map((paragraph, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <React.Fragment key={`${data.id}-${index}`}>
                  {paragraph}
                  <br />
                </React.Fragment>
              ))}
            </Typography>
          </CardContent>
        </Card>
      </div>
    ))}
  </section>
);

Modules.propTypes = {
  isDark: PropTypes.bool.isRequired,
  ModulesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.arrayOf(PropTypes.string).isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default Modules;
