const rowVideosGrowcast = document.getElementById("row-videos-growcast");
const rowVideosWebinar = document.getElementById("row-videos-webinar");
const rowVideosUx_ui = document.getElementById("row-videos-ux_ui");
const rowVideosDiversos = document.getElementById("row-videos-diversos");

function renderVideos(categoria, element) {
  let html = "";
  let itens = videos.filter((item) => item.categoria === categoria);

  itens.forEach((item, index) => {
    const modalVideo = `staticBackdrop${index}`;

    html += `
    <div class="col-3 mb-4">
        <div class="card border-0" style="width: 18rem;">
            <div class="zoom-card">
              <div class="card border-0" data-bs-toggle="modal" onmouseover="showCardBody(this)"
               onmouseout="hideCardBody(this)">
                  <img src="${item.img}" class="border-0" style="width:100%">
              </div>
            </div>
            <div class="card-body bg-black border-0" style="display: none;">
              <button class="btn text-white" data-bs-target="#${modalVideo}"><img src="./images/play-circle.svg">${item.titulo}</button>
            </div>
        </div>
    </div>
      <div class="modal fade" id="${modalVideo}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <iframe src="${item.link}"></iframe>
            </div>
          </div>
        </div>
      </div>
      `;
  });

  element.innerHTML += html;
}
function showCardBody(element) {
  const cardBody = element.parentNode.nextElementSibling;
  cardBody.style.display = "block";
}

function hideCardBody(element) {
  const cardBody = element.parentNode.nextElementSibling;
  cardBody.style.display = "none";
}
renderVideos("podcast", rowVideosGrowcast);
renderVideos("webinar",rowVideosWebinar)
renderVideos("Jornada UX/UI",rowVideosUx_ui)
renderVideos("diversos",rowVideosDiversos)

