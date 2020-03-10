import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import Background from '../../components/Background';
import Appointment from '../../components/Appointment';

import { Container, Title, List } from './styles';

export default function Dashboard() {
   const [appointments, setAppointments] = useState([]);

   useEffect(() => {
      async function loadAppointments() {
         const response = await api.get('appointment');

         setAppointments(response.data);
      }

      loadAppointments();
   }, []);

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
