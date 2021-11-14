import * as React from 'react';
import { FlatList } from 'react-native';
import { Block } from '../../shared/components';
import { Text } from '../../shared/atomic/ions';

import { useWallets } from '../../hooks';
import RateItem from '../../components/rates/rateItem.comp';
import { IWallet } from '../../models/wallet/wallet.types';
import { currencyFormat } from '../../hooks/useConvert';

export interface IModalScreenProps { }

const ModalScreen: React.FC<IModalScreenProps> = ({ }) => {
  
  const { data: dataWallets } = useWallets()

  const _renderItem = (item: IWallet) => {
    const { flag, name, currency, symbol, balance } = item; 
    return (
      <RateItem flag={flag} name={name} code={currency} rate={currencyFormat(balance, 3)} symbol={symbol}/>
    );
  }

  return (
    <Block flex>
      <FlatList 
        windowSize={10}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        data={dataWallets}
        keyExtractor={(item) => item.id}
        renderItem={(object) => _renderItem(object.item)}
      /> 
    </Block>
  );
};

export default ModalScreen;