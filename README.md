# FilmesDB - Angular

Aplicação para mostar detalhes de filmes e séries.

**Para rodar a aplicação siga os passos abaixo:**
1. Faça **git clone** do projeto.
2. Crie uma pasta **environments** na pasta **src**.
3. Dentro da pasta **environments**, crie um arquivo chamado **environment.ts**.**Com a estrutura abaixo:**
~~~javascript
export const environment = {
  production: true,
  API: 'Sua string de conexão a API OMDB aqui'//Para adquirir essa string de conexão acesse: http://www.omdbapi.com/
}
~~~
4. Rode a aplicação localmente com o comando **ng serve** ou **npm start** 

ou Acesse a aplicação na seguinte URL: https://filmesdbase.firebaseapp.com
