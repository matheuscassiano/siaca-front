import { Button, Card } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "styled-components";

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
`;

export const ItemContainer = styled.li`
  list-style: none;
`;

export const ItemCard = styled(Card)`
  position: relative;
  padding: 1em 1.5em 1em 1em;
  border-left: 0.5em solid #0d939c;
  overflow: unset;
`;

export const CardTitle = styled.p`
  font-weight: 500;
  font-size: 1.25rem;
`;

export const CardSubTitle = styled.p`
  font-weight: 500;
  font-size: 1rem;
`;

export const CardDescription = styled.p`
  font-weight: 400;
  font-size: 1rem;
`;

export const MoreButton = styled(Button)`
  width: 10px;
  padding: 0;
  position: absolute;
  top: 0.5em;
  right: 0;
  border-radius: 0.25em;
`;

export const MoreMenu = styled(Paper)`
  z-index: 50;
`;
