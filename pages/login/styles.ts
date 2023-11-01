import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import "../../app/globals.css";

import { CardContent } from "@mui/material";
import { styled } from "styled-components";

export const PageContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 38em 1fr;
  border-top: 0.8em solid #0d939c;
`;

export const LoginContainer = styled.div`
  padding: 2em;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 500;
`;

export const SubTitle = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  padding: 0.25em 0 0.5em 0;
`;

export const Anchor = styled.a`
  color: #00676e;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: darkslategray;
  }
`;

export const LoginContent = styled(CardContent)`
  width: 100%;
  height: calc(100% - 2em);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
  padding: 2em;
`;

export const LoginButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5em;
  margin-top: 0.5em;
`;

export const LoginCover = styled.img`
  width: 100%;
  height: calc(100vh - 0.75em);
  object-fit: cover;
`;

export default PageContainer;
