import styled from 'styled-components/native';
import theme from '../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import { Fontisto } from '@expo/vector-icons';

export const ButtonFace = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 16px;
    width: ${RFValue(130)}px;
    height: ${RFValue(60)}px;
    margin-left: ${RFValue(10)}px;
    border-radius: 10px;
    box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);
    background-color: ${theme.COLORS.BLUE4};
`;

export const Title = styled.Text`
    color: ${theme.COLORS.SHAPE};
    font-size: ${RFValue(15)}px;
    font-family: ${theme.FONTS.POPPINSREGULAR};
    margin-left: ${RFValue(10)}px;
`;

export const IconeFacebook = styled.Image`
    width: ${RFValue(25)}px;
    height: ${RFValue(25)}px;
`;

export const IconFacebook = styled(Fontisto)`
    color: ${theme.COLORS.SHAPE};
    font-size: ${RFValue(25)}px;
`;
