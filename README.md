<h1 align="center">
    Project-Salao-Simplificado
</h1>

```javascript
@Authores Johnny Carvaho - Lucas Lemes
@Date 2022-11
```

## Principais tecnologias utilizadas: <br/>
<p>
  <img align="center" alt="Angular" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" />
  <img align="center" alt="TS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
  <img align="center" alt="PHP" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
  <img align="center" alt="Xampp" height="30" width="40" src="https://cdn2.iconfinder.com/data/icons/pack1-baco-flurry-icons-style/512/XAMPP.png" />
</p>

## Resumo do projeto

Este é um projeto em Angular + PHP elaborado como atividade universitária para fins acadêmicos, esta atividade se faz referência a entrega de trabalho para matéria de Ëxperiência criativa Projetando Soluções Computacionais". 
Neste projeto foi elaborado um sistema de agendamento para barbearia chamado "Salão Simplificado", cujo o próprio nome já diz, a ideia
é simplificar  agendamento de um salão de barbearia, onde o usuário vai poder entrar no sistema através de login e senha e verificar o profissional disponível na data solicitada e verificar se esse profissional vai estar trabalhando na data solicitada.


## Como instalar e iniciar o projeto
````
Para que o código funcione corretamente deve-se ser instalados as seguintes ferramentas:
````

### Front End
- Node em <a>https://nodejs.org/en/download/</a>

Após a instalação e configuração do Node, deve-se instalar as seguintes ferramentas através do terminal:

- Type Script ```npm i -g typescript```
- Angular CLI ```npm i @angular/cli```

Após a instalação das ferramentas acima, deve-se executar a instalação dos pacotes através do seguinte comando:

- Node_Modules ```npm install```

Após a instalação dos pacotes, deve-se iniciar o projeto utilizando o seguinte comando:

- Iniciar servidor Angular ```ng serve```

**OBS:**
Caso ocorra algum erro de execução, verifique em **node_modules** se estão instalados todos os pacotes 
existentes em :
```javascript 
package.json
```
Caso note que falta algun, deverá instalar manualmente através do terminal usando o comando ```npm install <nome do pacote>```.

### Back End
````
Para que o código funcione corretamente deve-se ser instalados as seguintes ferramentas:
````

- Xampp em <a>https://www.apachefriends.org/download.html</a>
 
 Após a instalação e configuração do xampp deve-se seguir os seguintes passos:

 #### Passo 1
 - Navegar até a pasta back-end neste repositório, copiar a pasta salao.
 - Navegar em sua máquina até a pasta xampp/htdocs e colar a pasta copiada (salao).
 #### Passo 2
 - Navegar até a pasta back-end/sql neste repositório e copiar a pasta data.
 - Navegar em sua máquina até a pasta xampp/mysql e colar a pasta copiada (data).

Após essas configurações, deve-se inicializar o servidos apache e o mysql diretamente no painel de controle do xampp, feito isso basta recarregar a página http://localhost:4200/ ou a porta que vocie selecionou para rodar o Angular através do ```ng serve```.

Para ver os dados sendo inseridos na tabela, basta navegar até http://localhost/phpmyadmin/ ou abrir o painel de controle do xampp (XAMPP Control Painel) e clicar no botão Admin do MySQL em em seguida abris a tabela que deseja consultar dentro do database salaosimp.


