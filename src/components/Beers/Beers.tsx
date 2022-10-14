import { useAppSelector } from "../../store/hooks";
import BeersStyled from "./BeersStyled";

const Beers = (): JSX.Element => {
  const { foundBeers } = useAppSelector((state) => state.beers);
  return (
    <BeersStyled>
      <ul className="beers-list">
        {foundBeers.map((beer) => (
          <li className="beer" key={beer.id}>
            <img
              className="beer__img"
              src={beer.image_url}
              alt={beer.name}
              height={150}
              width={150}
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
