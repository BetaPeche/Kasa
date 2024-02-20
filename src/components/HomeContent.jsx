import logement from "../assets/logements.json"
import Card from "./Card"

const HomeContent = () => {
    return (
        <main className="home-content">
            {logement.map((logement, index) => (
                <Card key={index} logement={logement} />
            ))}
        </main>
    )
}

export default HomeContent
