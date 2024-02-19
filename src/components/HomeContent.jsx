import React from "react"
import logement from "../assets/logements.json"
import Card from "./Card"
console.log(logement)

const HomeContent = () => {
    return (
        <ul className="home-content">
            {logement.map((logement, index) => (
                <Card key={index} logement={logement} />
            ))}
        </ul>
    )
}

export default HomeContent
