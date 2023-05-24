import './styles.scss';
import PropTypes from 'prop-types';
import '@fortawesome/fontawesome-free/css/all.css';

function SocialMediaLinks({ socialMediaData }) {
  return (
    <div>
      <div className="colz-icon">
        {socialMediaData.map((data) => (
          <a
            href={data.where_to_go_link}
            key={data.index}
          ><data.icon_class />
          </a>
        ))}
      </div>
    </div>
  );
}

SocialMediaLinks.propTypes = {
  socialMediaData: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      icon_class: PropTypes.elementType.isRequired,
      where_to_go_link: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default SocialMediaLinks;
