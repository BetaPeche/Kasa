import Banner from "../components/Banner"
import Card from "../components/Card"
import PropTypes from "prop-types"

const Home = ({ data }) => {
    const background =
        "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)),url(../../../assets/img/background.png) center/cover"
    const text = "Chez vous, partout et ailleurs"
    // console.log(data)

    return (
        <>
            <Banner text={text} background={background} />
            <main className="home-content">
                {data.map((data, index) => (
                    <Card key={index} logement={data} />
                ))}
            </main>
        </>
    )
}

Home.propTypes = {
    data: PropTypes.array.isRequired,
}

export default Home
