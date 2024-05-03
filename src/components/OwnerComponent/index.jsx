import PropTypes from "prop-types";
import { PostOwnerWrapper, ProfileImgThumb, ProfileNameText } from "./styles";
function OwnerComponent({ userData }) {
  const { profilePicture, name } = userData;

  return (
    <PostOwnerWrapper>
      <ProfileImgThumb src={profilePicture}></ProfileImgThumb>
      <ProfileNameText>{name}</ProfileNameText>
    </PostOwnerWrapper>
  );
}

OwnerComponent.propTypes = {
  userData: PropTypes.object,
};

export default OwnerComponent;
