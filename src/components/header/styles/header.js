import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: linear-gradient(transparent, #323232),
    url("/images/header-bg.jpg") top left / cover no-repeat;
`;

export const Frame = styled.div`
  justify-content: space-between;
`;

export const Image = styled.img`
  margin: 0 30px;
  width: 330px;
  height: 250px;
`;

export const Logo = styled.img`
  width: 108px;
  height: 52px;
`;

export const ButtonLink = styled(ReactRouterLink)``;
