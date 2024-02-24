import PropTypes from "prop-types"
import { useState } from "react"

const Gallery = ({ pictures, name }) => {
    const [index, setIndex] = useState(0)
    const numberImage = pictures.length - 1

    const rightClick = () => {
        setIndex(index + 1)
        if (index >= numberImage) {
            setIndex(0)
        }
    }
    const leftClick = () => {
        setIndex(index - 1)
        if (index <= 0) {
            setIndex(numberImage)
        }
    }

    return (
        <div className="gallery">
            <img className="gallery-picture" src={pictures[index]} alt={name} />
            {pictures.length > 1 && (
                <>
                    <img
                        className="arrow left-arrow"
                        src="/public/assets/img/left-arrow.png"
                        alt="left-arrow"
                        onClick={leftClick}
                    />
                    <img
                        className="arrow right-arrow"
                        src="/public/assets/img/right-arrow.png"
                        alt="right-arrow"
                        onClick={rightClick}
                    />
                    {pictures.length > 1 && (
                        <p>
                            {index + 1}/{pictures.length}
                        </p>
                    )}
                </>
            )}
        </div>
    )
}

Gallery.propTypes = {
    pictures: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
}

export default Gallery
