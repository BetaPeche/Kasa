import { useState } from "react"

const Collapse = () => {
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
                <h2>Test</h2>
                <i
                    className={
                        showCollapse
                            ? "fa-solid fa-chevron-down open"
                            : "fa-solid fa-chevron-down"
                    }
                ></i>
            </div>
            <div className="collapse-content">
                <p>contenu</p>
            </div>
        </div>
    )
}

export default Collapse
