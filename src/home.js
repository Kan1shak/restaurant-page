export default function createHome(){
    const homeBody = document.createElement('div');
    
    const homeTitle = document.createElement('h1');
    homeTitle.textContent = 'Welcome to the Restaurant';
    homeBody.appendChild(homeTitle);

    const homeText = document.createElement('p');
    homeText.textContent = 'Some catchy phrase about the restaurant.';
    homeBody.appendChild(homeText);

    const homeAbout = document.createElement('div');
    homeAbout.classList.add('home-about');
    const homeAboutTitle = document.createElement('h2');
    homeAboutTitle.textContent = 'About Us';
    const homeAboutText = document.createElement('p');
    homeAboutText.textContent = 'Some really long description about the restaurant and how it is the best restaurant in the world. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.';
    homeAbout.appendChild(homeAboutTitle);
    homeAbout.appendChild(homeAboutText);
    homeBody.appendChild(homeAbout);

    homeBody.classList.add('home-body');
    return homeBody;
}