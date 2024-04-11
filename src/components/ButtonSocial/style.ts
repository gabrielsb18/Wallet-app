import styled from 'styled-components/native';
import theme from "../../styles/theme";
import { RFValue } from 'react-native-responsive-fontsize';
import { Fontisto } from '@expo/vector-icons';

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
    background-color: ${theme.COLORS.GRAY6};
`;

export const ButtonFacebook = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 16px;
    width: ${RFValue(130)}px;
    height: ${RFValue(60)}px;
    margin-left: ${RFValue(10)}px;
    border-radius: 10px;
    box-shadow: 1px 3px 3px rgba(0,0,0,0.2);
    background-color: ${theme.COLORS.BLUE4};
`;

export const IconeButtonFacebook = styled(Fontisto)`
    font-size: ${RFValue(30)}px;
    color: ${theme.COLORS.WHITE}
`;

export const IconeButtonGoogle = styled(Fontisto)`
    font-size: ${RFValue(30)}px;
    color: ${theme.COLORS.RED}
`;

export const Title = styled.Text`
    color: ${theme.COLORS.BLACK};
    font-size: ${RFValue(15)}px;
    font-family: ${theme.FONTS.POPPINSLIGHT};
    margin-left: ${RFValue(10)}px;
`;

export const TitleFacebook = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-size: ${RFValue(15)}px;
    font-family: ${theme.FONTS.POPPINSLIGHT};
    margin-left: ${RFValue(10)}px;
`;