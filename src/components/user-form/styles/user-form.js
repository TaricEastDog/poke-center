import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #00000085;
  border-radius: 10px;
  margin-top: 100px;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: #dbdbdb;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  padding: 0.5rem;
  color: #dbdbdb;
  background-color: #00000095;
  border: none;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Text = styled.p`
  margin-top: 20px;
  color: #dbdbdb;
  font-size: 12px;
`;

export const Link = styled(ReactRouterLink)`
  font-size: 12px;
  color: white;
`;
