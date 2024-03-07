import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Card = ({ logement }) => {
    return (
        <Link to={`/housing/${logement.id}`}>
            <article className="card">
                <img src={logement.cover} alt={logement.title} />
                <h2>{logement.title}</h2>
            </article>
        </Link>
    )
}

Card.propTypes = {
    logement: PropTypes.object.isRequired,
}

export default Card
