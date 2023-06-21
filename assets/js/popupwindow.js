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
    <li class="flex-box">
    <ul class="firstList">
      <li><img src=${recent_works.url} alt="My-Work"></li>
      <li><h1>${recent_works.title}</h1></li>
    </ul>
  
  <div class="list-box">
 <ul>
 ${languages(recent_works.languages_list)}
 </ul>
 </div>
  <ul class="See-btn" id="seeBtn-List">
    <li><button type="button" class="see-project" id=${recent_works.id}>${recent_works.btn_popup}</button></li>
  </ul>
</li>
    `;
  }
  document.getElementById('dynamicWork').innerHTML = `${dataprojects.map(workGroup).join('')}`;
