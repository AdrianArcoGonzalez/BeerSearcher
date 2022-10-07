import Beer from "./components/Beer/Beer";
import Beers from "./components/Beers/Beers";
import { mockBeer1 } from "./mocks/mocks";

const App = (): JSX.Element => {
  return (
    <>
      <Beer beer={mockBeer1} />
      <Beers />
    </>
  );
};

export default App;
