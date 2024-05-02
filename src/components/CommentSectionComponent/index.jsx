import PropTypes from "prop-types";
import CommentComponent from "../CommentComponent";
import { CommentSectionWrapper } from "./styles";

function CommentSectionComponent({ comments }) {
  return (
    <CommentSectionWrapper>
      {comments.map((c) => (
        <CommentComponent key={c.id} comment={c} />
      ))}
    </CommentSectionWrapper>
  );
}

CommentSectionComponent.propTypes = {
  comments: PropTypes.array,
};

export default CommentSectionComponent;
