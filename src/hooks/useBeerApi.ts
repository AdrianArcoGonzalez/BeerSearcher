import axios from "axios";
import { useCallback } from "react";
import { errorModal, loadingModal } from "../components/Modals/Modals";
import { Beer } from "../interfaces/interfaces";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  loadBeersActionCreator,
  randomBeerActionCreator,
} from "../store/slices/beersSlice";
import environments from "../utils/environments";

const useBeerApi = () => {
  const dispatch = useAppDispatch();
  const { randomBeer } = useAppSelector((state) => state.beers);
  let randomNumber = 0;

  const getRandomBeer = useCallback(async () => {
    loadingModal("Loading...");

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
  }, [dispatch]);

  const getNonAlcoholicBeer = useCallback(async () => {
    loadingModal("Loading...");

    try {
      let response = await axios(environments.noAlcoholBeer);
      let data: Beer = response.data[randomNumber];

      if (data.id === randomBeer.id) {
        response = await axios(environments.noAlcoholBeer);
        data = response.data[randomNumber + 1];
      }
      const newBeer: Beer = {
        description: data.description,
        image_url: data.image_url,
        name: data.name,
        id: data.id,
      };

      dispatch(randomBeerActionCreator(newBeer));
    } catch (error) {
      errorModal("Cannot get a new beer now");
    }
  }, [dispatch, randomBeer.id, randomNumber]);

  const searchByBrewedBefore = async (brewedBeforeDate: string) => {
    const foundBeers: Beer[] = [];
    let beerPush = 0;

    try {
      const { data } = await axios(
        environments.searchByBrewedBefore + brewedBeforeDate
      );
      if (data.length[0]) {
        errorModal("No beers found");
        return;
      }
      do {
        if (data[beerPush].image_url !== null) {
          foundBeers.push(data[beerPush]);
        }
        beerPush++;
      } while (foundBeers.length < 5);

      dispatch(loadBeersActionCreator(foundBeers));
    } catch (error) {
      errorModal("Something went wrong");
    }
  };

  const searchByName = useCallback(
    async (nameToSearch: string) => {
      const foundBeers: Beer[] = [];
      let beerPush = 0;

      try {
        const { data } = await axios(environments.searchByName + nameToSearch);

        if (data.length === 0) {
          errorModal("No beers found");
          return;
        }

        do {
          if (data[beerPush].image_url !== null) {
            foundBeers.push(data[beerPush]);
          }
          beerPush++;
        } while (foundBeers.length < 5);

        dispatch(loadBeersActionCreator(foundBeers));
      } catch (error) {
        errorModal("Something went wrong");
      }
    },
    [dispatch]
  );

  return {
    getRandomBeer,
    getNonAlcoholicBeer,
    searchByBrewedBefore,
    searchByName,
  };
};

export default useBeerApi;
