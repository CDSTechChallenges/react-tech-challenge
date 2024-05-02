import PropTypes from 'prop-types'
import CommentComponent from "../CommentComponent"

function CommentSectionComponent({ comments }) {
  return (
    comments.map(c => <CommentComponent key={c.id} comment={c} />)
  )
}

CommentSectionComponent.propTypes = {
  postData: PropTypes.array
}

export default CommentSectionComponent