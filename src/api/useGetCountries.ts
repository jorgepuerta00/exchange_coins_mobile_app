import { useQuery } from "react-query";
import axios from "axios";
import { ApiEndPoints } from '../constants/apiEndpoints';
import { IErrorResponse } from "../components/base/Types";
import { ICountry } from "../models/country/country.types";

export default function useGetCountries() {
  const api = axios.create({ baseURL: '' });
  return useQuery<Array<ICountry>, IErrorResponse>(
    [ApiEndPoints.countries.getCountries],
    async (): Promise<Array<ICountry>> => {
      const { data } = await api.get(`${'https://restcountries.com/v2/all?fields=name,currencies,flags'}`);
      return data;
    },
  );
}