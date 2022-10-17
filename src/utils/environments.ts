const environments = {
  randomBeer: process.env.REACT_APP_URL_API as string,
  noAlcoholBeer: process.env.REACT_APP_URL_NO_ALCOHOLIC as string,
  searchByBrewedBefore: process.env
    .REACT_APP_URL_SEARCH_BY_BREWED_BEFORE as string,
  searchByName: process.env.REACT_APP_URL_SEARCH_BY_NAME as string,
};

export default environments;
