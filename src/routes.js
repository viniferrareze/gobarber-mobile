import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import SelectProvider from './pages/New/SelectProvider';
import SelectDateTime from './pages/New/SelectDateTime';
import Confirm from './pages/New/Confirm';

export default (signedIn = false) =>
   createAppContainer(
      createSwitchNavigator(
         {
            // Cria um grupo de rotas para quando o usuário não estiver logado
            Sign: createSwitchNavigator({
               SignIn,
               SignUp,
            }),

            // cria um grupo de rotas para quano o usuário estiver logado
            App: createBottomTabNavigator(
               {
                  // Cria a page como tipo tab bottom
                  Dashboard,
                  New: {
                     // cria um novo tipo de navegação, que cria uma pilha,
                     // ou seja conforme vai navegando pode voltar para tela anterior
                     screen: createStackNavigator(
                        {
                           SelectProvider,
                           SelectDateTime,
                           Confirm,
                        },
                        {
                           defaultNavigationOptions: {
                              headerTransparent: true,
                              headerTintColor: '#fff',
                              headerLeftContainerStyle: {
                                 marginLeft: 20,
                              },
                           },
                        }
                     ),
                     navigationOptions: {
                        tabBarVisible: false,
                        tabBarLabel: 'Agendar',
                        tabBarIcon: (
                           <Icon
                              name="add-circle-outline"
                              size={20}
                              color="rgba(255,255,255,0.6)"
                           />
                        ),
                     },
                  },
                  Profile,
               },
               {
                  // configurações das tabs
                  resetOnBlur: true, // toda vez q sair de uma rota é resetado..
                  tabBarOptions: {
                     keyboardHidesTabBar: true, // quando o teclado abrir vai passar por cima do tabbar
                     activeTintColor: '#fff',
                     inactiveTintColor: 'rgba(255,255,255,0.6)',
                     style: {
                        backgroundColor: '#8d41a8',
                     },
                  },
               }
            ),
         },
         {
            initialRouteName: signedIn ? 'App' : 'Sign', // Se estiver logado pega o grupo de rotas App se nao Sign
         }
      )
   );
