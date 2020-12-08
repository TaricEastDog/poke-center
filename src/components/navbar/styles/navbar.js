import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background-color: #00000095;
  width: 100%;
  max-height: 80px;
`;

export const SignoutButton = styled.button`
  border: 0;
  border-radius: 5px;
  padding: 0.4rem 1rem;
  cursor: pointer;
`;

export const Link = styled(ReactRouterLink)`
  padding-top: 0.5rem;
  color: white;
  text-decoration: none;
`;

export const Icon = styled.img`
  padding: 10px;
  border-radius: 80px;
  width: 60px;
  height: 60px;
  margin-left: auto;
`;

export const Dropdown = styled.div`
  display: none;
  background-color: #00000095;
  padding: 0 10px;
  gap: 10px;
  padding-bottom: 10px;
  border-top: 1px solid white;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;

  &:hover ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;
