const arraydisplayPopupBtn = document.querySelectorAll('.btn-popup');

for (let i = 0; i < arraydisplayPopupBtn.length; i++)
 {
  arraydisplayPopupBtn[i].addEventListener('click', () => {
      const cardProjectWork = document.createElement('div');
      cardProjectWork.innerHTML = cardDetailsMobile(i);
      document.body.appendChild(cardProjectWork);

      const btnCloseDetailsMobile = document.querySelector('.btn-close-details');
      btnCloseDetailsMobile.addEventListener('click', async () => {
        document.body.removeChild(cardProjectWork);
      });
    });
  }


  const cardDetailsMobile = (index) => `
  <article class="card-details-mobile">
          <button type="button" class="btn-close-details">
              <img src="./assets/images/Icon-Cancel.svg" alt="cancel icon">
          </button>
          <div class="card-image-details-mobile">
              <img src=${dataprojects[index].url} alt="a back in mountain">
          </div>
          <h2 class="card-title-mobile">
              ${dataprojects[index].title}
          </h2>
          <ul class="tags-mobile">
              <li class="tag-mobile">${dataprojects[index].technologies.tech1}</li>
              <li class="tag-mobile">${dataprojects[index].technologies.tech2}</li>
              <li class="tag-mobile">${dataprojects[index].technologies.tech3}</li>
              <li class="tag-mobile">${dataprojects[index].technologies.tech4}</li>
          </ul>
          <p class="card-paragraph-mobile">
            ${dataprojects[index].description}
          </p>
          <div class="card-button-mobile">
                  <a href=${dataprojects[index].linkVersion} class="btn-card-details-mobile">
                  See Live
                  <img src="./assets/images/see_live_icon.svg" alt="see live icon">
                  </a>
                  <a href=${dataprojects[index].linkSource} class="btn-card-details-mobile">
                  See Sources
                  <img src="./assets/images/github_white.svg" alt="see github icon">
                  </a>
          </div>
          <script src="projectdetails.js"></script>
  </article>
  `;