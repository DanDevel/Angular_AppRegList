# Aplicativo de Registro e Visualização em Angular
Este aplicativo Angular é uma demonstração de uma aplicação web moderna que segue as melhores práticas de arquitetura e código. 

Ele foi desenvolvido utilizando conceitos como DDD (Domain-Driven Design) e Clean Code, visando alta qualidade, escalabilidade e manutenibilidade.

# Recursos

## Formulário de Registro

Os usuários podem inserir um valor inteiro e um valor decimal.
Após o envio, os dados do formulário são enviados para o endpoint da API para registro.
A API responde com o resultado final calculado, que é exibido para o usuário.


## Visualização

Os usuários podem inserir um valor inteiro.
O aplicativo envia uma solicitação para o endpoint da API para recuperar os dados associados ao valor fornecido.
Os dados retornados, consistindo em pares chave-valor, são exibidos de forma visualmente atraente.


## Arquitetura e Design

O aplicativo segue uma arquitetura modular e baseada em componentes, aderindo às melhores práticas do Angular e aos princípios do DDD (Domain-Driven Design) e Clean Code. Ele consiste nos seguintes componentes:


# Componente de Registro

Gerencia a funcionalidade do formulário de registro, seguindo os princípios do DDD.

Comunica-se com o serviço de API para enviar os dados do formulário para registro.

Utiliza técnicas de Clean Code para manter o código legível, modular e de fácil manutenção.



# Componente de Visualização

Permite que os usuários informem um valor inteiro para a recuperação de dados.

Utiliza o serviço de API para buscar os dados correspondentes do endpoint da API.

Segue as melhores práticas de design, como separação de responsabilidades e coesão.


# Serviço de API e Integração

O aplicativo se integra a um serviço de API backend para lidar com o registro e a recuperação de dados. 

O serviço de API é projetado seguindo os princípios do DDD, separando as responsabilidades e garantindo a coesão. 

Ele oferece endpoints dedicados para o registro de dados e a recuperação de dados com base em um valor inteiro.


# Tecnologias Utilizadas

Angular: Um framework JavaScript popular para construir aplicativos web escaláveis e de fácil manutenção.

TypeScript: Um superset de JavaScript fortemente tipado que aprimora a experiência de desenvolvimento e permite uma melhor qualidade de código.

HTML e CSS: Linguagens de marcação e estilização utilizadas para estruturar e estilizar a interface do usuário do aplicativo.

HttpClient: Módulo cliente HTTP embutido do Angular usado para fazer requisições para a API backend.


# Como Começar

Para executar o aplicativo localmente, siga estas etapas:

Clone o repositório.
Navegue até o diretório do projeto.
Instale as dependências necessárias executando npm install.
Inicie o servidor de desenvolvimento com ng serve.
Acesse o aplicativo em seu navegador em http://localhost:4200.
