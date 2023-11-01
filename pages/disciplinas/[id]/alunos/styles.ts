import { styled } from "styled-components";

export const StudentFormContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
  padding: 1em 0 1.8em;
`;

export const StudentButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1em;
`;

export default StudentFormContainer;
