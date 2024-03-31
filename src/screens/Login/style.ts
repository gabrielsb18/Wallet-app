import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';
import styled from 'styled-components/native';

interface DescriptionProps {
    theme: typeof theme;
}

export const Container = styled.View`
    padding: ${RFValue(10)}px;
`;

export const ContentHeader = styled.View `
    justify-content: center;
    align-items: center;
    padding: ${RFValue(20)}px;
`;
export const ViewButton = styled.View `

`;
export const ContentBody = styled.View `

`;
export const ContentFooter = styled.View `

`;

export const Title = styled.Text `
    text-align: center;
    font-size: ${RFValue(25)}px;
    margin-top: ${RFValue(40)}px;
    font-family: ${theme.FONTS.POPPINSMEDIUM};
`;
export const Description = styled.Text`
    margin-top:${RFValue(60)}px;
    font-size: ${RFValue(17)}px;
    font-family: ${theme.FONTS.POPPINSLIGHT};
`;