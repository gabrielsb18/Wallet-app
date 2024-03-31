import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';

import {
    Container,
    ContentHeader,
    Title,
    Description,
    ViewButton,
    ContentBody,
    ContentFooter,
} from "./style"

const Login = () => {
  return (
    <SafeAreaView>
        <Container>

            <ContentHeader>
                <Title>Seja bem vindo(a) {'\n'} a Carteira app </Title>
                <Description>Entrar com Redes Sociais</Description>
                <ViewButton></ViewButton>
            </ContentHeader>

            <ContentBody>
            </ContentBody>

            <ContentFooter>
            </ContentFooter>

        </Container>
    </SafeAreaView>
  )
}

export {Login};