import { useParams } from "react-router-dom"
import { DataContext } from "../utils/context/context"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Housing = () => {
    const { id } = useParams()
    const request = useContext(DataContext)
    const [data, setData] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const entry = request.find((array) => array.id == id)
        if (!entry) {
            navigate("/error")
        } else {
            setData(entry)
        }
    }, [id, request, navigate])

    if (!data) {
        return null
    }

    return <h1>Logement: {data.title}</h1>
}

export default Housing
