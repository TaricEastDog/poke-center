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
  margin-top: 10px;
  border-radius: 10px;
  padding: 0.4rem 1rem;
  cursor: pointer;
  background: rgba(1, 1, 1, 0);
  color: #e7e7e7;
  border: 1px solid #8b8888;
  transition: 0.3s;

  &:hover {
    background: rgba(1, 1, 1, 0.4);
  }
`;

export const Link = styled(ReactRouterLink)`
  display: block;
  padding: 0.5rem 0;
  color: #e7e7e7;
  text-decoration: none;
  border-bottom: 1px solid #8b8888;
  transition: 0.3s;

  &:hover {
    background: rgba(1, 1, 1, 0.4);
  }
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
  padding: 0 15px;
  padding-bottom: 10px;
  border-top: 1px solid #8b8888;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;

  &:hover ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;
