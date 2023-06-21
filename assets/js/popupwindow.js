  // project details 
  const dataprojects = [
    {
      id: 1,
      url: './assets/images/Img-plaholder.svg',
      title: 'Multi-Post Stories Gain+Glory',
      languages_list: ['HTMl', 'JS', 'CSS', 'Ruby & Rails'],
      btn_popup: 'See Project',
    },
    {
      id: 2,
      url: './assets/images/Img-plaholder.svg',
      title: 'Multi-Post Stories Gain+Glory',
      languages_list: ['HTMl', 'JS', 'CSS', 'Ruby & Rails'],
      btn_popup: 'See Project',
    },
    {
      id: 3,
      url: './assets/images/Img-plaholder.svg',
      title: 'Multi-Post Stories Gain+Glory',
      languages_list: ['HTMl', 'JS', 'CSS', 'Ruby & Rails'],
      btn_popup: 'See Project',
    },
    {   
      id: 4,
      url: './assets/images/Img-plaholder.svg',
      title: 'Multi-Post Stories Gain+Glory',
      languages_list: ['HTMl', 'JS', 'CSS', 'Ruby & Rails'],
      btn_popup: 'See Project',
    },
    {
      id: 5,
      url: './assets/images/Img-plaholder.svg',
      title: 'Multi-Post Stories Gain+Glory',
      languages_list: ['HTMl', 'JS', 'CSS', 'Ruby & Rails'],
      btn_popup: 'See Project',
    },
    {
      id: 6,
      url: './assets/images/Img-plaholder.svg',
      title: 'Multi-Post Stories Gain+Glory',
      languages_list: ['HTMl', 'JS', 'CSS', 'Ruby & Rails'],
      btn_popup: 'See Project',
    },
  ];

  function languages(languages) {
    return `${languages.map((language) => `<li>${language}</li>`).join('')} `;
  }

  function workGroup(recent_works)
  {
    return `
    <article  class="card">
       <div class="card-image"><img src=${recent_works.url} alt="My-Work"></div>
        <li><h2 class="project-title">${recent_works.title}</h2></li>
      <ul class="tags">
        ${languages(recent_works.languages_list)}
      </ul>
    <button type="button" class="btn_popup" id=${recent_works.id}>${recent_works.btn_popup}</button>
</article >
    `;
  }

  document.getElementById('dynamicWork').innerHTML = `${dataprojects.map(workGroup).join('')}`;

  // Project Popup

  const projectPopUp = [
    {
      id: 1,
      image: './assets/images/Img-plaholder.svg',
      name: 'Multi-Post Stories Gain+Glory',
      languages_list: ['HTMl', 'JS', 'CSS', 'Ruby & Rails'],
      desktoplist: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
      btn_popup: 'See Project',
      description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      firstBtn: 'See Live',
      secondBtn: 'See Source',
      linkVersion: 'https://yusufyusie-app/',
      linkSource: 'https://github.com/yusufyusie v1',
    },
    {
      id: 2,
      image: './assets/images/Img-plaholder.svg',
      name: 'Multi-Post Stories Gain+Glory',
      languages_list: ['HTMl', 'JS', 'CSS', 'Ruby & Rails'],
      desktoplist: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
      btn_popup: 'See Project',
      description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      firstBtn: 'See Live',
      secondBtn: 'See Source',
      linkVersion: 'https://yusufyusie-app/',
      linkSource: 'https://github.com/yusufyusie v1',
    },
    {
      id: 3,
      image: './assets/images/Img-plaholder.svg',
      name: 'Multi-Post Stories Gain+Glory',
      languages_list: ['HTMl', 'JS', 'CSS', 'Ruby & Rails'],
      desktoplist: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
      btn_popup: 'See Project',
      description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      firstBtn: 'See Live',
      secondBtn: 'See Source',
      linkVersion: 'https://yusufyusie-app/',
      linkSource: 'https://github.com/yusufyusie v1',
    },
    {   
      id: 4,
      image: './assets/images/Img-plaholder.svg',
      name: 'Multi-Post Stories Gain+Glory',
      languages_list: ['HTMl', 'JS', 'CSS', 'Ruby & Rails'],
      desktoplist: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
      btn_popup: 'See Project',
      description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      firstBtn: 'See Live',
      secondBtn: 'See Source',
      linkVersion: 'https://yusufyusie-app/',
      linkSource: 'https://github.com/yusufyusie v1',
    },
    {
      id: 5,
      image: './assets/images/Img-plaholder.svg',
      name: 'Multi-Post Stories Gain+Glory',
      languages_list: ['HTMl', 'JS', 'CSS', 'Ruby & Rails'],
      desktoplist: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
      btn_popup: 'See Project',
      description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      firstBtn: 'See Live',
      secondBtn: 'See Source',
      linkVersion: 'https://yusufyusie-app/',
      linkSource: 'https://github.com/yusufyusie v1',
    },
    {
      id: 6,
      image: './assets/images/Img-plaholder.svg',
      name: 'Multi-Post Stories Gain+Glory',
      languages_list: ['HTMl', 'JS', 'CSS', 'Ruby & Rails'],
      desktoplist: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
      btn_popup: 'See Project',
      description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      firstBtn: 'See Live',
      secondBtn: 'See Source',
      linkVersion: 'https://yusufyusie-app/',
      linkSource: 'https://github.com/yusufyusie v1',
    },
  ];

  function languagesPopup(languages) {
    return `${languages.map((language) => `<li>${language}</li>`).join('')}`;
  }
  
  function languagesPopupDesktop(languages) {
    return `${languages.map((language) => `<li>${language}</li>`).join('')}`;
  }

  function projectPopup(pop_works) {
    return `
    <div class="workMainDiv">
      <span class="cl-tag fa fa-close" id="firstClose"></span>
      <div class="workImgDiv">
        <img src=${pop_works.image} alt="My-Work" id="closeTab">
      </div>
    <div class="workContentDiv">
      <div class="workNameDiv">
        <h1>${pop_works.name}</h1>
        <ul class="workButtonDiv">
          <li><a href=${pop_works.linkVersion} target="_blank"><button type="button" >${pop_works.firstBtn}<i class="fa fa-external-link" aria-hidden="true"></i></button></a></li>
          <li><a href=${pop_works.linkSource} target="_blank"><button type="button">${pop_works.secondBtn}<i class="fa fa-github" aria-hidden="true"></i></button></a></li>
        </ul>
      </div>
      <div class="list-boxPop">
        <ul>
            ${(window.innerWidth < 768) ? languagesPopup(pop_works.languages_list) : languagesPopupDesktop(pop_works.desktoplist)}
        </ul>
      </div>
      <p>${pop_works.description}</p>
      <div class="mobileButtonDiv">
      <ul class="workButtonDiv">
          <li><a href=${pop_works.linkVersion} target="_blank"><button type="button" >${pop_works.firstBtn}<i class="fa fa-external-link" aria-hidden="true"></i></button></a></li>
          <li><a href=${pop_works.linkSource} target="_blank"><button type="button">${pop_works.secondBtn}<i class="fa fa-github" aria-hidden="true"></i></button></a></li>
      </ul>
      </div>
    </div>
    </div>
      `;
  }

  const modal = document.getElementById('intialPopup');

  if (document.getElementById('1')) {
    document.getElementById('1').onclick = () => {
      modal.innerHTML = projectPopup(projectPopUp[0]);
      modal.style.display = 'block';
      const span = document.getElementById('firstClose');
      span.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    };
  }
  
  if (document.getElementById('2')) {
    document.getElementById('2').onclick = () => {
      modal.innerHTML = projectPopup(projectPopUp[1]);
      modal.style.display = 'block';
      const span = document.getElementById('firstClose');
      span.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    };
  }
  
  if (document.getElementById('3')) {
    document.getElementById('3').onclick = () => {
      modal.innerHTML = projectPopup(projectPopUp[2]);
      modal.style.display = 'block';
      const span = document.getElementById('firstClose');
      span.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    };
  }
  
  if (document.getElementById('4')) {
    document.getElementById('4').onclick = () => {
      modal.innerHTML = projectPopup(projectPopUp[3]);
      modal.style.display = 'block';
      const span = document.getElementById('firstClose');
      span.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    };
  }
  
  if (document.getElementById('5')) {
    document.getElementById('5').onclick = () => {
      modal.innerHTML = projectPopup(projectPopUp[4]);
      modal.style.display = 'block';
      const span = document.getElementById('firstClose');
      span.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    };
  }
  
  if (document.getElementById('6')) {
    document.getElementById('6').onclick = () => {
      modal.innerHTML = projectPopup(projectPopUp[5]);
      modal.style.display = 'block';
      const span = document.getElementById('firstClose');
      span.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    };
  }
  
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };