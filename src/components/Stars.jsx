import PropTypes from "prop-types"

const Stars = ({ numbers }) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
        if (i < numbers) {
            stars.push(<i key={i} className="fa-solid fa-star red"></i>)
        } else {
            stars.push(<i key={i} className="fa-solid fa-star grey"></i>)
        }
    }
    return <div className="stars">{stars}</div>
}
Stars.propTypes = {
    numbers: PropTypes.string.isRequired,
}

export default Stars
