import React from 'react';
import { Block, Modal } from '../../shared/components';
import { Text } from '../../shared/atomic/ions';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Colors } from '../../shared/theme';

interface IMessageProps {
	message: string,
	visible: boolean,
	onClose: any
}

const Message: React.FC<IMessageProps> = ({
		message,
		visible,
		onClose
  }) => {

  return (
		<Block flex absolute>
				<Modal visible={visible}>
						<Block>
								<Text h4 bold marginBottom color={Colors.black}>{message}</Text>
								<Button title='Close' style={{ backgroundColor: Colors.light.primary }} onPress={() => onClose()}/>
						</Block>
				</Modal>
		</Block>
  );
}
  
export default Message;