
import PropTypes from 'prop-types'

function MainImageComponent({ image }) {
  return (
    <img href={image} ></img>
  )
}

MainImageComponent.propTypes = {
  image: PropTypes.string
}

export default MainImageComponent