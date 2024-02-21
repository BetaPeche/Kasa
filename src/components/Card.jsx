import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"

const Card = ({ logement }) => {
    return (
        <NavLink to={`/housing/${logement.id}`}>
            <article
                className="card"
                style={{
                    background: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(10, 10, 10, 0.00) 42%, rgba(4, 4, 4, 0.20) 99.99%, rgba(0, 0, 0, 0.50) 100%),url(${logement.cover}) center/cover`,
                }}
            >
                {logement.title}
            </article>
        </NavLink>
    )
}

Card.propTypes = {
    logement: PropTypes.object.isRequired,
}

export default Card
