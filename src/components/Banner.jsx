import PropTypes from "prop-types"

const Banner = ({ background, text = "" }) => {
    return (
        <section
            className="banner"
            style={{
                background: background,
            }}
        >
            {text ? <p>{text}</p> : null}
        </section>
    )
}

Banner.propTypes = {
    background: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Banner
