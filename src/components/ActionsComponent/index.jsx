import PropTypes from "prop-types";
import ActionBarComponent from "../ActionBarComponent";
import LikeCounterComponent from "../LikeCounterComponent";
import CommentInputComponent from "../CommentInputComponent";

function ActionsComponent({ likes, date }) {
  return (
    <>
      <ActionBarComponent />
      <LikeCounterComponent likes={likes} date={date} />
      <CommentInputComponent />
    </>
  );
}

ActionsComponent.propTypes = {
  likes: PropTypes.number,
  date: PropTypes.string,
};

export default ActionsComponent;
