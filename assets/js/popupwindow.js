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
  // project details 
  const dataprojects = [
    {
      url: './assets/projects/Snapshoot-Portfolio-desktop.svg',
      title: 'Project component 1',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys ',
      technologies: {tech1: 'HTMl', tech2: 'JS',tech3: 'CSS', tech4: 'Ruby & Rails',
        },
      linkVersion: 'https://example.com/liveversion1/',
      linkSource: 'https://github.com/yusufyusie/work-project-1',
    },
    {
      url: './assets/projects/modal_desktop.png',
      title: 'Project component 2',
      description:
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      technologies: {
        tech1: 'HTMl',
        tech2: 'JS',
        tech3: 'CSS',
        tech4: 'Ruby & Rails',
      },
      linkVersion: 'https://example.com/liveversion2/',
      linkSource: 'https://github.com/yusufyusie/work-project-2',
    },
    {
      url: './assets/projects/Snapshoot-Portfolio-desktop.svg',
      title: 'Project component 3',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      technologies: {
        tech1: 'HTMl',
        tech2: 'JS',
        tech3: 'CSS',
        tech4: 'Ruby & Rails',
      },
      linkVersion: 'https://example.com/liveversion3/',
      linkSource: 'https://github.com/yusufyusie/work-project-3',
    },
    {   
      url: './assets/projects/modal_desktop.png',
      title: 'Project component 4',
      description:
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem',
      technologies: {
        tech1: 'HTMl',
        tech2: 'JS',
        tech3: 'CSS',
        tech4: 'Ruby & Rails',
      },
      linkVersion: 'https://example.com/liveversion4/',
      linkSource: 'https://github.com/yusufyusie/work-project-4',
    },
    {
      url: './assets/projects/Snapshoot-Portfolio-desktop.svg',
      title: 'Project component 5',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. a',
      technologies: {
        tech1: 'HTMl',
        tech2: 'JS',
        tech3: 'CSS',
        tech4: 'Ruby & Rails',
      },
      linkVersion: 'https://example.com/liveversion5/',
      linkSource: 'https://github.com/yusufyusie/work-project-5',
    },
    {
      url: './assets/projects/modal_desktop.png',
      title: 'Project component 6',
      description:
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      technologies: {
        tech1: 'HTMl',
        tech2: 'JS',
        tech3: 'CSS',
        tech4: 'Ruby & Rails',
      },
      linkVersion: 'https://example.com/liveversion6/',
      linkSource: 'https://github.com/yusufyusie/work-project-6',
    },
  ];

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
          <script src="popupwindow.js"></script>
  </article>
  `;