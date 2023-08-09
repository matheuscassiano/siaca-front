import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import { Card } from "@mui/material";
import { styled } from "styled-components";

export const MenuContainer = styled(Card)`
  min-width: 21em;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.2em;
`;

export const MenuTitle = styled.h1`
  /* color: #00676e; */
  font-weight: 500;
  font-size: 1.5rem;
  padding: 0.2em 0 1em;
`;

export const MenuGroup = styled.div`
  padding: 1em 0;
`;

export const MenuGroupTitle = styled.p`
  /* color: #00676e; */
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 0.25em;
`;

export const MenuGroupItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5em;
  list-style: none;
  padding: 0.5em 1em;
  cursor: pointer;
  color: darkslategray;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 5px;
  transition: background-color ease-in-out 0.2s;

  &:hover {
    background-color: #4ec4cc;
  }
`;

export const MenuFooterContainer = styled.div`
  justify-self: flex-end;
`;

export const MenuFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  margin: 1.2em 0 0.8em;
  padding-top: 1.5em;
  border-top: 1px solid lightgrey;
`;

export const Profile = styled.img`
  width: 4em;
  height: 4em;
  object-fit: cover;
  border-radius: 100%;
`;

export const UserName = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
`;

export const UserEmail = styled.p`
  font-size: 0.9em;
`;
