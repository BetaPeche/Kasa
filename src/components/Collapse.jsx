import { useState } from "react"

const Collapse = () => {
    const [showCollapse, setShowCollapse] = useState(false)

    return (
        <div className="collapse">
            <div className="collapse-title" onClick={}>Test</div>
            <div className="collapse-content"></div>
        </div>
    )
}

export default Collapse
