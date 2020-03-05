import React, { useRef } from 'react';
import { Image } from 'react-native';

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

export default function SignUp({ navigation }) {
   const emailRef = useRef();
   const passwordRef = useRef();

   function handleSubmit() {}

   return (
      <Background>
         <Container>
            <Image source={logo} />

            <Form>
               <FormInput
                  icon="person-outline"
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder="Digite seu nome completo"
                  returnKeyType="next" // apresenta o botão de next no teclado
                  onSubmitEditing={() => emailRef.current.focus()} // quando precionado vai dar o foco no password
               />

               <FormInput
                  icon="mail-outline"
                  keyboardType="email-address"
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder="Digite seu e-mail"
                  ref={emailRef}
                  returnKeyType="next" // apresenta o botão de next no teclado
                  onSubmitEditing={() => passwordRef.current.focus()} // quando precionado vai dar o foco no password
               />

               <FormInput
                  icon="lock-outline"
                  secureTextEntry
                  placeholder="Sua senha"
                  ref={passwordRef}
                  returnKeyType="send" // apresenta o botão de enviar no teclado
                  onSubmitEditing={handleSubmit} // quando precionado vai chamar o submit
               />

               <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
            </Form>

            <SignLink
               onPress={() => {
                  navigation.navigate('SignIn');
               }}
            >
               <SignLinkText>Já tenho conta</SignLinkText>
            </SignLink>
         </Container>
      </Background>
   );
}
