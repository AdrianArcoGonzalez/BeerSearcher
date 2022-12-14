import { useEffect } from "react";
import AppStyled from "./AppStyled";
import Beer from "./components/Beer/Beer";
import Beers from "./components/Beers/Beers";
import Filter from "./components/Filter/Filter";
import useBeerApi from "./hooks/useBeerApi";

const App = (): JSX.Element => {
  const { getRandomBeer, searchByName } = useBeerApi();

  useEffect(() => {
    (async () => {
      await getRandomBeer();
      await searchByName("beer");
    })();
  }, [getRandomBeer, searchByName]);

  return (
    <AppStyled>
      <h1 className="app-title">Beer searcher from punkapi</h1>
      <Beer />
      <Filter />
      <Beers />
    </AppStyled>
  );
};

export default App;
