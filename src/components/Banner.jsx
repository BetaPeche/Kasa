import PropTypes from "prop-types"

const Banner = ({ background, text }) => {
    return (
        <section className="banner">
            <img src={background} alt="Magnifique paysage de nature" />
            {text && <h1>{text}</h1>}
            <span className={text ? "op-60" : "op-30"}></span>
        </section>
    )
}

Banner.propTypes = {
    background: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Banner
