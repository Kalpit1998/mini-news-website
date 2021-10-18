// ======================================================================
// fetching trending news from API
// ======================================================================

// fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=6ca9033093e447b3acbc2a96db4f4ee5")
fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=c72d86e7ee124c51adb8d5db992560b0")
.then((res)=>{
    return res.json();
})
.then((res)=>{
    console.log(res);
    showNews(res.articles)
})
.catch((err)=>{
    console.log(err);
})

let news_card = document.getElementById("newsCard_container");



// ======================================================================
// Appending news card to DOM
// ======================================================================

function showNews(newses){

    newses.forEach(function(news){

        let div = document.createElement("div");

        div.setAttribute("id","news-card");

        let img_div = document.createElement("div");
        img_div.setAttribute("class", "img_container")
        // img_div.class = "img_container";

        let img = document.createElement("img");

        img.src = news.urlToImage;

        let text_div = document.createElement("div");

        text_div.setAttribute("class", "text_div");

        let title = document.createElement("h3");
        title.innerText = news.title;

        let author = document.createElement("h4");

        author.innerText = news.author;

        text_div.append(title, author);

        img_div.append(img);

        div.append(img_div,text_div);

        div.onclick = function(){
            newsDetail(news);
        }

        news_card.append(div);
    })
}

// ======================================================================
// sending clicked news data to local storage
// ======================================================================

function newsDetail(newsURL){
    if(localStorage.getItem("newsDetail") === null){
        localStorage.setItem("newsDetail", JSON.stringify([]));
    }

    let detail = JSON.parse(localStorage.getItem("newsDetail"));

    detail.push(newsURL);

    localStorage.setItem("newsDetail", JSON.stringify(detail));

    window.open("news.html", '_blank');
}