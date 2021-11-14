import React from 'react';
import { FlatList, Keyboard, TextInput, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { Colors } from '../../theme';
import Block from '../block/block.comp';
import Card from '../card/card.comp';
import { IWallet } from '../../../models/wallet/wallet.types';
import { currencyFormat } from '../../../hooks/useConvert';

export interface ISelectProps {
  options: IWallet[],
	onSelected: any
}

const CustomSelect: React.FC<ISelectProps> = ({ 
	options,
	onSelected
}) => {
	
	const [data, setData] = React.useState<Array<IWallet>>(options);
	const [value, setValue] = React.useState('');

  const searchItems = (text: string) => {
    const newData = options.filter((item: IWallet) => {
      const itemData = `${item.currency.toUpperCase()} ${item.name.toUpperCase()} ${item.symbol.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
		setData(newData);
		setValue(text);
  };

	const selectedItem = (item: string) => {
		setValue(item);
		onSelected(item);
	}

	const _renderItem = (item: IWallet) => {
    const { flag, name, currency, symbol, balance } = item; 
    return (
			<TouchableHighlight onPress={() => selectedItem(item.currency)} underlayColor={Colors.light.primary}>
      	<Card flag={flag} name={name} code={currency} amount={currencyFormat(balance, 3)} symbol={symbol}/>
			</TouchableHighlight>
    );
  }

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<Block flex>
				<Block square width='100%'>
					<TextInput
						style={{ width: '100%', height: '100%', fontSize: 20, fontWeight: 'bold', paddingLeft: 10 }}
						placeholder="Type here currenty code"
						placeholderTextColor={Colors.grey}
						onChangeText={text => searchItems(text)}
						value={value}
						maxLength={3}
					/>
				</Block>
				<Block flex>
					<FlatList
						data={data}
						keyExtractor={(item) => item.id}
        		renderItem={(object) => _renderItem(object.item)}
					/>
				</Block>
			</Block>
		</TouchableWithoutFeedback>
	);
}

export default CustomSelect;