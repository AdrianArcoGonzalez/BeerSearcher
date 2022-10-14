import styled from "styled-components";

const BeersStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .beers-list {
    margin: 0;
    padding: 0;
  }
  .beer {
    display: flex;

    &__img {
      max-width: 100%;
    }

    &__info {
      padding: 0 10px;
    }

    &__title {
      font-size: 1rem;
    }
  }
`;

export default BeersStyled;
