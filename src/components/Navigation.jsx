import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <ul>
            <NavLink
                to="/"
                className={(nav) => (nav.isActive ? "active-link" : "")}
            >
                <li>Accueil</li>
            </NavLink>
            <NavLink
                to="/about"
                className={(nav) => (nav.isActive ? "active-link" : "")}
            >
                <li>A Propos</li>
            </NavLink>
        </ul>
    )
}

export default Navigation
