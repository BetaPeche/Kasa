import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <nav>
            <ul className="navigation">
                <li>
                    <NavLink
                        to="/"
                        className={(nav) => (nav.isActive ? "active-link" : "")}
                    >
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={(nav) => (nav.isActive ? "active-link" : "")}
                    >
                        A Propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
