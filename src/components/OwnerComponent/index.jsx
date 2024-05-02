import PropTypes from 'prop-types'

function OwnerComponent({ userData }) {
  const { profilePicture, name } = userData

  return (
    <>
      <img href={profilePicture}></img>
      <div>{name}</div>
    </>
  )
}

OwnerComponent.propTypes = {
  userData: PropTypes.object
}

export default OwnerComponent