import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

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
                  Profile,
               },
               {
                  // configurações das tabs
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
