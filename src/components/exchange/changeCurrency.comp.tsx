import * as React from 'react';
import { Block, Select, Modal } from '../../shared/components';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Colors, Sizes } from '../../shared/theme';
import { IWallet } from '../../models/wallet/wallet.types';

export interface IChangeCurrencyProps { 
  options: IWallet[],
  visible: boolean,
	onClose: any,
  onSelected: any
}

const ChangeCurrency: React.FC<IChangeCurrencyProps> = ({ 
  options,
  visible,
  onClose,
  onSelected
}) => {
  return (
    <Modal visible={visible}>
      <Block width={Sizes.WIDTH * 0.75} height={Sizes.WIDTH}>
        <Block flex>
          <Select options={options} onSelected={(item: string) => onSelected(item)}/>
        </Block>
        <Block paddingTop={Sizes.BASE}>
          <Button title='Close' style={{ backgroundColor: Colors.light.primary }} onPress={() => onClose()}/>
        </Block>
      </Block>
    </Modal>
  );
};

export default ChangeCurrency;