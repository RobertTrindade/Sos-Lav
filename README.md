# Carvalho Leilões - Frontend

Este é o repositório do frontend para o projeto Carvalho Leilões. O frontend é construído com Next.js, Material-UI, Zod para validação de dados e React Hook Forms para gerenciamento de formulários.

## Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes dependências instaladas em seu ambiente de desenvolvimento:

- [Node.js](https://nodejs.org/): Certifique-se de ter o Node.js instalado em seu sistema.
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/): Você pode escolher entre npm ou Yarn como gerenciador de pacotes.

## Configuração do Ambiente

1. Clone este repositório em sua máquina local:

```bash
git clone https://github.com/seu-usuario/carvalho-leiloes-frontend.git
cd carvalho-leiloes-frontend
```

2. Instale as dependências do projeto:

```bash
npm install
# ou
yarn install
```

3. Configure o arquivo `.env`:

   Certifique-se de que o arquivo `.env` esteja configurado corretamente. Ele deve conter as variáveis de ambiente necessárias para apontar para o backend. Por exemplo:

   ```
   NEXT_PUBLIC_API_BASE_URL=https://api.carvalholeiloes.com
   ```

   Substitua `https://api.carvalholeiloes.com` pelo URL correto do seu backend.

## Executando o Projeto

Depois de configurar o ambiente, você pode iniciar o projeto em modo de desenvolvimento usando o seguinte comando:

```bash
npm run dev
# ou
yarn dev
```

Isso iniciará o servidor de desenvolvimento Next.js e você poderá acessar o projeto no navegador em `http://localhost:3000`.

## Construindo o Projeto

Para construir o projeto para produção, você pode usar o seguinte comando:

```bash
npm run build
# ou
yarn build
```

Isso criará uma pasta `out` com os arquivos de produção.

## Contribuindo

Se você deseja contribuir com este projeto, sinta-se à vontade para abrir um problema ou enviar uma solicitação de pull request. Adoraríamos receber sua contribuição!

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).