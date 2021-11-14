import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Block } from '../../shared/components';
import { Text } from '../../shared/atomic/ions';
import { Colors } from '../../shared/theme';
import { convertCurrencies } from '../../hooks/useConvert';
import { TextInput } from '../../shared/atomic/atoms';

interface IExchangeItemProps {
	defaultValue: number,
	codeFrom: string,
	rateFrom: number,
	rateTo: number,
	symbol: string,
	balance: string,
	from?: boolean,
	onPress: any,
	onExchange: any
}

const ExchangeItem: React.FC<IExchangeItemProps> = ({
		defaultValue,
		codeFrom,
		rateFrom,
		rateTo,
		symbol,
		balance,
		from,
		onPress,
		onExchange
  }) => {

	const [amount, setAmount] = React.useState<number>(0)
	const [active, setActive] = React.useState<boolean>(false)

	React.useEffect(() => {
		onExchange({ amount, exchange: convertCurrencies(Number(amount), rateFrom, rateTo) })
	}, [amount])

	const sign = from ? '- ' : '+ '

  return (
		<Block flex middle row space='between' backgroundColor={from ? Colors.light.primary : Colors.light.secondary}>
			<TouchableWithoutFeedback onPress={onPress}>
				<Block>
						<Text extraLarge marginLeft color={Colors.white}>{ codeFrom }</Text>
						<Text h3 marginLeft color={Colors.white}>{'Balance:'} { symbol } { balance }</Text>
				</Block>
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback onPress={() => { setActive(true) }}>
				<Block>
					{active ? 
						<Block row>
							<Text extraLarge marginRight color={Colors.white}>{sign}</Text>
							<TextInput 
								onBlur={() => setActive(false)}
								onFocus={() => setActive(true)}
								value={amount.toString()} 
								onChangeText={(value: string) => setAmount(Number(value))}
							/>
						</Block>
						:
						<Text extraLarge marginRight color={Colors.white}>{sign + defaultValue}</Text>
					}
				</Block>
			</TouchableWithoutFeedback>
		</Block>
  );
}
  
export default ExchangeItem;