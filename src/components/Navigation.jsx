import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <ul>
            <NavLink
                to="/"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
                <li>Accueil</li>
            </NavLink>
            <NavLink
                to="/about"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
                <li>A Propos</li>
            </NavLink>
        </ul>
    )
}

export default Navigation
