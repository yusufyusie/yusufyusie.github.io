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
      id: 1,
      url: '.assets/images/Img-plaholder.svg',
      title: 'Multi-Post Stories Gain+Glory',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      technologies: ['HTMl', 'JS', 'CSS', 'Ruby & Rails'],
      linkVersion: 'https://example.com/liveversion1/',
      linkSource: 'https://github.com/yusufyusie/work-project-1',
    },
    {
      id: 2,
      url: '.assets/images/Img-plaholder.svg',
      title: 'Multi-Post Stories Gain+Glory',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      technologies: ['HTMl', 'JS', 'CSS', 'Ruby & Rails'],
      linkVersion: 'https://example.com/liveversion1/',
      linkSource: 'https://github.com/yusufyusie/work-project-1',
    },
    {
      id: 3,
      url: '.assets/images/Img-plaholder.svg',
      title: 'Multi-Post Stories Gain+Glory',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      technologies: ['HTMl', 'JS', 'CSS', 'Ruby & Rails'],
      linkVersion: 'https://example.com/liveversion1/',
      linkSource: 'https://github.com/yusufyusie/work-project-1',
    },
    {   
      id: 4,
      url: '.assets/images/Img-plaholder.svg',
      title: 'Multi-Post Stories Gain+Glory',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      technologies: ['HTMl', 'JS', 'CSS', 'Ruby & Rails'],
      linkVersion: 'https://example.com/liveversion1/',
      linkSource: 'https://github.com/yusufyusie/work-project-1',
    },
    {
      id: 5,
      url: '.assets/images/Img-plaholder.svg',
      title: 'Multi-Post Stories Gain+Glory',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      technologies: ['HTMl', 'JS', 'CSS', 'Ruby & Rails'],
      linkVersion: 'https://example.com/liveversion1/',
      linkSource: 'https://github.com/yusufyusie/work-project-1',
    },
    {
      id: 6,
      url: '.assets/images/Img-plaholder.svg',
      title: 'Multi-Post Stories Gain+Glory',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      technologies_list: ['HTMl', 'JS', 'CSS', 'Ruby & Rails'],
      linkVersion: 'https://example.com/liveversion1/',
      linkSource: 'https://github.com/yusufyusie/work-project-1',
      btn_text: 'See Project',
    },
  ];

  
  function technologies(technologies) {
    return `${technologies.map((technologie) => `<li>${technologie}</li>`).join('')} `;
  }

  function workTemplate(work) {
    return `
      <li class="flex-box">
      <ul class="firstList">
        <li><img src=${work.url} alt="My-Work"></li>
        <li><h1>${work.title}</h1></li>
      </ul>
    
    <div class="list-box">
   <ul>
   ${languages(work.technologies_list)}
   </ul>
   </div>
    <ul class="See-btn" id="seeBtn-List">
      <li><button type="button" class="see-project" id=${work.id}>${work.btn_text}</button></li>
    </ul>
  </li>
      `;
  }

  document.getElementById('dynamicWork').innerHTML = `${workData.map(workTemplate).join('')}`;
  const workPopUp = [
    {
      id: 1,
      url: './Images/awesomeBook.png',
      technologies_list: ['HTML', 'CSS', 'Javascript'],
      desktoplist: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal'],
      btn_text: 'See Project',
      description: '`Awesome Books` is a simple website that allows the user to add and remove books and display them. This app also stores <strong>books</strong> in a local storage',
      heading: 'Awesome Books',
      firstBtn: 'See Live',
      secondBtn: 'See Source',
      liveLink: 'https://alexander16108.github.io/Chaws-Awesome-B00k-Store/',
      sourceLink: 'https://github.com/alexander16108/Chaws-Awesome-B00k-Store',
    },
    {
      id: 2,
      url: './Images/calculatorApp.png',
      technologies_list: ['React', 'HTML', 'CSS'],
      desktoplist: ['Netlify', 'Github', 'Bootstrap', 'Terminal'],
      btn_text: 'See Project',
      description: '"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations.',
      heading: 'Math Magician',
      firstBtn: 'See Live',
      secondBtn: 'See Source',
      liveLink: 'https://alexis-math-magician.netlify.app/',
      sourceLink: 'https://github.com/alexander16108/react-math-calculator',
    },
    {
      id: 3,
      url: './Images/budgetapps.png',
      technologies_list: ['HTMl', 'JS', 'CSS', 'Ruby & Rails'],
      desktoplist: ['Codekit', 'Github', 'Bootstrap', 'Terminal'],
      btn_text: 'See Project',
      description: ' Easy to adapt and deploy portfolio project covering most important sections(about, exp, skills, projects), inspired with solutions found at GitHub. Check live preview(link below)',
      heading: 'Budget App',
      firstBtn: 'See Live',
      secondBtn: 'See Source',
      liveLink: 'https://alexander-personal-portfolio.netlify.app/',
      sourceLink: 'https://github.com/alexander16108/portfolio-project-v2',
    },
    {
      id: 4,
      url: './Images/capstone.png',
      technologies_list: ['HTMl', 'JS', 'CSS', 'Ruby & Rails'],
      desktoplist: ['Codekit', 'Github', 'Bootstrap', 'Terminal'],
      btn_text: 'See Project',
      description: 'The future of passenger drones remains uncertain since this technology is so new. Innovation in aerial drone technology, and in aerial traffic coordination, control, and collision-avoidance could result in rapid proliferation of passenger drones for civilian travel.',
      heading: 'Drone Summit',
      firstBtn: 'See Live',
      secondBtn: 'See Source',
      liveLink: 'https://alexander16108.github.io/capstone-project/',
      sourceLink: 'https://github.com/alexander16108/capstone-project',
    },
    {
      id: 5,
      url: './Images/metricsapps.png',
      technologies_list: ['HTMl', 'JS', 'CSS', 'Ruby & Rails'],
      desktoplist: ['Codekit', 'Github', 'Bootstrap', 'Terminal'],
      btn_text: 'See Project',
      description: 'Covid-19 metrics app collects information from different data sources to provide details about covid-19. You can filter data by continent and country.',
      heading: 'Metrics Webapp',
      firstBtn: 'See Live',
      secondBtn: 'See Source',
      liveLink: 'https://deploy-preview-3--eloquent-leavitt-8c9f5c.netlify.app/',
      sourceLink: 'https://github.com/alexander16108/React-Capstone',
    },
    
    {
      id: 6,
      url: './Images/worldfoods.png',
      technologies_list: ['HTMl', 'JS', 'CSS', 'Ruby & Rails'],
      desktoplist: ['Codekit', 'Github', 'Bootstrap', 'Terminal'],
      btn_text: 'See Project',
      description: 'In this project, we built a space travelers application with React and Redux. Here, users can navigate between Rockets, Missions, and Dragons.',
      heading: 'Space Travellers Hub',
      firstBtn: 'See Live',
      secondBtn: 'See Source',
      liveLink: 'https://spacexapi-demo.netlify.app/',
      sourceLink: 'https://github.com/nikoescobal/space-travelers',
    },
  ];
  
  function technologiesPopup(technologies) {
    return `${technologies.map((technologie) => `<li>${technologie}</li>`).join('')}`;
  }
  
  function technologiesPopupDesktop(technologies) {
    return `${technologies.map((technologie) => `<li>${technologie}</li>`).join('')}`;
  }