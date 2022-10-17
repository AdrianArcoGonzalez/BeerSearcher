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
    &__beer-title {
      padding: 10px;
      height: 80px;
    }
  }
  .beer-description {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;
  }
  .buttons-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
  }
`;

export default BeerStyled;
