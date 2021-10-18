let newsObj = JSON.parse(localStorage.getItem("newsDetail"));

let news = newsObj[0];

console.log(newsObj);

let parent = document.getElementById("container");

function show(news){
    let title_div = document.createElement("div");

    title_div.setAttribute("id", "title_div");

    let title = document.createElement("h1");

    title.innerText = news.title;

    title_div.append(title);

    let news_imgDiv = document.createElement("div");

    news_imgDiv.setAttribute("id", "image_div");

    let img = document.createElement("img");

    img.src = news.urlToImage;

    news_imgDiv.append(img);

    let content_div = document.createElement("div");

    content_div.setAttribute("id", "content_div");

    let content = document.createElement("p");

    content.innerText = news.content;

    content_div.append(content);

    parent.append(title_div, news_imgDiv, content_div);
}

show(news);


window.onbeforeunload = function(){
    localStorage.removeItem("newsDetail");
    return;
}