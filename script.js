let head = document.querySelector(".row");
let links = document.querySelectorAll("a");
async function getNews(category) {
  head.innerHTML = "";
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=350a22c7b9964246955b35d2f7cc17f3`;
  let response = await fetch(url);
  let data = await response.json();
  let articles = data.articles;
  console.log(articles);
  articles.map((article)=> {
    let date = article.publishedAt;
    date = new Date(date).toGMTString();
    let card = document.createElement("div");
    card.classList.add("card", "col-md-4", "my-3", "mx-4");
    card.style.width = "18rem";
    card.innerHTML = `  <img src="${article.urlToImage}" class="card-img-top newsImage" alt="Some server error occured">
            <div class="card-body">
            <span class="badge rounded-pill bg-danger">${article.source.name}</span>
              <h5 class="card-title">${article.title}</h5>
              <p class="card-text">${article.description}</p>
               <p class="card-text"><small class="text-muted">By ${article.author} on ${date}</small></p>
              <a href="${article.url}" class="btn btn-primary">Read More</a>
            </div>`;
    head.appendChild(card);
    
  })
}

getNews("general");

links.forEach((link) => {
    link.addEventListener("click", () => {
      if (link.classList.contains("home")) {
        getNews("General");
      } else if (link.classList.contains("business")) {
        getNews("Business");
      } else if (link.classList.contains("entertainment")) {
        getNews("Entertainment");
      } else if (link.classList.contains("general")) {
        getNews("General");
      } else if (link.classList.contains("health")) {
        getNews("Gealth");
      } else if (link.classList.contains("science")) {
        getNews("Science");
      } else if (link.classList.contains("sports")) {
        getNews("Sports");
      } else if (link.classList.contains("technology")) {
        getNews("Technology");
      }
    });
  });