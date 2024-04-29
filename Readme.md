Existe dentro da pasta desenvwebback os arquivos necessários para o docker rodar, para isto, basta entrar na pasta desenvwebback e digitar o comando

```bash
docker-compose up -d
```

Nas configurações do docker já temos a exposição da porta 5432, a criação do banco blog com o arquivo init.sql que será executado apenas uma vez e há persistência dos dados, pois temos o volume craido.