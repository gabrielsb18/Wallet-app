import React from 'react';
import { SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ButtonSocialFacebook, ButtonSocialGoogle } from '../../components/ButtonSocial/buttonsSocial';
import {
    Container,
    ContentHeader,
    Title,
    Description,
    ViewButton,
    ContentBody,
    ContentFooter,
} from './style';

const Login = () => {
    return (
        <SafeAreaView>
            <Container>
                <ContentHeader>
                    <Title>Seja bem vindo(a) {'\n'} a Carteira app </Title>
                    <Description>Entrar com Redes Sociais</Description>
                    <GestureHandlerRootView>
                        <ViewButton>
                            <ButtonSocialGoogle IconName = "google" title="Google" />
                            <ButtonSocialFacebook IconName = "facebook" title="Facebook" />
                        </ViewButton>
                    </GestureHandlerRootView>
                </ContentHeader>

                <ContentBody></ContentBody>

                <ContentFooter></ContentFooter>
            </Container>
        </SafeAreaView>
    );
};

export { Login };
