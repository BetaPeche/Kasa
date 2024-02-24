import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Housing from "./pages/Housing"
import Error from "./pages/Error"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
//import data from "../src/assets/logements.json"

const App = () => {
    const [data, setData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/src/assets/logements.json")
                const collectedData = await response.json()
                setData(collectedData)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])
    return (
        <BrowserRouter>
            <Header />
            {data ? ( // Vérifie si data est défini et non vide
                <Routes>
                    <Route path="/" element={<Home data={data} />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/housing/:id"
                        element={<Housing data={data} />}
                    />
                    <Route path="*" element={<Error />} />
                </Routes>
            ) : (
                <h1>Loading...</h1> // Affiche un indicateur de chargement si data est vide
            )}
            <Footer />
        </BrowserRouter>
    )
}

export default App
