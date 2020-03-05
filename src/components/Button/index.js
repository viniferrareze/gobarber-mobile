import React from 'react';
import { ActivityIndicator } from 'react-native'; // serve para adicionar sinal de load no button
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function Button({ children, loading, ...rest }) {
   return (
      <Container {...rest}>
         {loading ? (
            <ActivityIndicator size="smal" color="#fff" />
         ) : (
            <Text>{children}</Text>
         )}
      </Container>
   );
}

Button.propTypes = {
   children: PropTypes.string.isRequired,
   loading: PropTypes.bool,
};

Button.defaultProps = {
   loading: false,
};
