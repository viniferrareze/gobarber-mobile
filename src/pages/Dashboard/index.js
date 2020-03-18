import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import api from '../../services/api';

import Background from '../../components/Background';
import Appointment from '../../components/Appointment';

import { Container, Title, List } from './styles';

// isFocused = se a rota recebeu foco, pois ela ja esta criada na memoria....
function Dashboard({ isFocused }) {
   const [appointments, setAppointments] = useState([]);

   async function loadAppointments() {
      const response = await api.get('appointment');

      setAppointments(response.data);
   }

   useEffect(() => {
      if (isFocused) {
         loadAppointments();
      }
   }, [isFocused]);

   async function handleCancel(id) {
      const response = await api.delete(`appointment/${id}`);

      setAppointments(
         appointments.map(appointment =>
            appointment.id === id
               ? { ...appointment, canceled_at: response.data.canceled_at }
               : appointment
         )
      );
   }

   return (
      <Background>
         <Container>
            <Title>Agendamentos</Title>

            <List
               data={appointments}
               keyExtractor={item => String(item.id)}
               renderItem={({ item }) => (
                  <Appointment
                     onCancel={() => handleCancel(item.id)}
                     data={item}
                  />
               )}
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

// necessario passsar para verificar depois se a rota recebeu foco
export default withNavigationFocus(Dashboard);
