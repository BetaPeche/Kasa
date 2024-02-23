import { useParams } from "react-router-dom"

const Housing = () => {
    const { id } = useParams()

    return (
        <>
            <h1>Logement: {id}</h1>
        </>
    )
}

export default Housing
