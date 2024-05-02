import PropTypes from "prop-types";

import CommentSectionComponent from "../CommentSectionComponent";
import OwnerComponent from "../OwnerComponent";
import ActionsComponent from "../ActionsComponent";
import { SideBarWrapper } from "./styles";

function SideBarComponent({ postData }) {
  const { user, comments, likeCount, date } = postData;

  return (
    <SideBarWrapper>
      <OwnerComponent userData={user}></OwnerComponent>
      <CommentSectionComponent comments={comments}></CommentSectionComponent>
      <ActionsComponent likes={likeCount} date={date}></ActionsComponent>
    </SideBarWrapper>
  );
}

SideBarComponent.propTypes = {
  postData: PropTypes.object,
};

export default SideBarComponent;
