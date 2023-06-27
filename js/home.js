const rowVideosGrowcast = document.getElementById("row-videos-growcast");
const rowVideosWebinar = document.getElementById("row-videos-webinar");

function renderGrowcast() {
  let html = "";
  growcast.forEach((item) => {
    html += `
    <div class="col-3">
      <div class="card">
          <img src="${item.img}" class="card-img-top" />
          <div">
             <p class="card-text">
                ${item.titulo}
              </p>
                 <a href="${item.link}" class="btn "></a>
          </div>
      </div>
    </div> 
        `;
  });
  rowVideosGrowcast.innerHTML += html;
}
renderGrowcast();

function renderWebinar(){
  let htmlWebinar= "";

  webinar.forEach((item)=>{
    htmlWebinar += `
    <div class="col-3">
      <div class="card">
          <img src="${item.img}" class="card-img-top" />
          <div">
             <p class="card-text">
                ${item.titulo}
              </p>
                 <a href="${item.link}" class="btn "></a>
          </div>
      </div>
    </div> 
    `;
  });
  rowVideosWebinar.innerHTML += htmlWebinar
}
renderWebinar();
