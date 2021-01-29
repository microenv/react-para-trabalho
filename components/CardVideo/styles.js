import styled from "styled-components";

export const Wrapper = styled.a`
  display: block;
  outline: none;
  text-decoration: none;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  min-height: 260px;

  &:hover,
  &:focus {
    background: #eee;
    box-shadow: 1px 2px 5px #ccc;
  }
`;

export const Thumbnail = styled.div`
  width: 100%;
  padding-top: 62%;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center center;
  margin-bottom: 15px;
`;

export const ContentWrapper = styled.div``;

export const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 14px;
  color: #888;
`;
