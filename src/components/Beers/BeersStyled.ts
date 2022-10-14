import styled from "styled-components";

const BeersStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .beers-list {
    margin: 0;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
  .beer {
    display: flex;
    width: 100%;

    &__img {
      max-width: 100%;
      object-fit: contain;
    }

    &__info {
      flex: 4;
      padding: 0 10px;
    }

    &__title {
      font-size: 1rem;
    }
  }
`;

export default BeersStyled;
