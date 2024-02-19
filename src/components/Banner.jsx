const Banner = (props) => {
    return (
        <section
            className="header-img"
            style={{
                background: props.background,
            }}
        >
            {props.text ? <p>{props.text}</p> : null}
        </section>
    )
}

export default Banner
