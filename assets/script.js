
/* run this code

const apiKey = '14cb86ac492a406f81006f55ee58f978';
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load', ()=> getNews("India"));

async function getNews(query) {
    const response = await fetch(`${url}${query}&apiKey=${apiKey}`);
    const data = await response.json();
    bindArticles(data.articles)
    // console.log(data)
}

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
*/






// another api used which we can used for free on production level but images are not getting displayed

window.addEventListener('load', () => apiCall());

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a639455754msh383387a14209eddp17f43bjsne5f0438e0673',
		'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
	}
};

// const url = 'https://google-news13.p.rapidapi.com/latest?lr=en-US';

window.addEventListener('load', ()=> getNews("India"));

async function getNews(query) {
    try {
        const response = await fetch(`https://real-time-news-data.p.rapidapi.com/search?query=${query}&country=US&lang=en`, options);
        const result = await response.json();
        console.log(result.data);
        bindArticles(result.data)
    } catch (error) {
        console.error(error);
    }
    // console.log(data)
}

function bindArticles(items) {
    const rowMain = document.getElementById('row');
    const template = document.getElementById('template');

    rowMain.innerHTML = '';
    items.forEach((article) => {
        if (!article.photo_url) return;

        const articleClone = template.content.cloneNode(true);
        addData(articleClone, article);

        rowMain.appendChild(articleClone);
        // console.log(article)
    });
}

function addData(articleClone, article){
    const newsImage = articleClone.getElementById('newsImg');
    const cardTitle = articleClone.getElementById('card-title');
    const cardDes = articleClone.getElementById('card-description');
    const newsSource = articleClone.getElementById('source')

    newsImage.src = article.photo_url;
    cardTitle.innerHTML = article.title;
    console.log(article.photo_url)
    // cardDes.innerHTML = article.snippet;

    const timestamp = article.published_datetime_utc;
    const date = new Date(timestamp).toLocaleDateString();
    newsSource.innerHTML = date;

    articleClone.firstElementChild.addEventListener('click', ()=>{
        window.open(article.source_url, '_blank');
    });


}

// async function newFun(){

    
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result.items[0]);
//     } catch (error) {
//         console.error(error);
//     }
// }

// newFun();