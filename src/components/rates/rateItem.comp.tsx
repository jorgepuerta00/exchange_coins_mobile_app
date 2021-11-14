import React from 'react';
import { Block, Card } from '../../shared/components';

interface IRateItemProps {
  flag: string,
  name: string,
  code: string,
  rate: string,
  symbol: string,
}

const RateItem: React.FC<IRateItemProps> = ({
    flag,
    name,
    code,
    rate,
    symbol
  }) => {
  
  return (
    <Block>
      <Card flag={flag} name={name} code={code} amount={rate} symbol={symbol}/>
    </Block>
  );
}
  
export default RateItem;