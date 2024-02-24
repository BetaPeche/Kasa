import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Housing from "./pages/Housing"
import Error from "./pages/Error"
import Header from "./components/Header"
import Footer from "./components/Footer"
import data from "../src/assets/logements.json"

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home data={data} />} />
                <Route path="/about" element={<About />} />
                <Route path="/housing/:id" element={<Housing data={data} />} />

                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
