import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"

const Housing = ({ data }) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [hosting, sethosting] = useState()

    useEffect(() => {
        const entry = data.find((array) => array.id == id)
        if (!entry) {
            navigate("/error")
        } else {
            sethosting(entry)
        }
    }, [data, id, navigate])
    if (!hosting) {
        return
    }
    console.log(hosting.pictures[0])

    return (
        <main className="housing-content">
            <div className="gallery">
                <img
                    className="gallery-picture"
                    src={hosting.pictures[0]}
                    alt={hosting.title}
                />
                <img className="arrow left-arrow" src="" alt="" />
                <img className="arrow right-arrow" src="" alt="" />
            </div>
            <div className="hosting-info">
                <div className="hosting-title">
                    <h2>{hosting.title}</h2>
                    <p>{hosting.location}</p>
                </div>
                <div className="host">
                    <h3>{hosting.host.name}</h3>
                    <img src={hosting.host.picture} alt="" />
                </div>
            </div>
        </main>
    )
}

Housing.propTypes = {
    data: PropTypes.array.isRequired,
}

export default Housing
