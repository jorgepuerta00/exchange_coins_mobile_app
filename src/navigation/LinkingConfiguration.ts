import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabRates: {
            screens: {
              TabRatesScreen: 'rates',
            },
          },
          TabExchange: {
            screens: {
              TabExchangeScreen: 'exchange',
            },
          },
        },
      },
      Account: 'Account',
      NotFound: '*',
    },
  },
};

export default linking;
