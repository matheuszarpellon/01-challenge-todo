import styled from "styled-components";

export const TasksContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid ${props => props.theme["gray-300"]};
  padding-top: 1rem;
`;

export const TaskItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: ${(props) => props.theme["gray-500"]};
  border: 1px solid ${(props) => props.theme["gray-400"]};
  border-radius: 0.5rem;
  gap: 0.75rem;
  width: 100%;

  div {
    display: flex;
    gap: 0.75rem;
    align-items: center;

    button {
      width: 1.125rem;
      height: 1.125rem;
      background: none;
      border: none;
      color: ${(props) => props.theme["purple-500"]};
    }

    p {
      font-size: 0.875rem;
      line-height: 1.18rem;

      s {
        color: ${(props) => props.theme["gray-300"]};
      }
    }
  }

  button {
    background: transparent;
    border: none;
    color: ${(props) => props.theme["gray-300"]};
  }
`;

export const BaseCheckbox = styled.div`
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 99px;
`;

export const EmptyCheckbox = styled(BaseCheckbox)`
  border: 2px solid ${(props) => props.theme["blue-500"]};
`;

export const CheckedCheckbox: any = styled(BaseCheckbox)`
  border: 2px solid ${(props) => props.theme["purple-500"]};
  background: ${(props) => props.theme["purple-500"]};
  color: ${(props) => props.theme["gray-100"]};
`;

export const EmptyTasksContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
  color: ${(props) => props.theme["gray-300"]};

  p {
    font-weight: bold;
  }
`;