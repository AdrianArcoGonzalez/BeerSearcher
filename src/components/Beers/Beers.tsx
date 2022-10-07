import { Beer } from "../../interfaces";

const Beers = (): JSX.Element => {
  const beers: Beer[] = [];
  return (
    <ul className="beers-list">
      {beers.map((beer) => (
        <li className="beer" key={beer.id}>
          <img className="beer__img" src={beer.imageSrc} alt={beer.name} />
          <article className="beer__info">
            <h2 className="beer__title">{beer.name}</h2>
            <p className="beer__description">{beer.description}</p>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default Beers;
