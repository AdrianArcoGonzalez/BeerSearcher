import { Beer as IBeer } from "../../interfaces/interfaces";
import Button from "../Button/Button";
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
        <img
          src={imageSrc}
          alt={name}
          className="image-block__image"
          height={250}
          width={250}
        />
      </div>
      <p className="beer-description">{description}</p>
      <div className="buttons-block">
        <Button actionOnClick={() => {}} text="Another Beer" />
        <Button actionOnClick={() => {}} text="Random non alcoholic beer" />
      </div>
    </BeerStyled>
  );
};

export default Beer;
