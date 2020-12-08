import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Image = styled.img`
  margin: 0 30px;
  width: 330px;
  height: 250px;
`;

export const Logo = styled.img`
  width: 108px;
  height: 52px;
  margin: 10px;
  transition: 0.3s;

  &:hover {
    margin: 12px 8px 8px 12px;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  background-color: #e0e000;
  text-decoration: none;
  color: blue;
  font-weight: 600;
  margin: 10px;
  height: 35px;
  line-height: 35px;
  padding: 0 1rem;
  border: 2px solid #e0e000;
  border-radius: 35px;
  transition: 0.3s;

  &:hover {
    border: 2px solid blue;
  }
`;

export const SignInButton = styled.img`
  width: 124px;
  height: 52px;
  margin: 10px;
  transition: 0.3s;

  &:hover {
    margin: 12px 8px 8px 12px;
  }
`;

export const SignUpButton = styled.img`
  width: 124px;
  height: 52px;
  margin: 10px;
  transition: 0.3s;

  &:hover {
    margin: 12px 8px 8px 12px;
  }
`;

export const Group = styled.div`
  display: flex;
  gap: 30px;
`;
