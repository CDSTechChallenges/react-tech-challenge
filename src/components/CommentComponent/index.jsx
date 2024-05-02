import PropTypes from 'prop-types'

function CommentComponent({ comment }) {
  const { profilePicture, name, text } = comment
  
  return (
    <>
      <img href={profilePicture}></img>
      <>
        <div>{name}</div>
        <div>{text}</div>
      </>
    </>
  )
}

CommentComponent.propTypes = {
  comment: PropTypes.object
}

export default CommentComponent