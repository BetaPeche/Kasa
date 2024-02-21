import { useParams } from "react-router-dom"

const Housing = () => {
    const { id } = useParams()
    console.log(id)
    return <h1>Logement: {id}</h1>
}

export default Housing
