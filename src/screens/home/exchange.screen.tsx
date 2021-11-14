import * as React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { Block } from '../../shared/components';
import { Text } from '../../shared/atomic/ions';
import { Button } from '../../shared/atomic/atoms';
import { ChangeCurrency, ExchangeItem, Message } from '../../components/exchange';

import { useRates, useWallets } from '../../hooks'
import { Colors } from '../../shared/theme';
import { currencyFormat } from '../../hooks/useConvert';
import { IWallet } from '../../models/wallet/wallet.types';
import { IMessage } from '../../models/message/message.types';

export interface IExhangeScreenProps { }

const ExhangeScreen: React.FC<IExhangeScreenProps> = ({ }) => {
  const { data: dataRates } = useRates();
  const { data: dataWallets, setData: setDataWallet } = useWallets();

  const [fromWallet, setFromWallet] = React.useState<IWallet>(dataWallets![0]);
  const [toWallet, setToWallet] = React.useState<IWallet>(dataWallets![1]);

  const [from, setFrom] = React.useState<string>(fromWallet.currency);
  const [fromRate, setFromRate] = React.useState<number>(dataRates!.rates[from]);
  const [modalSelectFrom, setModalSelectFrom] = React.useState<boolean>(false);

  const [to, setTo] = React.useState<string>(toWallet.currency);
  const [toRate, setToRate] = React.useState<number>(dataRates!.rates[to]);
  const [modalSelectTo, setModalSelectTo] = React.useState<boolean>(false);

  const [fromAmount, setFromAmount] = React.useState<number>(0);
  const [toAmount, setToAmount] = React.useState<number>(0);

  const [modalMessage, setModalMessage] = React.useState<boolean>(false);
  const [isValid, setIsValid] = React.useState<boolean>(true)

  React.useEffect(() => {
    const wallet = dataWallets?.find(item => item.currency == from) || dataWallets![0];
    setFromRate(dataRates!.rates[from]);
    setFromWallet(wallet);
    handleValidationWallets();
  }, [from]);

  React.useEffect(() => {
    const wallet = dataWallets?.find(item => item.currency == to) || dataWallets![1];
    setToRate(dataRates!.rates[to]);
    setToWallet(wallet);
    handleValidationWallets();
  }, [to]);

  React.useEffect(() => {
    handleValidationWallets();
  }, [fromAmount])

  function handleValidationWallets() {
    setIsValid(true)
    if(from == to) {
      setIsValid(false)
    }
    if(fromAmount > fromWallet.balance) {
      setModalMessage(true)
      setIsValid(false)
    }
  }

  function handleExchangeAmount() {
    const fromWalletUpdated = { ...fromWallet, balance: fromWallet.balance - fromAmount}
    const toWalletUpdated = { ...toWallet, balance: toWallet.balance + toAmount}

    setFromWallet(fromWalletUpdated);
    setToWallet(toWalletUpdated);
    
    updateWallet(fromWalletUpdated);
    updateWallet(toWalletUpdated);

    setFromAmount(0)
    setToAmount(0)
    
    Keyboard.dismiss()
  }

  const updateWallet = (updatedObject: IWallet) => {
    const index = dataWallets.findIndex(obj => obj.id === updatedObject.id);
    const newArray: Array<IWallet> = [...dataWallets];
    newArray[index].balance = updatedObject.balance;
    setDataWallet(newArray)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Block flex backgroundColor={Colors.light.primary}>
        <Block flex>
            <Text center h2 marginTop color={Colors.white}>{fromWallet.symbol}{currencyFormat(fromRate, 3)} = {toWallet.symbol}{currencyFormat(toRate, 3)}</Text>
            <ExchangeItem 
              from 
              defaultValue={fromAmount}
              codeFrom={from} 
              rateFrom={fromRate}
              rateTo={toRate} 
              symbol={fromWallet.symbol} 
              balance={currencyFormat(fromWallet.balance, 2)} 
              onPress={() => setModalSelectFrom(true)}
              onExchange={(result: ({ amount: number, exchange: number })) => { setToAmount(result.exchange), setFromAmount(result.amount) }}
            />
        </Block>
        <ExchangeItem
          defaultValue={toAmount}
          codeFrom={to} 
          rateFrom={toRate} 
          rateTo={fromRate} 
          symbol={toWallet.symbol} 
          balance={currencyFormat(toWallet.balance, 2)} 
          onPress={() => setModalSelectTo(true)}
          onExchange={(result: ({ amount: number, exchange: number })) => { setFromAmount(result.exchange), setToAmount(result.amount) }}
        />
        <ChangeCurrency 
          options={dataWallets} 
          visible={modalSelectFrom || modalSelectTo} 
          onClose={() => modalSelectFrom ? setModalSelectFrom(false) : setModalSelectTo(false)} 
          onSelected={(item: string) => modalSelectFrom ? setFrom(item) : setTo(item)}
        />
        <Button disabled={!isValid} shadow onPress={() => handleExchangeAmount()}/>
        <Message message={"Exceeds balance"} visible={modalMessage} onClose={() => setModalMessage(false)}/>
      </Block>
    </TouchableWithoutFeedback>
  );
};

export default ExhangeScreen;