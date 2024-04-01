
import { View, Text } from "react-native";
import React from "react";
import { Button, ButtonFace, IconeFacebook, IconeGoogle, Title } from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import PngGoogle from "../../assets/google.png";
import PngFacebok from "../../assets/facebook.png";
import {RectButtonProps} from "react-native-gesture-handler";


//ESTENDEMOS AS PROPIEDADES NATIVA DO BOTÃO DO REACT E PASSAMOS PARA O NOSSO COMPONENTE QUE CRIAMOS
interface Props extends RectButtonProps {
    title: string
}

const ButtonGoogle: React.FC<Props> = ({title, ...rest}) => {
    return (
        <TouchableOpacity activeOpacity={0.7}>
            <Button {...rest}>
                <IconeGoogle
                source = {PngGoogle}
                resizeMode = "contain"
                />
                <Title>{title}</Title>
            </Button>
        </TouchableOpacity>
    );
};

const ButtonFacebook: React.FC<Props> = ({title, ...rest}) => {
    return (
        <TouchableOpacity activeOpacity={0.7}>
            <ButtonFace {...rest}>
                <IconeFacebook
                source = {PngFacebok}
                resizeMode = "contain"
                />
                <Title>{title}</Title>
            </ButtonFace>
        </TouchableOpacity>
    );
};

export {ButtonGoogle, ButtonFacebook};