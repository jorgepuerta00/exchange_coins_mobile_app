import { useQuery } from "react-query";
import axios from "axios";
import { ApiEndPoints } from '../constants/apiEndpoints';
import { IErrorResponse } from "../components/base/Types";
import { IRates } from "../models/rates/rates.types";

export default function useGetRates() {
  const api = axios.create({ baseURL: '' });
  return useQuery<IRates, IErrorResponse>(
    [ApiEndPoints.rates.getRates],
    async (): Promise<IRates> => {
      const { data } = await api.get(`${'http://api.exchangeratesapi.io/v1/latest?access_key=51b361b1b2102e9838c9aed9e9157a7f'}`);
      return data;
    },
  );
}