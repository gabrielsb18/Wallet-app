import React from "react";
import { ButtonFace, IconFacebook, Title } from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";;
import {RectButtonProps} from "react-native-gesture-handler";
import { Fontisto } from '@expo/vector-icons';


//ESTENDEMOS AS PROPIEDADES NATIVA DO BOTÃO DO REACT E PASSAMOS PARA O NOSSO COMPONENTE QUE CRIAMOS
interface Props extends RectButtonProps {
    title: string,
    IconName: React.ComponentProps<typeof Fontisto>["name"]
}

const ButtonFacebook: React.FC<Props> = ({title,IconName, ...rest}) => {
    return (
        <TouchableOpacity activeOpacity={0.7}>
            <ButtonFace {...rest}>
                <IconFacebook
                name = {IconName}
                />
                <Title>{title}</Title>
            </ButtonFace>
        </TouchableOpacity>
    );
};

export {ButtonFacebook};