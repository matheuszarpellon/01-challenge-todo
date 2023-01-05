import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 46rem;
  margin: 0 auto;
`;

export const FormContainer = styled.form`
  display: flex;
  gap: 0.5rem;
  height: 3.375rem;
  width: 100%;
  max-width: 46rem;
  padding: 0 1rem;
  margin-top: -1.68rem;
  z-index: 99;

  input {
    flex: 1;
    background: ${(props) => props.theme["gray-500"]};
    border: 1px solid ${(props) => props.theme["gray-700"]};
    border-radius: 0.5rem;
    padding: 0 1rem;
    font-size: 1rem;
    color: ${(props) => props.theme["gray-100"]};

    &::placeholder {
      color: ${(props) => props.theme["gray-300"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: ${(props) => props.theme["blue-700"]};
    color: ${(props) => props.theme["gray-100"]};
    padding: 0 1rem;
    border: none;
    border-radius: 0.5rem;
    font-weight: bold;
  }
`;

export const CountersContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 5.625rem;
  margin-bottom: 1.5rem;
  padding: 0 1rem;
`;

export const BaseCounter = styled.p`
  font-size: 0.875rem;
  font-weight: bold;

  span {
    background: ${(props) => props.theme["gray-400"]};
    color: ${(props) => props.theme["gray-200"]};
    padding: 3px 9px;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: bold;
  }
`;

export const CreatedCounter = styled(BaseCounter)`
  color: ${(props) => props.theme["blue-500"]};
`

export const FinishedCounter = styled(BaseCounter)`
  color: ${(props) => props.theme["purple-500"]};
`
