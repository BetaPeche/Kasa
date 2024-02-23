import Banner from "../components/Banner"
import Collapse from "../components/Collapse"

const background =
    "linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)),url(../../../assets/img/background2.png) center/cover"
const text = ""

const data = [
    {
        title: "Fiabilité",
        content:
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
        title: "Respect",
        content:
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
        title: "Service",
        content:
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
        title: "Sécurité",
        content:
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
]

const About = () => {
    return (
        <>
            <Banner text={text} background={background} />
            <main className="about-content">
                {data.map(({ title, content }, index) => (
                    <Collapse key={index} title={title} content={content} />
                ))}
            </main>
        </>
    )
}

export default About
