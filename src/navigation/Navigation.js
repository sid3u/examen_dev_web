import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

import Search from '../components/Search';
import Personne from '../components/Personne';
import Favoris from '../components/Favoris';
import Assets from './../components/definitions/Assets';
import Colors from './../components/definitions/Colors';

const SearchNavigation = createStackNavigator();
const FavNavigation = createStackNavigator();
const TabNavigation = createBottomTabNavigator();

/* function RootStack() {
   return (
    <SearchNavigation.Navigator
      initialRouteName="ViewSearch"
    >
      <SearchNavigation.Screen
        name="ViewSearch"
        component={Search}
        options={{ title: 'Search' }}
      />
      <SearchNavigation.Screen
        name="ViewPersonne"
        component={Personne}
        options={{ title: 'Personne' }}
      />
    </SearchNavigation.Navigator>
  ); 
 } */



 function searchStackScreens() {
    return (
      <SearchNavigation.Navigator
        initialRouteName="ViewSearch"
      >
        <SearchNavigation.Screen
          name="ViewSearch"
          component={Search}
          options={{ title: 'Recherche' }}
        />
        <SearchNavigation.Screen
          name="ViewPersonne"
          component={Personne}
          options={{ title: 'Personne' }}
        />
      </SearchNavigation.Navigator>
    )
  };
  
  function favStackScreens() {
    return (
      <FavNavigation.Navigator
        initialRouteName="ViewFav"
      >
        <FavNavigation.Screen
          name="ViewFav"
          component={Favoris}
          options={{ title: 'Favoris' }}
        />
        <FavNavigation.Screen
          name="ViewPersonne"
          component={Personne}
          options={{ title: 'Personne' }}
        />
      </FavNavigation.Navigator>
    )
  };
  
  function RootStack() {
    return (
      <TabNavigation.Navigator
        screenOptions={{

          headerShown: false
        }}>
        <TabNavigation.Screen
          name="Recherche"
          component={searchStackScreens}
          options={() => ({
            tabBarIcon: ({ color }) => {
              return <Image source={Assets.icons.search} style={{ tintColor: color }} />;
            }
          })}
        />
        <TabNavigation.Screen
          name="Favoris"
          component={favStackScreens}
          options={() => ({
            tabBarIcon: ({ color }) => {
              return <Image source={Assets.icons.favFull} style={{ tintColor: color }} />;
            }
          })}
        />
      </TabNavigation.Navigator>
    );
  }


export default RootStack;