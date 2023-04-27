//variable declaration with initialization
const generalBtn = document.getElementById("General");
const businessBtn = document.getElementById("Business");
const sportsBtn = document.getElementById("Sports");
const technologyBtn = document.getElementById("Technology");
const entertainmentBtn = document.getElementById("Entertainment");
const searchBtn = document.getElementById("Search");
const newsquery = document.getElementById("newsquery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

//array
let newsDataArr =[];

//api section
const API_KEY ="1260cdf16c234b4b8a265fecc2a0b6bf";
const HEADLINE_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS ="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS ="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const TECHNOLOGY_NEWS ="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=";
const ENTERTAINMENT_NEWS ="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const SEARCH_NEWS ="https://newsapi.org/v2/everything?q";

window.onload = function(){
    newsType.innerHTML = "<h4> Headlines</h4>";
    fetchHeadline();
};


generalBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>General news</h4>";
    fetchGeneralNews();
});

businessBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>Business news</h4>";
    fetchBusinessNews();
});

sportsBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>Sports news</h4>";
    fetchSportsNews();
});

technologyBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>Technology news</h4>";
    fetchTechnologyNews();
});

entertainmentBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>Entertainment news</h4>";
    fetchEntertainmentNews();
});

searchBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>search : "+newsquery.value+"</h4>";
    fetchQueryNews();
});


const fetchHeadline = async ()=>{
    const response = await fetch(HEADLINE_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status<300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle error
        console.log(response.status, response.statusText);
    }
    displaynews();
}


const fetchGeneralNews = async ()=>{
    const response = await fetch(GENERAL_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status<300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle error
        console.log(response.status, response.statusText);
    }
    displaynews();
}

const fetchBusinessNews = async ()=>{
    const response = await fetch(BUSINESS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status<300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle error
        console.log(response.status, response.statusText);
    }
    displaynews();
}

const fetchSportsNews = async ()=>{
    const response = await fetch(SPORTS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status<300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle error
        console.log(response.status, response.statusText);
    }
    displaynews();
}

const fetchTechnologyNews = async ()=>{
    const response = await fetch(TECHNOLOGY_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status<300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle error
        console.log(response.status, response.statusText);
    }
    displaynews();
}

const fetchEntertainmentNews = async ()=>{
    const response = await fetch(ENTERTAINMENT_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status<300){
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    }else{
        //handle error
        console.log(response.status, response.statusText);
    }
    displaynews();
}

const fetchQueryNews = async ()=>{
    if(newsquery.value==null){
        return;
    }
    const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsquery.value)+"&apikey="+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status<300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle error
        console.log(response.status, response.statusText);
    }
    displaynews();
}

function displaynews(){
    newsdetails.innerHTML = "";
    if(newsDataArr.length == 0){
        newsdetails.innerHTML = "<h5>No Data Found.</h5>"
        return;
    }

    newsDataArr.forEach(news =>{
        var date = news.publishedAt.split("T");

        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div')
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height", "matchparent");
        image.setAttribute("width", "100%");
        image.src=news.urlToImage;

        var cardBody = document.createElement('div');

        var newsHeading = document.createElement('h6');
        newsHeading.className = "text-primary";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className ="text-primary";
        dateHeading.innerHTML = date[0];

        var description = document.createElement('p');
        description.className ="text-muted";
        description.innerHTML = news.description;

        var link =document.createElement('a');
        link.className = "btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(description);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    })
}