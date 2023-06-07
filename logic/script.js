const openMenu = document.querySelector('.open-menu');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');
// const navItems = document.querySelectorAll('.nav-item');

openMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
  openMenu.classList.toggle('hide');
  closeMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
  openMenu.classList.toggle('show');
  openMenu.classList.toggle('hide');
  closeMenu.classList.toggle('show');
});

// navItems.forEach((navItem) => {
//   navItem.addEventListener('click', () => {
//     menu.classList.toggle('active');
//     openMenu.classList.toggle('show');
//     openMenu.classList.toggle('hide');
//     closeMenu.classList.toggle('show');
//   });
// });

const projects = [
  {
    name: 'To-do list',
    description: `To do taks is a convenient website that empowers 
    you to effortlessly compile and manage your tasks in an online 
    format. Seamlessly create and organize a comprehensive task list,
     ensuring that your important to-dos are securely stored and 
     easily accessible anytime, anywhere.`,
    resume: `To do taks is a convenient website that empowers 
    you to effortlessly compile and manage your tasks in an online 
    format.`,
    image: 'img/todo-list.png',
    technologies: ['Webpack', 'JavaScript', 'HTML', 'CSS'],
    linkToLiveVersion: 'https://shinhyobelok.github.io/To-do-list/',
    linkToSource: 'https://github.com/ShinhyoBelok/To-do-list',
    dot: 'img/Counter.svg',
    canopyli1: 'Front End Dev',
    canopyli2: '2023',
    btnId: 'see-project-1',
    contentDirection: '',
  },

  {
    name: 'BigOven',
    description: `BigOven is a ruby on rails app that help you 
    save your favorites recipes and let you keep track of your 
    food inventory by adding the food in the app, When you want 
    to cook a recipe you can generate a shopping list to see what 
    you missing to be able to do that recipe.`,
    resume: `BigOven is a ruby on rails app that help you 
    save your favorites recipes and let you keep track of your 
    food inventory.`,
    image: 'img/portfolio/bigoven.png',
    technologies: ['Ruby on Rails', 'HTML', 'CSS'],
    linkToLiveVersion: 'https://bigoven.onrender.com',
    linkToSource: 'https://github.com/ShinhyoBelok/BigOven',
    dot: 'img/Counter.svg',
    canopyli1: 'Back End Dev',
    canopyli2: '2023',
    btnId: 'see-project-2',
    contentDirection: 'reverseGrid',
  },

  {
    name: 'Space Travelers Hub',
    description: `This project involves the use of React and real-time 
    data sourced from the SpaceX API. Our objective is to develop a web 
    application for a company specializing in commercial and scientific 
    space travel services. Through this application, users will have the 
    opportunity to reserve rockets and participate in specific space missions.`,
    resume: `This project involves the use of React and real-time data 
    sourced from the SpaceX API. Through this application, users will 
    have the opportunity to reserve rockets and participate in specific 
    space missions.`,
    image: 'img/portfolio/spacehub.png',
    technologies: ['React', 'Redux', 'JavaScript', 'HTML', 'CSS'],
    linkToLiveVersion: 'https://alejandrakeber-space-travelers-hub.onrender.com/',
    linkToSource: 'https://github.com/ShinhyoBelok/space-travelers-hub',
    dot: 'img/Counter.svg',
    canopyli1: 'Front End Dev',
    canopyli2: '2023',
    btnId: 'see-project-3',
    contentDirection: '',
  },

  {
    name: 'Crypto Currencies',
    description: `Crypto Currencies is a web application that provides 
    live information about the top 100 cryptocurrencies through a live API. 
    The web app allows users to get all details related to the top cryptos.`,
    resume: `Crypto Currencies is a web application that provides 
    live information about the top 100 cryptocurrencies through a live API. 
    The web app allows users to get all details related to the top cryptos.`,
    image: 'img/portfolio/crypto.png',
    technologies: ['React', 'Redux','JavaScript', 'Jest','API', 'HTML', 'CSS'],
    linkToLiveVersion: 'https://crypto-currencies-shinhyobelok.netlify.app/',
    linkToSource: 'https://github.com/ShinhyoBelok/crypto-webapp',
    dot: 'img/Counter.svg',
    canopyli1: 'Front End Dev',
    canopyli2: '2023',
    btnId: 'see-project-4',
    contentDirection: 'reverseGrid',
  },

  {
    name: 'Chopin Concerts',
    description: `The Chopin Concerts. This extraordinary website is dedicated 
    to showcasing the extraordinary talent and artistry of world-class pianists, 
    as they bring the timeless compositions of Frederic Chopin to life. Let the melodies 
    of the piano ignite your soul and transport you to a world of pure artistic bliss.`,
    resume: `Welcome to the website for the Chopin Concerts! This platform 
    showcases exceptional performances by numerous highly skilled pianists. 
    Here, you can access all the necessary information for the upcoming events.`,
    image: 'img/portfolio/chopin.png',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    linkToLiveVersion: 'https://shinhyobelok.github.io/Classical-music-concert/',
    linkToSource: 'https://github.com/ShinhyoBelok/Classical-music-concert',
    dot: 'img/Counter.svg',
    canopyli1: 'Front End Dev',
    canopyli2: '2023',
    btnId: 'see-project-5',
    contentDirection: '',
  },
];

const workSection = document.querySelector('#work');

function createProgrammingLanguages(x) {
  let list = '';
  for (let i = 0; i < projects[x].technologies.length; i += 1) {
    list += `<li>${projects[x].technologies[i]}</li>`;
  }
  return list;
}

for (let i = 0; i < projects.length; i += 1) {
  const projectCard = `
    <section class="project hidden" id="project-${i}">
                  <img class="snap ${projects[i].contentDirection}" src="${projects[i].image}" alt="First project card picture">
                  <h2>${projects[i].name}</h2>
                  <section>
                      <ul class="canopy">
                          <li>PROJECT</li>
                          <li><img src="${projects[i].dot}" alt="Dot icon"></li>
                          <li><span class="lightgray">${projects[i].canopyli1}</span></li>
                          <li><img src="${projects[i].dot}" alt="Dot icon"></li>
                          <li><span class="lightgray">${projects[i].canopyli2}</span></li>
                      </ul>
                  </section>
                  <p>${projects[i].resume}</p>
                  <ul class="programmingLanguages">
                    ${createProgrammingLanguages(i)}
                  </ul>
                  <button class="button detail" id="${projects[i].btnId}">See Project</button>
              </section>
  `;
  workSection.innerHTML += projectCard;
}

workSection.innerHTML += `
  <section class="modal" id="popup-window">
    <header>
        <h2></h2>
        <button class="close-btn-modal"><img src="img/Icon-Cancel-detailmode.svg" alt="X"/></button>
    </header>
    <section>
        <ul class="canopy popup">
            <li>PROJECT</li>
            <li><img src="img/Counter.svg" alt="Dot icon"></li>
            <li><span class="lightgray">Back End Dev</span></li>
            <li><img src="img/Counter.svg" alt="Dot icon"></li>
            <li><span class="lightgray">2015</span></li>
        </ul>
    </section>
    <img class="snap modalpic" src="" alt="First project card picture">
    <article class="modal-description">
        <div class="side">
            <p></p>
        </div>
        <div class="side-description">
            <ul class="programmingLanguages popup">
                <li>html</li>
                <li>css</li>
                <li>javaScript</li>
            </ul>
            <section class="btnSection">
                <a class="seeLive" href="" target="_blank"><button class="button modal-btn">See live<img src="img/Icon - Export-btn.svg" alt="Export Icon"/></button></a>
                <a class="seeSource" href="" target="_blank"><button class="button modal-btn">See Source<img src="img/Icon -GitHub-btn.svg" alt="Github Icon"/></button></a>
            </section>
        </div>
    </article>
  </section>
  <div class="modal" id="overlay"></div>
`;
/* start dynamic modal */
const popupContainer = document.getElementById('popup-window');
const overlay = document.getElementById('overlay');
const closeBtnModal = document.querySelector('.close-btn-modal');
const title = document.querySelector('.modal h2');
const snap = document.querySelector('.modal img.snap');
const cardDescription = document.querySelector('.modal p');
const openBtn = document.querySelectorAll('.project .button.detail');
const seeLive = document.querySelector('.seeLive');
const seeSource = document.querySelector('.seeSource');
const technologies = document.querySelector('.programmingLanguages.popup');
const canopy = document.querySelector('.canopy.popup');

function cardContent(event) {
  const i = (event.slice(12)) - 1;
  title.textContent = projects[i].name;
  snap.setAttribute('src', projects[i].image);
  cardDescription.textContent = projects[i].description;
  seeLive.href = projects[i].linkToLiveVersion;
  seeSource.href = projects[i].linkToSource;
  technologies.innerHTML = createProgrammingLanguages(i);
  canopy.innerHTML = `
    <li>PROJECT</li>
    <li><img src="img/Counter.svg" alt="Dot icon"></li>
    <li><span class="lightgray">${projects[i].canopyli1}</span></li>
    <li><img src="img/Counter.svg" alt="Dot icon"></li>
    <li><span class="lightgray">${projects[i].canopyli2}</span></li>
  `;
}

function elementEvent(element) {
  element.addEventListener('click', (event) => {
    cardContent(event.target.id);
    popupContainer.style.animation = 'show 0.5s forwards';
    overlay.style.transform = 'scale(1)';
  });
}

openBtn.forEach((element) => {
  elementEvent(element);
});

closeBtnModal.addEventListener('click', () => {
  popupContainer.style.transform = 'scale(0)';
  popupContainer.style.animation = '';
  overlay.style.transform = 'scale(0)';
});
/* end dynamic modal */
/* start lower case error */
const form = document.querySelector('#contact-me-form');
const emailError = document.querySelector('small.error');

function showError() {
  emailError.textContent = 'Kindly only use lower case for the Email';
  emailError.classList.add('active');
}

function hideError() {
  emailError.textContent = '';
  emailError.classList.remove('active');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = form.email.value;
  if (email !== email.toLowerCase()) {
    showError();
  } else {
    hideError();
    form.submit();
  }
});

form.email.addEventListener('keyup', (event) => {
  event.preventDefault();
  if (event.target.value !== event.target.value.toLowerCase()) {
    showError();
  } else {
    hideError();
  }
});

/* end lower case error */