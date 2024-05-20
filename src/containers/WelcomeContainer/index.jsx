import GlitchedIcon from '../../assets/glitch.gif'
import ReactIcon from '../../assets/react.png'

import {
  Welcome,
  WelcomeText,
  WelcomeTitle,
  WelcomeSubtitle,
  Logos,
  Logo,
  Plus
} from './styles.js'

function WelcomeContainer() {
  return (
    <Welcome>
      <Logos>
        <Logo src={GlitchedIcon} alt="glitch" />
        <Plus>+</Plus>
        <Logo src={ReactIcon} alt="react" />
      </Logos>
      <WelcomeText>
        <WelcomeTitle>{"Welcome to Codigo del Sur!"}</WelcomeTitle>
        <WelcomeSubtitle>
          {"If you are seeing this then you've completed the setup. Sit back, relax and wait for the challenge to begin!"}
        </WelcomeSubtitle>
      </WelcomeText>
    </Welcome>
  );
}

export default WelcomeContainer;