
// const apiKey = '1mP6s8frHSlWnecWq0YWAWhxANxOfMFeFlQNd4zD';
// const url = ' https://api.thenewsapi.com/v1/news/headlines?locale=us&language=en&api_token=';

// window.addEventListener('load', ()=> getNews());

// async function getNews() {
//     const response = await fetch(`${url}${apiKey}`);
//     const data = await response.json();
//     // bindArticles(data.articles)
//     console.log(data)
// }
// getNews('India')

// function bindArticles(articles) {
//     const rowMain = document.getElementById('row');
//     const template = document.getElementById('template');

//     rowMain.innerHTML = '';
//     articles.forEach((article) => {
//         if (!article.urlToImage) return;

//         const articleClone = template.content.cloneNode(true);
//         addData(articleClone, article);

//         rowMain.appendChild(articleClone);
//     });
// }

// function addData(articleClone, article){
//     const newsImage = articleClone.getElementById('newsImg');
//     const cardTitle = articleClone.getElementById('card-title');
//     const cardDes = articleClone.getElementById('card-description');
//     const newsSource = articleClone.getElementById('source')

//     newsImage.src = article.urlToImage;
//     cardTitle.innerHTML = article.title;
//     cardDes.innerHTML = article.description;

//     const date = new Date(article.publishedAt).toLocaleString()
//     newsSource.innerHTML = date;

//     articleClone.firstElementChild.addEventListener('click', ()=>{
//         window.open(article.url, '_blank');
//     });


// }


// function searchQuery(){
//     event.preventDefault();
//     const query = document.getElementById('searchInput').value;
//     if(!query){
//         return;
//     }
//     getNews(query);
//     console.log(query)

// }

window.addEventListener('load', () => apiCall());



const url = 'https://extract-news.p.rapidapi.com/v0/article?url=https%3A%2F%2Fwww.theverge.com%2F2020%2F4%2F17%2F21224728%2Fbill-gates-coronavirus-lies-5g-covid-19';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a639455754msh383387a14209eddp17f43bjsne5f0438e0673',
        'X-RapidAPI-Host': 'extract-news.p.rapidapi.com'
    }
};
async function apiCall() {

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
