# Mundo Novo Dev

Backend para aplicação de exemplo a ser utilizado nos projetos frontend e mobile do canal Mundo Novo Dev!

Adicione um arquivo .env na raiz do projeto e preencha com os valores corretos. Verifique o arquivo ".env.example" para saber como preencher.

Exemplo:
SENDGRID_API_KEY=<Get the key on your SendGrid account!>
DEFAULT_FROM=<your_email@domain.com>
DEFAULT_REPLY_TO=<your_email@domain.com>
TEST_ADDRESS=<your_email@domain.com>

Deploy usando este comando:
git subtree push --prefix strapi heroku main
