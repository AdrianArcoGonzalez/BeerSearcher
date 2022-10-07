import styled from "styled-components";

const BeersStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
