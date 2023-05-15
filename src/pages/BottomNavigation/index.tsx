import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from '../../constants/Colors';
import CustomText from '../../components/CustomText';
import Fonts from '../../constants/Fonts';
import styled from 'styled-components/native';
import Home from './Home';
import {FeedIcon, HomeIcon, PlansIcon, WalletIcon} from '../../assets/svgs';
import Plans from './Plans';
import Wallet from './Wallet';
import Feed from './Feed';
import Account from './Account';

const IconDot = styled.View`
  height: 8px;
  width: 8px;
  border-radius: ${8 / 2}px;
  background-color: ${Colors?.primary};
`;

const Image = styled.Image`
  height: 24px;
  width: 24px;
  border-radius: 12px;
`;

const Tab = createBottomTabNavigator();

type ComponentLabelProps = {
  focused: boolean;
  text: string;
};

const RenderComponentLabel = ({
  focused,
  text,
}: ComponentLabelProps): JSX.Element => {
  return focused ? (
    <IconDot style={{position: 'relative', bottom: 5, marginTop: 7}} />
  ) : (
    <CustomText
      color={focused ? Colors?.primary : Colors?.inactiveIcon}
      fontWeight={focused ? '500' : '700'}
      fontSize={12}
      fontFamily={Fonts?.DMSansMedium}>
      {text}
    </CustomText>
  );
};

type ComponentIconProps = {
  focused: boolean;
  activeIcon: JSX.Element;
  inacitveIcon: JSX.Element;
};

const RenderComponetIcon = ({
  focused,
  activeIcon,
  inacitveIcon,
}: ComponentIconProps): JSX.Element => {
  return focused ? activeIcon : inacitveIcon;
};

const BottomNavigation = () => {
  const placeholder =
    'https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg';
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        backBehavior="history"
        screenOptions={{
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.inactiveIcon,
          lazy: true,
          tabBarShowLabel: true,
          tabBarStyle: [
            {
              display: 'flex',
              height: 90,
              borderTopColor: Colors?.white,
              borderTopWidth: 0,
              position: 'relative',
            },
            null,
          ],
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: ({focused}) =>
              RenderComponentLabel({focused, text: 'Home'}),
            tabBarIcon: ({focused}) =>
              RenderComponetIcon({
                focused,
                activeIcon: <HomeIcon style={{color: Colors.primary}} />,
                inacitveIcon: <HomeIcon style={{color: Colors.inactiveIcon}} />,
              }),
          }}
        />

        <Tab.Screen
          name="Plans"
          component={Plans}
          listeners={{
            tabPress: (e: any) => {
              e.preventDefault();
            },
          }}
          options={{
            tabBarLabel: ({focused}) =>
              RenderComponentLabel({focused, text: 'Plans'}),
            tabBarIcon: ({focused}) =>
              RenderComponetIcon({
                focused,
                activeIcon: <PlansIcon style={{color: Colors.primary}} />,
                inacitveIcon: (
                  <PlansIcon style={{color: Colors.inactiveIcon}} />
                ),
              }),
          }}
        />

        <Tab.Screen
          name="Wallet"
          component={Wallet}
          listeners={{
            tabPress: (e: any) => {
              e.preventDefault();
            },
          }}
          options={{
            tabBarLabel: ({focused}) =>
              RenderComponentLabel({focused, text: 'Wallet'}),
            tabBarIcon: ({focused}) =>
              RenderComponetIcon({
                focused,
                activeIcon: <WalletIcon style={{color: Colors.primary}} />,
                inacitveIcon: (
                  <WalletIcon style={{color: Colors.inactiveIcon}} />
                ),
              }),
          }}
        />

        <Tab.Screen
          name="Feed"
          listeners={{
            tabPress: (e: any) => {
              e.preventDefault();
            },
          }}
          component={Feed}
          options={{
            tabBarLabel: ({focused}) =>
              RenderComponentLabel({focused, text: 'Feed'}),
            tabBarIcon: ({focused}) =>
              RenderComponetIcon({
                focused,
                activeIcon: <FeedIcon style={{color: Colors.primary}} />,
                inacitveIcon: <FeedIcon style={{color: Colors.inactiveIcon}} />,
              }),
          }}
        />

        <Tab.Screen
          name="Account"
          listeners={{
            tabPress: (e: any) => {
              e.preventDefault();
            },
          }}
          component={Account}
          options={{
            tabBarLabel: ({focused}) =>
              RenderComponentLabel({focused, text: 'Account'}),
            tabBarIcon: ({focused}) =>
              RenderComponetIcon({
                focused,
                activeIcon: (
                  <Image source={{uri: placeholder}} resizeMode="cover" />
                ),
                inacitveIcon: (
                  <Image source={{uri: placeholder}} resizeMode="cover" />
                ),
              }),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomNavigation;
