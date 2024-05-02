import PropTypes from 'prop-types'
import { useContext } from "react"
import { useParams } from "react-router"

import MainImageComponent from "../../components/MainImageComponent"
import SideBarComponent from "../../components/SideBarComponent"
import { PostContext } from "../../App"

function PostContainer() {
  const { postId } = useParams()
  console.log(postId)
  const posts = useContext(PostContext)
  const postData = posts.find(p => p.id === postId)
  console.log(postData)

  return (
    <>
      <MainImageComponent image={postData.image}></MainImageComponent>
      <SideBarComponent postData={postData} />
    </>
  )
}

PostContainer.propTypes = {
  match: PropTypes.object
}

export default PostContainer
