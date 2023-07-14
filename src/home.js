export default function createHome(){
    const homeBody = document.createElement('div');
    
    const homeTitle = document.createElement('h1');
    homeTitle.textContent = 'Welcome to the Restaurant';
    homeBody.appendChild(homeTitle);

    const homeText = document.createElement('p');
    homeText.textContent = 'lorem: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.';
    homeBody.appendChild(homeText);

    // const homeImage = document.createElement('img');
    // homeImage.src = 'https://images.unsplash.com/photo-1557683316-973673baf926';
    // homeImage.alt = 'Restaurant';
    // homeImage.width = '300';
    // homeBody.appendChild(homeImage);
    homeBody.classList.add('home-body');
    return homeBody;
}