import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/Background';

import { updateProfileRequest } from '../../redux/modules/user/actions';
import { signOut } from '../../redux/modules/auth/actions';

import {
   Container,
   Title,
   Form,
   FormInput,
   SubmitButton,
   Separator,
   LogoutButton,
} from './styles';

export default function Profile() {
   const dispatch = useDispatch();
   const profile = useSelector(state => state.user.profile);

   const emailRef = useRef();
   const oldPasswordRef = useRef();
   const passwordRef = useRef();
   const confirmPasswordRef = useRef();

   const [name, setName] = useState(profile.name);
   const [email, setEmail] = useState(profile.email);
   const [oldPassword, setOldPassword] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

   useEffect(() => {
      setOldPassword('');
      setPassword('');
      setConfirmPassword('');
   }, [profile]);

   function handleSubmit() {
      dispatch(
         updateProfileRequest({
            name,
            email,
            oldPassword,
            password,
            confirmPassword,
         })
      );
   }

   function handleLogout() {
      dispatch(signOut());
   }

   return (
      <Background>
         <Container>
            <Title>Meu perfil</Title>

            <Form>
               <FormInput
                  icon="person-outline"
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder="Digite seu nome completo"
                  returnKeyType="next" // apresenta o botão de next no teclado
                  onSubmitEditing={() => emailRef.current.focus()} // quando precionado vai dar o foco no password
                  value={name}
                  onChangeText={setName}
               />

               <FormInput
                  icon="mail-outline"
                  keyboardType="email-address"
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder="Digite seu e-mail"
                  ref={emailRef}
                  returnKeyType="next" // apresenta o botão de next no teclado
                  onSubmitEditing={() => oldPasswordRef.current.focus()} // quando precionado vai dar o foco no password
                  value={email}
                  onChangeText={setEmail}
               />

               <Separator />

               <FormInput
                  icon="lock-outline"
                  secureTextEntry
                  placeholder="Sua senha atual"
                  ref={oldPasswordRef}
                  returnKeyType="next" // apresenta o botão de next no teclado
                  onSubmitEditing={() => passwordRef.current.focus()} // quando precionado vai dar o foco no password
                  value={oldPassword}
                  onChangeText={setOldPassword}
               />

               <FormInput
                  icon="lock-outline"
                  secureTextEntry
                  placeholder="Sua nova senha"
                  ref={passwordRef}
                  returnKeyType="next" // apresenta o botão de next no teclado
                  onSubmitEditing={() => confirmPasswordRef.current.focus()} // quando precionado vai dar o foco no password
                  value={password}
                  onChangeText={setPassword}
               />

               <FormInput
                  icon="lock-outline"
                  secureTextEntry
                  placeholder="Confirmação de senha"
                  ref={confirmPasswordRef}
                  returnKeyType="send" // apresenta o botão de enviar no teclado
                  onSubmitEditing={handleSubmit} // quando precionado vai chamar o submit
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
               />

               <SubmitButton onPress={handleSubmit}>
                  Atualizar Perfil
               </SubmitButton>

               <LogoutButton onPress={handleLogout}>Sair</LogoutButton>
            </Form>
         </Container>
      </Background>
   );
}

Profile.navigationOptions = {
   tabBarLabel: 'Perfil',
   tabBarIcon: ({ tintColor }) => (
      // Cria uma função que vem por parametro a cor do icone, e retorna um componente de icon
      <Icon name="person" size={20} color={tintColor} />
   ),
};
