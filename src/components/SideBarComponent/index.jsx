import PropTypes from 'prop-types'

import CommentSectionComponent from "../CommentSectionComponent"
import OwnerComponent from "../OwnerComponent"
import ActionsComponent from "../ActionsComponent"

function SideBarComponent({ postData }) {
  const { user, comments } = postData

  return (
    <>
      <OwnerComponent userData={user}></OwnerComponent>
      <CommentSectionComponent comments={comments}></CommentSectionComponent>
      <ActionsComponent postData={postData}></ActionsComponent>
    </>
  )
}

SideBarComponent.propTypes = {
  postData: PropTypes.object
}

export default SideBarComponent
