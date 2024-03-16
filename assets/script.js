
const apiKey = '14cb86ac492a406f81006f55ee58f978';
const url = 'https://newsapi.org/v2/everything?q=';

window.addEventListener('load', ()=> getNews("India"));

async function getNews(query) {
    const response = await fetch(`${url}${query}&apiKey=${apiKey}`);
    const data = await response.json();
    // bindArticles(data.articles)
    console.log(data)
}
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

