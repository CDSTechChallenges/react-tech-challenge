import PropTypes from 'prop-types'

function LikeCounterComponent({ postData }) {
  const { likes, date } = postData
  
  return (
    <>
      <div>{likes} Likes</div>
      <div>{date}</div>
    </>
  )
}

LikeCounterComponent.propTypes = {
  postData: PropTypes.object
}

export default LikeCounterComponent