import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';

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
            App: createBottomTabNavigator({
               // Cria a page como tipo tab bottom
               Dashboard,
            }),
         },
         {
            initialRouteName: signedIn ? 'App' : 'Sign', // Se estiver logado pega o grupo de rotas App se nao Sign
         }
      )
   );
