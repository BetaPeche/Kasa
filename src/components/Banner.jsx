import PropTypes from "prop-types"

const Banner = ({ background, text }) => {
    return (
        <section
            className="banner"
            style={{
                background: background,
            }}
        >
            <img src="" alt="" />
            {text && <h1>{text}</h1>}
        </section>
    )
}

Banner.propTypes = {
    background: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Banner
