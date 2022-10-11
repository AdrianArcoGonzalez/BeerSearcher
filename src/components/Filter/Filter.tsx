import Button from "../Button/Button";
import FilterStyled from "./FilterStyled";

const Filter = (): JSX.Element => {
  return (
    <FilterStyled>
      <h2>Search</h2>

      <input type="text" placeholder="Search" />
      <label htmlFor="checkbox">
        <input type="checkbox" id="checkbox" placeholder="by name" />
        <input type="checkbox" id="checkbox" placeholder="by description" />
      </label>

      <Button actionOnClick={() => {}} text="Search" />
    </FilterStyled>
  );
};

export default Filter;
