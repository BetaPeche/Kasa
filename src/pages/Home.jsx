import Banner from "../components/Banner"
import Header from "../components/Header"

const background =
    "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)),url(../../../assets/img/background.png) center/cover"
const text = "Chez vous, partout et ailleurs"

const Home = () => {
    return (
        <>
            <Header />
            <Banner text={text} background={background} />
        </>
    )
}

export default Home
