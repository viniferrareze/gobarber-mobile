import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/Background';

// import { Container } from './styles';

export default function Profile() {
   return <Background />;
}

Profile.navigationOptions = {
   tabBarLabel: 'Perfil',
   tabBarIcon: ({ tintColor }) => (
      // Cria uma função que vem por parametro a cor do icone, e retorna um componente de icon
      <Icon name="person" size={20} color={tintColor} />
   ),
};
