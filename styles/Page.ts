import { styled } from "styled-components";

export const PageContainer = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PageContent = styled.section`
  max-height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 2.5em;
`;
