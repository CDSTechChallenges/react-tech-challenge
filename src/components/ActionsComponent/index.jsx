import PropTypes from 'prop-types'
import ActionBarComponent from "../ActionBarComponent"
import LikeCounterComponent from "../LikeCounterComponent"
import CommentInputComponent from "../CommentInputComponent"

function ActionsComponent({ postData }) {
  return (
    <>
      <ActionBarComponent />
      <LikeCounterComponent postData={postData} />
      <CommentInputComponent />
    </>
  )
}

ActionsComponent.propTypes = {
  postData: PropTypes.object
}

export default ActionsComponent