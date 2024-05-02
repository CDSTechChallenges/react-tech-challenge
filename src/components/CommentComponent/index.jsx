import PropTypes from "prop-types";
import {
  CommentWrapper,
  NameText,
  Name,
  Text,
  ProfileImgThumb,
} from "./styles";
function CommentComponent({ comment }) {
  const { user, text } = comment;
  const { profilePicture, name } = user;
  return (
    <CommentWrapper>
      <ProfileImgThumb src={profilePicture}></ProfileImgThumb>
      <NameText>
        <Name>{name}</Name>
        <Text>{text}</Text>
      </NameText>
    </CommentWrapper>
  );
}

CommentComponent.propTypes = {
  comment: PropTypes.object,
};

export default CommentComponent;
