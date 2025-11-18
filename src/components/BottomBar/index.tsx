import { Text, TouchableOpacity, View } from "react-native"
import { MaterialIcons, Ionicons, Feather } from "@expo/vector-icons";
import { style } from "./style"

export const BottomBar = () => {
  return (
    <View style={style.container}>

      <TouchableOpacity style={style.item}>
        <MaterialIcons name="home" size={26} color="#000" />
        <Text style={style.label}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.item}>
        <MaterialIcons name="people" size={26} color="#777" />
        <Text style={style.label}>Minha rede</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.item}>
        <Ionicons name="add-circle" size={32} color="#777" />
        <Text style={style.label}>Publicar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.item}>
        <Ionicons name="notifications" size={26} color="#777" />
        <Text style={style.label}>Notificações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.item}>
        <Feather name="briefcase" size={26} color="#777" />
        <Text style={style.label}>Vagas</Text>
      </TouchableOpacity>
    </View>
  );
};