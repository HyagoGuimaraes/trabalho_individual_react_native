import { FlatList, View } from "react-native";
import { style } from "./style";
import { Header } from "../../components/Header";
import { FeedCard } from "../../components/FeedCard";
import { BottomBar } from "../../components/BottomBar";

import defaultUser from '../../assets/avatar/defaultUser.png';
import santander from '../../assets/avatar/santander.png';
import magalu from '../../assets/avatar/magazineluiza.webp';
import googleCloud from '../../assets/avatar/googleCloud.png';

import avatar1 from '../../assets/avatar/avatar1.jpg';
import avatar2 from '../../assets/avatar/avatar2.jpg';
import avatar3 from '../../assets/avatar/avatar3.jpg';
import avatar4 from '../../assets/avatar/avatar4.jpg';

import post1 from '../../assets/postagem/post1.jpg';
import post2 from '../../assets/postagem/post2.jpg';
import post3 from '../../assets/postagem/post3.jpg';
import post4 from '../../assets/postagem/post4.jpg';
import post5 from '../../assets/postagem/post5.jpg';
import post6 from '../../assets/postagem/post6.jpg';
import post7 from '../../assets/postagem/post7.jpg';


const posts = [
  {
    id: "1",
    name: "Angelo Boarte",
    subtitle: "Aluno de Engenharia de Computação",
    avatar: avatar1,
    text: "É com grande satisfação que compartilho minha recente experiência na banca parcial da Residência TIC/STEM. Foi uma oportunidade enriquecedora, permitindo-me aprofundar conhecimentos e aplicar conceitos de Engenharia de Computação em um contexto prático e desafiador. Agradeço a todos os envolvidos por esta valiosa vivência.",
    image: post1
  },
  {
    id: "2",
    name: "Santander Brasil",
    subtitle: "Promovido",
    avatar: santander,
    text: "O Santander está com vagas comerciais abertas!",
    image: post2
  },
  {
    id: "3",
    name: "Bruno Henrique",
    subtitle: "Desenvolvedor Front-end | React & TypeScript",
    avatar: avatar2,
    text: "Após meses de estudo intenso, finalizei meu primeiro projeto completo com React Native! Estou muito feliz com a evolução e aberto a novas oportunidades!",
    image: post3
  },
  {
    id: "4",
    name: "Magazine Luiza",
    subtitle: "Empresa",
    avatar: magalu,
    text: "Estamos com novas vagas para Desenvolvedores Mobile...",
    image: post4
  },
  {
    id: "5",
    name: "Gabriela Moura",
    subtitle: "Especialista em RH | Recrutamento Tech",
    avatar: avatar3,
    text: "Hoje completamos 3 anos contratando talentos incríveis...",
    image: post5
  },
  {
    id: "6",
    name: "Google Cloud Brasil",
    subtitle: "Empresa • Tecnologia",
    avatar: googleCloud,
    text: "Nos próximos dias teremos um evento especial sobre IA...",
    image: post6
  },
  {
    id: "7",
    name: "Lucas Pereira",
    subtitle: "Estudante de Sistemas de Informação",
    avatar: avatar4,
    text: "Primeira certificação conquistada! Agora sou certificado...",
    image: post7
  },
];

export const Home = () => {
  return (
    <View style={style.container}>
      <Header />

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FeedCard {...item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      />

      <BottomBar />
    </View>
  );
};