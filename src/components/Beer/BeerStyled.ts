import styled from "styled-components";

const BeerStyled = styled.section`
  display: flex;
  padding: 20px;
  border: 1px solid black;

  .image-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    &__image {
      object-fit: contain;
    }
  }
  .beer-description {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .buttons-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
  }
`;

export default BeerStyled;
