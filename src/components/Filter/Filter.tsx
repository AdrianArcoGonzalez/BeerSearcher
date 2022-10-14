import React, { SyntheticEvent, useState } from "react";
import Button from "../Button/Button";
import { errorModal, loadingModal } from "../Modals/Modals";
import FilterStyled from "./FilterStyled";

const Filter = (): JSX.Element => {
  const [state, setState] = useState({ searchBy: "name" });
  const [search, setSearch] = useState("");

  const handleChangeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, searchBy: event.target.value });
  };

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const validate = () => {
    const regex = new RegExp("[a-zA-Z0-9]");
    return regex.test(search);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(search);
    if (search === "") {
      errorModal("You need to fill the search space");
      return;
    } else if (validate() === false) {
      errorModal("It just accept letters, numbers, hyphens and spaces");
      return;
    }

    loadingModal("Aloja");
  };

  return (
    <FilterStyled onSubmit={handleSubmit}>
      <h2 className="title">Search</h2>

      <input
        type="text"
        placeholder="Search"
        className="input-text"
        onChange={handleChangeText}
      />

      <input
        type="radio"
        value="name"
        name="filter"
        id="name"
        onChange={handleChangeSelect}
      />
      <label htmlFor="name" className="label-input">
        by name
      </label>

      <input
        type="radio"
        value="brewedBefore"
        name="filter"
        id="brewedBefore"
        onChange={handleChangeSelect}
      />
      <label htmlFor="brewedBefore" className="label-input">
        by brewed before
      </label>

      <Button type="submit" text="Search" />
    </FilterStyled>
  );
};

export default Filter;
