import { useParams } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Housing = () => {
    const { id } = useParams()

    return (
        <>
            <Header />
            <h1>Logement: {id}</h1>
            <Footer />
        </>
    )
}

export default Housing
