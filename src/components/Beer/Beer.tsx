import { Beer as IBeer } from "../../interfaces/interfaces";
import BeerStyled from "./BeerStyled";

interface BeerProps {
  beer: IBeer;
}

const Beer = ({
  beer: { name, description, imageSrc },
}: BeerProps): JSX.Element => {
  return (
    <BeerStyled>
      <div className="image-block">
        <h2 className="image-block__beer-title">{name}</h2>
        <img src={imageSrc} alt={name} className="image-block__image" />
      </div>
      <p>{description}</p>
    </BeerStyled>
  );
};

export default Beer;
