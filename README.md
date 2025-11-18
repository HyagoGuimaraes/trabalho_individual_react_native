# 📱 Clone do Login e Feed do LinkedIn

Este projeto é uma cópia das telas de Login e Home (Feed) do aplicativo LinkedIn, desenvolvida para fins educacionais utilizando React Native com Expo.
O objetivo foi reproduzir o layout, componentes visuais e estrutura básica da interface, aplicando conceitos de estilização, componentização e interface responsiva.

# 🚀 Tecnologias utilizadas
- React Native
- Expo
- TypeScript
- React Navigation
- @expo/vector-icons
- StyleSheet para estilização
- Importação de imagens locais via assets

# 📂 Estrutura do projeto
```javascript
src/
 ├── assets/
 │    ├── avatar/          # Imagens de perfil
 │    ├── postagem/        # Imagens ilustrativas do feed
 │    ├── modeloHome.png   # Modelo da tela da Home do LinkedIn
 │    └── modeloLogin.png  # Modelo da tela de Login do LinkedIn
 │
 ├── components/
 │    ├── BottomBar/       # Barra inferior de navegação
 │    ├── FeedCard/        # Cards de publicações
 │    └── Header/          # Header superior com campo de busca
 │
 ├── pages/
 │    ├── Login/           # Tela de cadastro
 │    └── Home/            # Tela inicial
 │
 └── routers/
      └── index.tsx        # Configuração de navegação
```

# 📌 Funcionalidades implementadas

✔️ Tela de Login inspirada no LinkedIn
✔️ Tela Home com lista de postagens (Feed)
✔️ Ícones no estilo LinkedIn (curtir, comentar, compartilhar, enviar)
✔️ Importação de imagens locais via assets
✔️ Lista de posts usando FlatList
✔️ Estilo visual baseado na identidade do LinkedIn

# 📸 Layouts de referência (originais)

As telas foram desenvolvidas com base nesses modelos:

🔹 modeloLogin.png – Tela de login original

🔹 modeloHome.png – Tela inicial do LinkedIn

- Ambas estão na pasta /src/assets/.

# ▶️ Como rodar o projeto

```javascript
Instalar dependências
npm install

Iniciar o projeto
npx expo start

Para testar no celular, utilize o Expo Go escaneando o QR Code exibido no terminal ou no navegador.
```

# 🎯 Objetivo do trabalho

Este projeto foi desenvolvido como atividade acadêmica para reproduzir, com fidelidade visual, as telas de Login e Feed do LinkedIn, utilizando práticas de desenvolvimento mobile com React Native.

# 🧑‍💻 Autor
```javscript
Hyago Guimarães
📚 Estudante de Desenvolvimento Mobile
🔗 Projeto desenvolvido para fins de aprendizado
```
