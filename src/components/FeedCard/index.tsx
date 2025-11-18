import { Image, Text, TouchableOpacity, View } from "react-native"
import { style } from "./style"
import { PropsCard } from "./type";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

export const FeedCard = ({ name, subtitle, avatar, text, image }: PropsCard) => {
  return (
    <View style={style.container}>
      <View style={style.row}>
        <Image source={avatar} style={style.avatar} />

        <View>
          <Text style={style.name}>{name}</Text>
          <Text style={style.subtitle}>{subtitle}</Text>
        </View>
      </View>

      <Text style={style.text}>{text}</Text>

      {image && (
        <Image source={image} style={style.postImage} />
      )}

      <View style={style.actionsContainer}>

        <TouchableOpacity style={style.action}>
          <MaterialIcons name="thumb-up-off-alt" size={22} color="#666" />
          <Text style={style.actionLabel}>Gostei</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.action}>
          <MaterialIcons name="chat-bubble-outline" size={22} color="#666" />
          <Text style={style.actionLabel}>Comentar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.action}>
          <Ionicons name="share-outline" size={22} color="#666" />
          <Text style={style.actionLabel}>Compartilhar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.action}>
          <Feather name="send" size={20} color="#666" />
          <Text style={style.actionLabel}>Enviar</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};