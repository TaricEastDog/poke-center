import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #00000085;
  align-items: center;
  width: 50vh;
  margin-top: 50px;
  gap: 1.5rem;
  padding: 20px 40px;
  border-radius: 10px;
`;

export const Title = styled.h1`
  margin: 10px 0;
`;

export const ButtonLink = styled(ReactRouterLink)`
  background-color: white;
  width: 100%;
  height: 50px;
  text-decoration: none;
  font-size: 24px;
  color: black;
  line-height: 50px;
  text-align: center;
  border-radius: 8px;

  transition: 0.3s;

  &:hover {
    background-color: #bdbdbd;
  }

  &:last-of-type {
    margin-bottom: 10px;
  }

  &:disabled {
    background-color: #bdbdbd;
  }
`;
