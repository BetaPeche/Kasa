import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Card from "../components/Card"
import { useEffect, useState } from "react"

const Home = () => {
    const [data, setData] = useState([])
    const background =
        "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)),url(../../../assets/img/background.png) center/cover"
    const text = "Chez vous, partout et ailleurs"

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/src/assets/logements.json")
                const surveyData = await response.json()
                setData(surveyData)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])

    return (
        <>
            <Header />
            <Banner text={text} background={background} />
            <main className="home-content">
                {data.map((data, index) => (
                    <Card key={index} logement={data} />
                ))}
            </main>
            <Footer />
        </>
    )
}

export default Home
