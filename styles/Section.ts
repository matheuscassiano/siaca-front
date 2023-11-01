import styled from "styled-components";

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8em 0;
`;
const SectionTitle = styled.h3`
  color: darkslategray;
  font-weight: 500;
  font-size: 1.5rem;
`;

export const Section = {
  Container: SectionContainer,
  Title: SectionTitle,
};
