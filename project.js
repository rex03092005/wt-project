let movies = [
    {
        name: 'falcon and the winter soldier',
        des: 'Following the events of "Avengers: Endgame," Sam Willson and Bucky Barnes team up in a global adventure that tests their abilities and their patience.',
        image: "Assets/disney_img/slider 2.PNG"
    },
    {
        name: 'loki',
        des: 'The mercurail villian Loki resumes his role as the God of Mischief in a new series that takes place after the events of "Avengers: Endgame".',
        image: "Assets/disney_img/slider 1.PNG"
    },
    {
        name: 'wanda vision',
        des: 'Wanda Maximoff and Vision--two super-powered beings living idealized suburban lives--begin to suspect that everything is not as it seems.',
        image: "Assets/disney_img/slider 3.PNG"
    },
    {
        name: 'raya and the last dragon',
        des: 'Raya, a fallen princess, must track the legendary last dragon to stop the evil forces that have returned and threatened her world.',
        image: "Assets/disney_img/slider 4.PNG"
    },
    {
        name: 'luca',
        des: 'The movie is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides.',
        image: "Assets/disney_img/slider 5.PNG"
    }
  ];
  
  const carousel = document.querySelector('.carousel');
  let sliders = [];
  let slideIndex = 0; // Track the current slide.
  
  const createSlide = () => {
    if(slideIndex >= movies.length){
      slideIndex = 0;
    }
  
    // Create DOM elements
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
  
    //Attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    // Setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    // Setting elements classnames
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';
  
    sliders.push(slide);
  
    if(sliders.length){
      sliders[0].style.marginLeft = `calc(-${ 100 * (sliders.length - 2)}% - ${ 30 * (sliders.length - 2)}px)`;
    }
  };
  
  for(let i=0; i<3; i++){
    createSlide();
  }
  setInterval(() => {
    createSlide();
  }, 3000);

  //video card
  const videoCards = [...document.querySelectorAll('.video-card')];
  videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener('mouseleave', () => {
      let video = item.children[1];
      video.pause();
    });
  });

// Card sliders
let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach( (item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth - 200;
  });
  preBtns[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth + 200;
  });
});