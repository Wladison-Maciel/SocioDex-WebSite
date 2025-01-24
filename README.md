# SocioDex

## 📚 Descrição Geral
A **SocioDex** é uma plataforma interativa e gamificada que proporciona uma experiência única para explorar a vida e as contribuições dos grandes pensadores da sociologia. Este site combina tecnologia de ponta e um design envolvente para oferecer informações detalhadas sobre os sociólogos, permitindo aos usuários interagir com mapas dinâmicos, visualizar informações personalizadas e participar de quizzes educativos. O sistema também conta com um painel administrativo completo para gerenciar os dados.

## ⚙️ Funcionalidades

### 1. **📈 Visualização de Sociólogos**
- **Cards Dinâmicos**: Cada sociólogo é representado em um card contendo:
  - Nome
  - Foto
  - Características principais
- **Informações Detalhadas**: Ao clicar em um card, uma nova página é aberta exibindo dados mais aprofundados sobre o sociólogo.

### 2. **🌍 Mapa Interativo**
- **API da Mapbox**: Integração com a API Mapbox para exibir marcações geográficas interativas.
- **Marcações Personalizadas**: Cada marcação no mapa inclui uma foto e informações do respectivo sociólogo.

### 3. **🎯 Quiz Educacional**
- **Perguntas sobre Sociólogos**: Um quiz interativo para testar o conhecimento dos usuários sobre os pensadores apresentados no site.
- **CRUD de Questões**: Painel administrativo para adicionar, editar e excluir perguntas do quiz.

### 4. **🔧 Sistema CRUD Completo**
- **Administração de Sociólogos**: 
  - Adicionar novos sociólogos.
  - Editar informações existentes.
  - Excluir socólogos.
- **Gestão de Dados Centralizada**: Todo o gerenciamento ocorre em uma interface intuitiva e segura.

## 💻 Tecnologias Utilizadas

### **Frontend**
- **🖋 HTML**: Estrutura do site.
- **🌈 CSS**: Estilização responsiva e atraente.
- **🔁 EJS**: Template engine para renderização dinâmica de conteúdo.

### **Backend**
- **⚡ Node.js**: Servidor backend robusto e escalável.
- **🚪 Express.js**: Framework para gerenciamento de rotas e lógica de aplicação.
- **📊 MongoDB**: Banco de dados NoSQL para armazenamento dos dados dos socólogos e perguntas do quiz.

### **Integrações**
- **🌎 Mapbox API**: Exibição de mapas interativos com marcações personalizadas.

### **Outras Ferramentas**
- **🔧 Git e GitHub**: Controle de versão e colaboração no desenvolvimento.
- **🛠️ Visual Studio Code**: IDE para desenvolvimento do projeto.

## 🏆 Principais Diferenciais
1. **Design Intuitivo**: Navegação fluida e interface atraente para todos os tipos de usuários.
2. **Interatividade**: Uso de mapas dinâmicos e quizzes educativos para engajar o usuário.
3. **Foco em Administração**: Sistema CRUD completo para facilitar a gestão de conteúdo.
4. **Escalabilidade**: Arquitetura modular que permite a expansão futura do projeto.

## 🚀 Como Executar Localmente
1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie uma conta no MongoDB e no Mapbox para utilizar o banco de dados e a API do mapa:

   - Acesse MongoDB aqui: [https://account.mongodb.com/account/login](https://account.mongodb.com/account/login)
   - Acesse Mapbox aqui: [https://account.mapbox.com/auth/signup/](https://account.mapbox.com/auth/signup/)


4. No MongoDB:
   - Acesse o MongoDB e crie um **Cluster** no plano gratuito.
   - Após criar o cluster, crie um banco de dados chamado **"test"**.
   - Dentro do banco de dados **"test"**, crie duas coleções:
     - **"ListaSociologos"**
     - **"PerguntasSociologos"**

5. Crie os seguintes arquivo na pasta do projeto, onde se encontra o app.js e configure-os da seguinte maneira `config.js` e `mapboxConfig.js` com suas credenciais respectivamente (exemplo abaixo):
#### Arquivo `config.js`:
```javascript
const config = {
  mongoURI: '[Cole seu token de acesso do mongodb aqui]'
};
module.exports = config;
```

#### Arquivo `mapboxConfig.js`:
```javascript
const mapboxConfig = {
    accessToken: '[Seu Token de acesso do mapbox aqui]',
};

module.exports = mapboxConfig;
```
   
5. Inicie o servidor:
   ```bash
   npm start
   ```
6. Acesse o site em [http://localhost:3000](http://localhost:3000).

7. Acesse o painel de administração para adicionar sociólogos ou perguntas (Opcional):
   - Após iniciar o servidor, acesse a rota de administração para gerenciar os dados de sociólogos e perguntas do quiz:
     - Acesse o painel em [http://localhost:3000/selecionar-funcao](http://localhost:3000/selecionar-funcao).
   - **Senha de acesso**: A senha de administração deve ser fornecida nos campos da seguinte forma:
     - Usuário: BlackCat
     - Senha: admblackcat

8. Adicione os dados ao MongoDB
   - Para facilitar a inicialização dos dados ao invés de adicionar manualmente, você pode baixar dois arquivos JSON que contêm as informações necessárias:
     - **[Listasociologos.json](https://github.com/BlackCatCompany/HospedagemJSON/blob/main/ListaSociologos.json)**: Contém informações dos sociólogos.
     - **[PerguntasSociologos.json](https://github.com/BlackCatCompany/HospedagemJSON/blob/main/PerguntasSociolgos.json)**: Contém as perguntas para o quiz.
   - Após o download, importe os arquivos JSON para as coleções **"ListaSociologos"** e **"PerguntasSociologos"**, respectivamente, no MongoDB.

9. Aproveite a aplicação!
   - Agora que a aplicação está em funcionamento, aproveite para explorar as funcionalidades:
     - Navegue pelos **cards dinâmicos** dos sociólogos e descubra informações detalhadas.
     - Teste seus conhecimentos com o **quiz educativo** sobre os sociólogos.
     - Explore o **mapa interativo** e veja as marcações dos locais relacionados aos pensadores.
     - Adicione os sociólogos e perguntas para testar nossas funcionalidades.


## 🔄 Possibilidades de Expansão
- Integração com outras APIs para enriquecer os dados.
- Gamificação adicional para engajar ainda mais os usuários.
- Implementação de autenticação para os usuários gerais.

## ❤️ Contribuição
Contribuições são bem-vindas! Para contribuir:
1. Faça um fork do repositório.
2. Crie uma branch com sua feature ou correção de bug:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça commit das suas alterações:
   ```bash
   git commit -m "Adiciona nova funcionalidade"
   ```
4. Envie suas alterações para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request no GitHub.

## 📢 Licença
Este projeto está licenciado sob a [MIT License](LICENSE).

<div align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=express,js,nodejs,css,html,npm,vscode,mongodb,figma,git,md" />
  </a>
</div>