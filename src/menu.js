export default function createMenu(){
    const menuBody = document.createElement('div');
    
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Menu';
    menuBody.appendChild(menuTitle);

    const menuText = document.createElement('p');
    menuText.textContent = 'lorem: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.';
    menuBody.appendChild(menuText);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    for (let i = 0; i < 15; i++) {
        const menuCard = document.createElement('div');
        menuCard.classList.add('menu-item');
        const menuCardTitle = document.createElement('h3');
        menuCardTitle.textContent = 'Menu Item';
        const menuCardText = document.createElement('p');
        menuCardText.textContent = 'lorem: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.';
        const menuCardImage = document.createElement('img');
        menuCardImage.src = 'https://i.ibb.co/M8wrzJH/b1fiWRV.png';
        menuCardImage.alt = 'Some Tasty Food';
        menuCardImage.width = '500';
        menuCard.appendChild(menuCardTitle);
        menuCard.appendChild(menuCardText);
        menuCard.appendChild(menuCardImage);
        menuContainer.appendChild(menuCard);
    }
    menuBody.appendChild(menuContainer);
    menuBody.classList.add('menu-body');
    return menuBody;
}