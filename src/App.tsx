import { useEffect } from "react";

import Beer from "./components/Beer/Beer";
import Beers from "./components/Beers/Beers";
import Filter from "./components/Filter/Filter";
import useBeerApi from "./hooks/useBeerApi";

const App = (): JSX.Element => {
  const { getRandomBeer } = useBeerApi();

  useEffect(() => {
    (async () => {
      await getRandomBeer();
    })();
  }, [getRandomBeer]);

  return (
    <>
      <Beer />
      <Filter />
      <Beers />
    </>
  );
};

export default App;
