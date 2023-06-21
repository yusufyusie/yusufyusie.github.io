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
