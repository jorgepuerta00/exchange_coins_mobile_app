import React from 'react';
import { useGetWallets } from '../api';
import { IWallet } from '../models/wallet/wallet.types';

export function useWallets() {
    const { data: dataWallets, error, isLoading } = useGetWallets();

    const [data, setData] = React.useState<Array<IWallet>>(dataWallets!)

    return { 
			data: data,
			setData,
			error, 
			isLoading
    }
}