import axios from "axios";
import { Beer } from "../interfaces/interfaces";
import { useAppDispatch } from "../store/hooks";
import { randomBeerActionCreator } from "../store/slices/beersSlice";
import environments from "../utils/environments";

const useBeerApi = () => {
  const dispatch = useAppDispatch();

  const getRandomBeer = async () => {
    try {
      const response = await axios(environments.randomBeer);
      const data: Beer = response.data[0];
      if (data.image_url === null) {
        getRandomBeer();
        return;
      }

      const newBeer: Beer = {
        description: data.description,
        image_url: data.image_url,
        name: data.name,
        id: data.id,
      };

      dispatch(randomBeerActionCreator(newBeer));
    } catch (error) {}
  };

  return { getRandomBeer };
};

export default useBeerApi;
