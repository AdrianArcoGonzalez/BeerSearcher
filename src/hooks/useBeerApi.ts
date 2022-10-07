import axios from "axios";
import { Beer } from "../interfaces/interfaces";
import { useAppDispatch } from "../store/hooks";
import { randomBeerActionCreator } from "../store/slices/beersSlice";
import environments from "../utils/environments";

const useBeerApi = () => {
  const dispatch = useAppDispatch();

  const getRandomBeer = async () => {
    const response = await axios.get(environments.randomBeer);
    const newBeer: Beer = response.data[0];
    dispatch(randomBeerActionCreator(newBeer));
  };
  return { getRandomBeer };
};

export default useBeerApi;
