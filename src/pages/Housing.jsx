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

    return <h1>Logement: {hosting.title}</h1>
}

Housing.propTypes = {
    data: PropTypes.array.isRequired,
}

export default Housing
