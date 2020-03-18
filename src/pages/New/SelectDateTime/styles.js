import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
   flex: 1;
`;

export const Piker = styled.View`
   background: #fff;
   padding: 15px 30px;
   margin-top: 30px;
`;

export const HourList = styled.FlatList.attrs({
   numColumns: 2,
   showVerticalScrollIndicator: 2,
})`
   padding: 0 20px;
`;

export const Hour = styled(RectButton)`
   background: #fff;
   border-radius: 4px;
   padding: 20px;
   flex: 1;
   align-items: center;
   margin: 0 10px 20px;
   opacity: ${props => (props.enabled ? 1 : 0.6)};
`;

export const Title = styled.Text`
   font-size: 14px;
   font-weight: bold;
   color: #333;
`;