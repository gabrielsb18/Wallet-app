import React from "react";
import { Button, IconeButtonGoogle, Title, IconeButtonFacebook, ButtonFacebook, TitleFacebook } from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import {RectButtonProps} from "react-native-gesture-handler";
import { Fontisto } from '@expo/vector-icons';

//ESTENDEMOS AS PROPIEDADES NATIVA DO BOTÃO DO REACT E PASSAMOS PARA O NOSSO COMPONENTE QUE CRIAMOS
interface Props extends RectButtonProps {
    title: string
    IconName: React.ComponentProps<typeof Fontisto>["name"]
}

const ButtonSocialGoogle: React.FC<Props> = ({title, IconName, ...rest}) => {
    return (
        <TouchableOpacity activeOpacity={0.7}>
            <Button {...rest}>
                <IconeButtonGoogle
                name = {IconName}
                />
                <Title>{title}</Title>
            </Button>
        </TouchableOpacity>
    );
};

const ButtonSocialFacebook: React.FC<Props> = ({title, IconName, ...rest}) => {
    return (
        <TouchableOpacity activeOpacity={0.7}>
            <ButtonFacebook {...rest}>
                <IconeButtonFacebook
                name = {IconName}
                />
                <TitleFacebook>{title}</TitleFacebook>
            </ButtonFacebook>
        </TouchableOpacity>
    );
};

export {ButtonSocialGoogle, ButtonSocialFacebook };