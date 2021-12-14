# Real Diário

Projeto desenvolvido com intuito educacional.

Utiliza do framework React Native e Node.JS


## Front-end

Para iniciar, basta executar os comandos:

> yarn install

> expo start

É possivel também utilizar através de emulador, iniciando o Metro com:

> react-native start android

* Configurar URL do Back-end, no arquivo ./constants/index.js


## Back-end

Para iniciar, basta executar os comandos:

> cd backend

> yarn install

> yarn dev:server

Ou, através do docker:

> cd backend 

> docker build -t real-diario .

> docker run -p 3333:3333 real-diario

--

Prints das telas, disponiveis na pasta ./prints