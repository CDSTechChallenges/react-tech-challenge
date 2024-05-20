import styled from "styled-components";

export const Welcome = styled.div`
  background-color: rgba(0, 0, 0, 0.87);
  color: rgba(255, 255, 255, 0.87);
  display: flex;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, .6)
`;

export const WelcomeText = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const WelcomeTitle = styled.span`
  font-size: 36px;
`;

export const WelcomeSubtitle = styled.span`
  font-size: 18px;
`;

export const Logos = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 200px;
`;

export const Plus = styled.span`
  font-size: 36px;
  font-wight: 600;
`;
