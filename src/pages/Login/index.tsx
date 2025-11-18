import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { style } from "./style";
import imagem from '../../assets/LinkedIn_2021.svg.png';
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routers/type";

type LoginScreenNavigation = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export const Login = () => {

    const navigation = useNavigation<LoginScreenNavigation>();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const login = () => {
        navigation.navigate("Home");
    }

    return (
        <View style={style.container}>
            <Image source={imagem} style={style.logo} resizeMode="contain" />
            <Text style={style.title}>Entrar</Text>

            <TouchableOpacity style={style.socialButton}>
                <Text style={style.socialText}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.socialButton}>
                <Text style={style.socialText}>Entrar com a conta da Microsoft</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.socialButton}>
                <Text style={style.socialText}>Entrar com a Apple</Text>
            </TouchableOpacity>

            <View style={style.dividerContainer}>
                <View style={style.line} />
                <Text style={style.dividerText}>ou</Text>
                <View style={style.line} />
            </View>

            <TextInput
                placeholder="E-mail ou telefone"
                style={style.input}
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                placeholder="Senha"
                style={style.input}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity>
                <Text style={style.forgotPassword}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <View style={style.checkboxContainer}>
                <View style={style.checkboxSelected} />
                <Text style={style.checkboxText}>Me mantenha na conta</Text>
            </View>

            <TouchableOpacity style={style.loginButton} onPress={login}>
                <Text style={style.loginText}>Entrar</Text>
            </TouchableOpacity>

            <Text style={style.signupText}>
                Ainda não faz parte do LinkedIn?{''}
                <Text style={style.signupLink}>Cadastre-se Agora</Text>
            </Text>
        </View>
    );
}