import { Image, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import defaultUser from '../../assets/avatar/defaultUser.png';
import { style } from "./style";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export const Header = () => {
  return (
      <View style={[style.container, { paddingTop: StatusBar.currentHeight || 0 }]}>
        <Image source={defaultUser} style={style.avatar} />

        <TouchableOpacity style={style.searchBar}>
          <Ionicons name='search' size={20} color='#555' />
          <Text style={style.searchText}>Pesquisar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.iconButton}>
          <MaterialIcons name="chat" size={26} color="#777" />
        </TouchableOpacity>
      </View>
  );
};