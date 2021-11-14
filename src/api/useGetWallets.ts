import { useQuery } from "react-query";
import axios from "axios";
import { ApiEndPoints } from '../constants/apiEndpoints';
import { IErrorResponse } from "../components/base/Types";
import { IWallet } from "../models/wallet/wallet.types";

export default function useGetWallets() {
  const api = axios.create({ baseURL: '' });
  return useQuery<Array<IWallet>, IErrorResponse>(
    [ApiEndPoints.wallets.getWallets],
    async (): Promise<Array<IWallet>> => {
      const { data } = await api.get(`${'https://demo5046413.mockable.io/wallets'}`);
      return data;
    },
  );
}