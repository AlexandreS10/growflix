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
    <div class="col-3 mb-3">
    <div class="card border-0" style="width: 16rem;">
      <div class="zoom-card">
        <div class="card border-0" data-bs-toggle="modal" data-bs-target="#${modalVideo}" onmouseover="showCardBody(this)" onmouseout="hideCardBody(this)">
          <img src="${item.img}" class="border-0" style="width:100%">
        </div>
      </div>
      <div class="card-body bg-black border-0" style="display: none;">
        <button class="btn text-white" data-bs-toggle="modal" data-bs-target="#${modalVideo}"><img src="./images/play-circle.svg">${item.titulo}</button>
      </div>
    </div>
  </div>
  <div class="modal fade" id="${modalVideo}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div style="position: relative; padding-bottom: 56.25%; height: 0;">
              <iframe src="${item.link}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" allowfullscreen></iframe>
            </div>
          </div>
      </div>
    </div>
  </div>
      `;
  });

  element.innerHTML += html;

  // Inicialize os modais após adicionar ao DOM
  const modals = document.querySelectorAll('.modal');
  modals.forEach((modal) => new bootstrap.Modal(modal));
}

function showCardBody(element) {
  const cardBody = element.parentNode.nextElementSibling;
  const isMouseOverCardBody = cardBody.contains(event.relatedTarget);
  if (!isMouseOverCardBody) {
    cardBody.style.display = "block";
  }
}

function hideCardBody(element) {
  const cardBody = element.parentNode.nextElementSibling;
  const isMouseOverCardBody = cardBody.contains(event.relatedTarget);
  if (!isMouseOverCardBody) {
    cardBody.style.display = "none";
  }
}
renderVideos("podcast", rowVideosGrowcast);
renderVideos("webinar", rowVideosWebinar);
renderVideos("Jornada UX/UI", rowVideosUx_ui);
renderVideos("diversos", rowVideosDiversos);
