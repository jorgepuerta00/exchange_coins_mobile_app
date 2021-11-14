import * as React from 'react';
import { FlatList } from 'react-native';
import RateItem from '../../components/rates/rateItem.comp';
import { Block } from '../../shared/components';
import { Text } from '../../shared/atomic/ions';

import { useCountries, useRates, useWallets } from '../../hooks'
import { ICountry } from '../../models/country/country.types';
import { currencyFormat } from '../../hooks/useConvert';

export interface IRatesScreenProps { }

const RatesScreen: React.FC<IRatesScreenProps> = ({ }) => {

  const { data: dataWallets, isLoading: isLoadingWallets, error: errorWallets } = useWallets()
  const { data: dataCountries, isLoading: isLoadingCountries, error: errorCountries} = useCountries();
  const { data: dataRates, isLoading: isLoadingRates, error: errorRates } = useRates();

  const isValid = isLoadingCountries || isLoadingCountries || isLoadingWallets || errorCountries == null || errorWallets == null || errorRates == null;

  const _renderItem = (item: ICountry) => {
    const {name, currencies, flags } = item;
    return (
      <RateItem
        flag={flags && flags.png}
        name={name}
        code={currencies[0] && currencies[0].code}
        rate={currencies[0] ? dataRates!.rates[currencies[0].code] : ''}
        symbol={currencies[0] ? currencies[0].symbol : ''}
      />
    );
  }

  return (
    <Block height='100%'>
      {isLoadingCountries && <Text h4 bold color='green' style={{margin: 10}}>Countries are loading...</Text>}
      {isLoadingRates && <Text h4 bold color='green' style={{margin: 10}}>Rates are loading...</Text>}
      {isLoadingWallets && <Text h4 bold color='green' style={{margin: 10}}>Wallets are loading...</Text>}
      {errorCountries && <Text h4 bold color='red' style={{margin: 10}}>Error while retriving countries</Text>}
      {errorRates && <Text h4 bold color='red' style={{margin: 10}}>Error while retriving rates</Text>}
      {errorWallets && <Text h4 bold color='red' style={{margin: 10}}>Error while retriving wallets</Text>}
      { isValid &&
        <FlatList 
          windowSize={10}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          data={dataCountries}
          keyExtractor={(item) => item.name}
          renderItem={(object) => _renderItem(object.item)}
        /> 
      }
    </Block>
  );
};

export default RatesScreen;