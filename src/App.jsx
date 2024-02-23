import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Housing from "./pages/Housing"
import Error from "./pages/Error"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { DataContext } from "./utils/context/context"
import { useEffect, useState } from "react"

const App = () => {
    const [data, setData] = useState([])

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
            <DataContext.Provider value={data}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/housing/:id" element={<Housing />} />

                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </DataContext.Provider>
        </BrowserRouter>
    )
}

export default App
