import React from 'react';
import { StyleSheet } from 'react-native';
import { Image, Text } from '../../atomic/ions'
import Block from '../block/block.comp';

export interface ICardProps {
  flag: string,
  name: string,
  code: string,
  amount: string,
  symbol: string,
}

const Card: React.FC<ICardProps> = ({ 
    flag,
    name,
    code,
    amount,
    symbol
  }) => {

  return (
    <Block  style={styles.container}>
      <Image size='small' style={{ margin: 10 }} shadow source={{ uri: flag || 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'}}/>
      <Block flex row center space='between'>
        <Block>
          <Text h3 style={styles.text}>{name || 'Name'}</Text>
          <Text style={styles.text}>{code || 'Currency code'}</Text>
        </Block>
        <Text h3 style={{ marginRight: 10 }}>{symbol + ' ' + (amount || 'Amount')}</Text>
      </Block>
    </Block>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-around', 
    marginTop: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  text: {
    marginTop: 5
  }
});