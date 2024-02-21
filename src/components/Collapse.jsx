import { useState } from "react"
import PropTypes from "prop-types"

const Collapse = ({ title, content }) => {
    const [showCollapse, setShowCollapse] = useState(false)

    return (
        <div className={showCollapse ? "collapse open" : "collapse"}>
            <div
                className="collapse-title"
                onClick={() =>
                    showCollapse
                        ? setShowCollapse(false)
                        : setShowCollapse(true)
                }
            >
                <h2>{title}</h2>
                <i
                    className={
                        showCollapse
                            ? "fa-solid fa-chevron-down open"
                            : "fa-solid fa-chevron-down"
                    }
                ></i>
            </div>
            <div className="collapse-content">
                <p>{content}</p>
            </div>
        </div>
    )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default Collapse
