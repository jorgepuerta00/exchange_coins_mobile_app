import { useGetCountries } from '../api';

export function useCountries() {
    const { data, error, isLoading } = useGetCountries();
    return { 
			data: data?.filter(item => item.currencies.length > 0),
			error, 
			isLoading
    }
}