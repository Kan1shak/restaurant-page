export default function createMenu(){
    const randomPrice = () => Math.floor(Math.random() * 5) + 5.99;
    const menuBody = document.createElement('div');
    
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Menu';
    menuBody.appendChild(menuTitle);

    const menuText = document.createElement('p');
    menuText.textContent = 'Text describing how diverse our menu is and how we have something for everyone.';
    menuBody.appendChild(menuText);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    for (let i = 0; i < 15; i++) {
        const menuCard = document.createElement('div');
        menuCard.classList.add('menu-item');
        const menuCardTitle = document.createElement('h3');
        menuCardTitle.textContent = 'Menu Item';
        const menuCardText = document.createElement('p');
        menuCardText.textContent = 'Enticing description of the menu item that will make you really hungry and make you want to order this item.';
        const menuCardImage = document.createElement('img');
        menuCardImage.src = 'https://i.ibb.co/M8wrzJH/b1fiWRV.png';
        menuCardImage.alt = 'Some Tasty Food';
        menuCardImage.width = '500';
        const menuCardPrice = document.createElement('strong');
        menuCardPrice.textContent = `$${randomPrice()}`;
        menuCard.appendChild(menuCardTitle);
        menuCard.appendChild(menuCardText);
        menuCard.appendChild(menuCardImage);
        menuCard.appendChild(menuCardPrice);
        menuContainer.appendChild(menuCard);
    }
    menuBody.appendChild(menuContainer);
    menuBody.classList.add('menu-body');
    return menuBody;
}