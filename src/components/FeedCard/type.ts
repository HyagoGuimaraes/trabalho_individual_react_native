import { ImageSourcePropType } from "react-native";

export interface PropsCard {
    name: string;
    subtitle: string;
    avatar: ImageSourcePropType;
    text: string;
    image?: ImageSourcePropType;
}