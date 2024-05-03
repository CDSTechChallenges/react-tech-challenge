import PropTypes from "prop-types";
import { LikeCounterWrapper } from "./styles";
function LikeCounterComponent({ likes, date }) {
  return (
    <LikeCounterWrapper>
      <div>{likes} Likes</div>
      <div>{date}</div>
    </LikeCounterWrapper>
  );
}

LikeCounterComponent.propTypes = {
  likes: PropTypes.number,
  date: PropTypes.string,
};

export default LikeCounterComponent;
