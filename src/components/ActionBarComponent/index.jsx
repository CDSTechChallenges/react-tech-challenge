import HeartIcon from "../../assets/heart-icon.png";
import ShareIcon from "../../assets/share-icon.png";
import FavoriteIcon from "../../assets/favorite-icon.png";

import { ActionBarWrapper, LogoImg, LeftWrapper } from "./styles";

function ActionBarComponent() {
  return (
    <ActionBarWrapper>
      <LeftWrapper>
        <LogoImg src={HeartIcon} alt={"Like"}></LogoImg>
        <LogoImg src={ShareIcon} alt={"Share"}></LogoImg>
      </LeftWrapper>
      <LogoImg src={FavoriteIcon} alt={"Favorite"}></LogoImg>
    </ActionBarWrapper>
  );
}

export default ActionBarComponent;
