

// apikey = 'db7e613999f8307172b01196cfbf1c61';
// url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=' + apikey;

// fetch(url)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     articles = data.articles;

//     for (i = 0; i < articles.length; i++) {
//       // articles[i].title
//       console.log("Title: " + articles[i]['title']);
//       // articles[i].description
//       console.log("Description: " + articles[i]['description']);
//       // You can replace {property} below with any of the article properties returned by the API.
//       // articles[i].{property}
//       // console.log(articles[i]['{property}']);

//       // Delete this line to display all the articles returned by the request. Currently only the first article is displayed.
//       break;
//     }
//   });
const apiKey = 'db7e613999f8307172b01196cfbf1c61';
const url = 'https://gnews.io/api/v4/search?q=';

// window.addEventListener('load', ()=> getNews("India"));

async function getNews(query) {
    const response = await fetch(`${url}${query}&apiKey=${apiKey}`);
    const data = await response.json();
    // bindArticles(data.articles)
    console.log(data.articles)
}
getNews('India')

function bindArticles(articles) {
    const rowMain = document.getElementById('row');
    const template = document.getElementById('template');

    rowMain.innerHTML = '';
    articles.forEach((article) => {
        if (!article.urlToImage) return;

        const articleClone = template.content.cloneNode(true);
        addData(articleClone, article);

        rowMain.appendChild(articleClone);
    });
}

function addData(articleClone, article){
    const newsImage = articleClone.getElementById('newsImg');
    const cardTitle = articleClone.getElementById('card-title');
    const cardDes = articleClone.getElementById('card-description');
    const newsSource = articleClone.getElementById('source')

    newsImage.src = article.urlToImage;
    cardTitle.innerHTML = article.title;
    cardDes.innerHTML = article.description;
    
    const date = new Date(article.publishedAt).toLocaleString()
    newsSource.innerHTML = date;

    articleClone.firstElementChild.addEventListener('click', ()=>{
        window.open(article.url, '_blank');
    });


}


function searchQuery(){
    event.preventDefault();
    const query = document.getElementById('searchInput').value;
    if(!query){
        return;
    }
    getNews(query);
    console.log(query)

}

