import { useState } from "react"
import PropTypes from "prop-types"

const Collapse = ({ title, content, contentList }) => {
    const [showCollapse, setShowCollapse] = useState(false)

    return (
        <div className={showCollapse ? "collapse open" : "collapse"}>
            <div
                className="collapse-title"
                onClick={() =>
                    // showCollapse
                    //     ? setShowCollapse(false)
                    //     : setShowCollapse(true)
                    setShowCollapse((prevState) => !prevState)
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
                {content && showCollapse && <p>{content}</p>}
                {contentList && showCollapse && (
                    <ul>
                        {contentList.map((contenu) => (
                            <li key={contenu}>{contenu}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentList: PropTypes.array,
}

export default Collapse
