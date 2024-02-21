import Footer from "../components/Footer"
import Header from "../components/Header"
import { NavLink } from "react-router-dom"

const Error = () => {
    return (
        <>
            <Header />
            <main className="error-content">
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <NavLink to="/">Retourner sur la page d'accueil</NavLink>
            </main>
            <Footer />
        </>
    )
}

export default Error
