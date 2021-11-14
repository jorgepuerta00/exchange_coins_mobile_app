import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Block } from '../shared/components';
import { Text } from '../shared/atomic/ions';

import { RootStackScreenProps } from '../types';

export default function NotFoundScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
  return (
    <Block flex center middle>
      <Text h3 bold>This screen doesn't exist.</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')}>
        <Text p>Go to home screen!</Text>
      </TouchableOpacity>
    </Block>
  );
}