import Button from "../Button/Button";
import FilterStyled from "./FilterStyled";

const Filter = (): JSX.Element => {
  return (
    <FilterStyled>
      <h2 className="title">Search</h2>

      <input type="text" placeholder="Search" className="input-text" />
      <label htmlFor="name" className="label-input">
        <input type="checkbox" id="name" />
        by name
      </label>

      <label htmlFor="description" className="label-input">
        <input type="checkbox" id="description" />
        by description
      </label>

      <Button actionOnClick={() => {}} text="Search" />
    </FilterStyled>
  );
};

export default Filter;
