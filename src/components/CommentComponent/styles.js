import styled from "styled-components";

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NameText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const Name = styled.span`
  text-align: left;
  font-size: 14px;
  font-weight: 600;
`;

export const Text = styled.span`
  text-align: left;
  font-size: 14px;
  font-weight: 400;
`;

export const ProfileImgThumb = styled.img`
  border-radius: 50%;
  height: 32px;
  width: 32px;
  padding: 8px;
`;
