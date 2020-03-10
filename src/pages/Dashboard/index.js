import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/Background';
import Appointment from '../../components/Appointment';

import { Container, Title, List } from './styles';

const data = [1, 2, 3, 4, 5];

export default function Dashboard() {
   return (
      <Background>
         <Container>
            <Title>Agendamentos</Title>

            <List
               data={data}
               keyExtractor={item => String(item)}
               renderItem={({ item }) => <Appointment data={item} />}
            />
         </Container>
      </Background>
   );
}

// configuração das tabs e paginas
Dashboard.navigationOptions = {
   tabBarLabel: 'Agendamentos',
   tabBarIcon: ({ tintColor }) => (
      // Cria uma função que vem por parametro a cor do icone, e retorna um componente de icon
      <Icon name="event" size={20} color={tintColor} />
   ),
};
