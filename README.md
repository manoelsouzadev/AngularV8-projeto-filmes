# Projeto Filmes Angular

Aplicação para mostar detalhes de filmes e séries.

**Para rodar a aplicação siga os passos abaixo:**

1. Crie uma pasta **environments** na pasta **src**.
2. Dentro da pasta **environments**, crie um arquivo chamado **environment.ts**.**Com a estrutura abaixo:**
~~~javascript
export const environment = {
  production: true,
  API: 'Sua string de conexão a API OMDB aqui'//Para adquirir essa string de conexão acesse: http://www.omdbapi.com/
}
~~~
3. Rode a aplicação com o comando **ng serve** ou **npm start** ou acessa a aplicação na seguinte URL: https://filmesdbase.firebaseapp.com
