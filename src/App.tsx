import { useEffect } from "react";

import Beer from "./components/Beer/Beer";
import Beers from "./components/Beers/Beers";
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
      <Beers />
    </>
  );
};

export default App;
