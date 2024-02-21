import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Header from "../components/Header"
import logement from "../assets/logements.json"
import Card from "../components/Card"

const background =
    "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)),url(../../../assets/img/background.png) center/cover"
const text = "Chez vous, partout et ailleurs"

const Home = () => {
    return (
        <>
            <Header />
            <Banner text={text} background={background} />
            <main className="home-content">
                {logement.map((logement, index) => (
                    <Card key={index} logement={logement} />
                ))}
            </main>
            <Footer />
        </>
    )
}

export default Home
