import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/account/account.screen';
import NotFoundScreen from '../screens/notfound.screen';
import RatesScreen from '../screens/home/rates.screen';
import ExchangeScreen from '../screens/home/exchange.screen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { Sizes, Colors } from '../shared/theme';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabRates"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabRates"
        component={RatesScreen}
        options={({ navigation }: RootTabScreenProps<'TabRates'>) => ({
          title: 'Rates',
          headerTitleStyle: {
            fontSize: Sizes.H4
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="trademark" color={color} />
        })}
      />
      <BottomTab.Screen
        name="TabExchange"
        component={ExchangeScreen}
        options={{
          title: 'Exchange',
          headerTitleStyle: {
            fontSize: Sizes.H4,
            color: Colors.white
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="exchange" color={color} />,
          headerStyle: {backgroundColor: Colors.light.primary}
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
