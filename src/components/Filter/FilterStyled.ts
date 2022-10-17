import styled from "styled-components";

const FilterStyled = styled.form`
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
  width: 100%;

  .form {
    justify-content: space-between;
    padding: 20px;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .inputs-block {
    display: flex;
    gap: 30px;
  }

  .title {
    padding: 20px;
  }

  .input-text {
    padding: 10px;
    font-size: 1.3rem;
  }

  input {
    font-family: inherit;
  }

  .label-input {
    padding: 10px;
    font-family: inherit;
  }

  .radio-inputs {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default FilterStyled;
