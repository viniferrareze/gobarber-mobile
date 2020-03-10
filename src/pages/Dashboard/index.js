import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/Background';

// import { Container } from './styles';

export default function Dashboard() {
   return <Background />;
}

// configuração das tabs e paginas
Dashboard.navigationOptions = {
   tabBarLabel: 'Agendamentos',
   tabBarIcon: ({ tintColor }) => (
      // Cria uma função que vem por parametro a cor do icone, e retorna um componente de icon
      <Icon name="event" size={20} color={tintColor} />
   ),
};