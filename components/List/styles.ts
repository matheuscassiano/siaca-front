import { Card } from "@mui/material";
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
  padding: 1em 1.5em 1em 1em;
  border-left: 0.5em solid #0d939c;
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
