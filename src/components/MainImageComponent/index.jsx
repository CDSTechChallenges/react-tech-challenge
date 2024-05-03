import PropTypes from "prop-types";
import { MainImageWrapper, MainImage } from "./styles";
function MainImageComponent({ image }) {
  return (
    <MainImageWrapper>
      <MainImage src={image}></MainImage>
    </MainImageWrapper>
  );
}

MainImageComponent.propTypes = {
  image: PropTypes.string,
};

export default MainImageComponent;
