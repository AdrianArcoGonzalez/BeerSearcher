import useBeerApi from "../../hooks/useBeerApi";
import { useAppSelector } from "../../store/hooks";
import Button from "../Button/Button";
import BeerStyled from "./BeerStyled";

const Beer = (): JSX.Element => {
  const { getRandomBeer } = useBeerApi();
  const {
    randomBeer: { description, image_url, name },
  } = useAppSelector((state) => state.beers);

  return (
    <BeerStyled>
      <div className="image-block">
        <h2 className="image-block__beer-title">{name}</h2>
        <img
          src={image_url}
          alt={name}
          className="image-block__image"
          height={250}
          width={250}
        />
      </div>
      <p className="beer-description">{description}</p>
      <div className="buttons-block">
        <Button actionOnClick={getRandomBeer} text="Another Beer" />
        <Button actionOnClick={() => {}} text="Random non alcoholic beer" />
      </div>
    </BeerStyled>
  );
};

export default Beer;
