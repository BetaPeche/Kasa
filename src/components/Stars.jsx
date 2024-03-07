import PropTypes from "prop-types"

const Stars = ({ numbers }) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
        stars.push(
            <i
                key={i}
                className={`fa-solid fa-star ${i < numbers ? "red" : "grey"}`}
            ></i>
        )
    }
    return <div className="stars">{stars}</div>
}
Stars.propTypes = {
    numbers: PropTypes.number.isRequired,
}

export default Stars
