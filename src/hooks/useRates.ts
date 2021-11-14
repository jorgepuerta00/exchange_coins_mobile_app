import { useGetRates } from '../api';

export function useRates() {
    const { data, error, isLoading } = useGetRates();
    return { 
			data, 
			error, 
			isLoading
    }
}