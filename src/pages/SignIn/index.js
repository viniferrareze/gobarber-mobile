import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '../../redux/modules/auth/actions';

import logo from '../../assets/logo.png';

import Background from '../../components/Background';

import {
   Container,
   Form,
   FormInput,
   SubmitButton,
   SignLink,
   SignLinkText,
} from './styles';

export default function SignIn({ navigation }) {
   const dispatch = useDispatch();
   const passwordRef = useRef();

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const loading = useSelector(state => state.auth.loading);

   async function handleSubmit() {
      dispatch(signInRequest(email, password));
   }

   return (
      <Background>
         <Container>
            <Image source={logo} />

            <Form>
               <FormInput
                  icon="mail-outline"
                  keyboardType="email-address"
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder="Digite seu e-mail"
                  returnKeyType="next" // apresenta o botão de next no teclado
                  onSubmitEditing={() => passwordRef.current.focus()} // quando precionado vai dar o foco no password
                  value={email}
                  onChangeText={setEmail}
               />

               <FormInput
                  icon="lock-outline"
                  secureTextEntry
                  placeholder="Sua senha"
                  ref={passwordRef}
                  returnKeyType="send" // apresenta o botão de enviar no teclado
                  onSubmitEditing={handleSubmit} // quando precionado vai chamar o submit
                  value={password}
                  onChangeText={setPassword}
               />

               <SubmitButton loading={loading} onPress={handleSubmit}>
                  Acessar
               </SubmitButton>
            </Form>

            <SignLink
               onPress={() => {
                  navigation.navigate('SignUp');
               }}
            >
               <SignLinkText>Criar conta gratuita</SignLinkText>
            </SignLink>
         </Container>
      </Background>
   );
}
