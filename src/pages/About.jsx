import Banner from "../components/Banner"
import Header from "../components/Header"

const background =
    "linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)),url(../../../assets/img/background2.png) center/cover"
const text = ""

const About = () => {
    return (
        <>
            <Header />
            <Banner text={text} background={background} />
        </>
    )
}

export default About
