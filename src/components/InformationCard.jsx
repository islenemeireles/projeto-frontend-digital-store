import PropTypes from 'prop-types';
const InformationCard = ({ title, informations }) => {
    return (
        <div className="information-card">
            <h4 className="information-title">{title}</h4>
            <ul className="information-list">
                {informations.map((info, index) => (
                    <li key={index} className="information-item">
                        <a href={info.link} className="information-link">
                            {info.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
InformationCard.propTypes = {
    title: PropTypes.string.isRequired,
    informations: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired
        })
    ).isRequired
};
export default InformationCard;