const rowVideosGrowcast = document.getElementById("row-videos-growcast");
const rowVideosWebinar = document.getElementById("row-videos-webinar");

function renderVideos(categoria, element) {
  let html = "";
  let itens = videos.filter((item) => item.categoria === categoria);
  itens.forEach((item) => {
    html += `
        <div class="col-4">
        <div class ="card" style="min-height: 500px;">
        <img src="${item.img}" class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">${item.titulo}</h5>
        <p class="card-text">
        Categoria:${item.categoria}
        </p>
        <a href="${item.link}" class="btn btn-primary">Play</a>
        </div>
        </div>
        </div>
        
        `;
  });
  element.innerHTML += html;
}
renderVideos("growcast", rowVideosGrowcast);
renderVideos("growcast", rowVideosWebinar);
