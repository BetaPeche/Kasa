import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"
import Gallery from "../components/Gallery"
import Collapse from "../components/Collapse"
import Tag from "../components/Tag"
import Stars from "../components/Stars"

const Housing = ({ data }) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [hosting, setHosting] = useState()

    useEffect(() => {
        const entry = data.find((array) => array.id == id)
        if (!entry) {
            navigate("/error")
        } else {
            setHosting(entry)
        }
    }, [data, id, navigate])

    if (!hosting) {
        return
    }

    return (
        <main className="housing-content">
            <Gallery pictures={hosting.pictures} name={hosting.title} />
            <div className="hosting-info">
                <div className="hosting-title">
                    <h2>{hosting.title}</h2>
                    <p>{hosting.location}</p>
                    <div className="housing-tags">
                        {hosting.tags.map((value) => (
                            <Tag key={value} content={value} />
                        ))}
                    </div>
                </div>
                <div className="host">
                    <div className="host-img-name">
                        <h3>{hosting.host.name}</h3>
                        <img src={hosting.host.picture} alt="" />
                    </div>
                    <Stars numbers={parseInt(hosting.rating)} />
                </div>
            </div>
            <div className="collapses">
                <Collapse title={"Description"} content={hosting.description} />
                <Collapse
                    title={"Equipements"}
                    contentList={hosting.equipments}
                />
            </div>
        </main>
    )
}

Housing.propTypes = {
    data: PropTypes.array.isRequired,
}

export default Housing
