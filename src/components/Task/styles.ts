import styled from "styled-components";

export const TaskItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: ${props => props.theme['gray-500']};
  border: 1px solid ${props => props.theme['gray-400']};
  border-radius: 0.5rem;
  gap: 0.75rem;
  width: 100%;

  div {
    display: flex;
    gap: 0.75rem;

    p {
      font-size: 0.875rem;
      line-height: 1.18rem;
    }
  }

  button {
      background: transparent;
      border: none;
      color: ${props => props.theme['gray-300']};
    }
`;