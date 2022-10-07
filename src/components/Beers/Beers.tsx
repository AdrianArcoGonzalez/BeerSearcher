import { Beer } from "../../interfaces";
import { mockBeers } from "../../mocks/mocks";
import BeersStyled from "./BeersStyled";

const Beers = (): JSX.Element => {
  const beers: Beer[] = mockBeers;
  return (
    <BeersStyled>
      <ul className="beers-list">
        {beers.map((beer) => (
          <li className="beer" key={beer.id}>
            <img
              className="beer__img"
              src={beer.imageSrc}
              alt={beer.name}
              height={100}
              width={100}
            />
            <article className="beer__info">
              <h2 className="beer__title">{beer.name}</h2>
              <p className="beer__description">{beer.description}</p>
            </article>
          </li>
        ))}
      </ul>
    </BeersStyled>
  );
};

export default Beers;
