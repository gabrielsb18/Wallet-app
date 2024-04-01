import styled from 'styled-components/native';
import theme from "../../styles/theme";
import { RFValue } from 'react-native-responsive-fontsize';

export const Button = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 16px;
    width: ${RFValue(130)}px;
    height: ${RFValue(60)}px;
    margin-left: ${RFValue(10)}px;
    border-radius: 10px;
    box-shadow: 1px 3px 3px rgba(0,0,0,0.2);
    background-color: ${theme.COLORS.GRAY5};
`;

export const ButtonFace = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 16px;
    width: ${RFValue(130)}px;
    height: ${RFValue(60)}px;
    margin-left: ${RFValue(10)}px;
    border-radius: 10px;
    box-shadow: 1px 3px 3px rgba(0,0,0,0.2);
    background-color: ${theme.COLORS.GRAY5};
`;

export const IconeGoogle = styled.Image`
    width: ${RFValue(25)}px;
    height: ${RFValue(25)}px;
`;

export const IconeFacebook = styled.Image`
    width: ${RFValue(25)}px;
    height: ${RFValue(25)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${theme.FONTS.POPPINSLIGHT};
    margin-left: ${RFValue(10)}px;
`;