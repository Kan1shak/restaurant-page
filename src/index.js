import './style.css';

const createNav = () => {
    const navbar = document.createElement('nav');

    const home = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');

    home.textContent = 'Home'
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(contact);
    document.querySelector('#content').appendChild(navbar);

    document.querySelectorAll('nav > a').forEach((item)=> {
        item.addEventListener('click', () =>{
            console.log('yes!');
        })
    })
}

createNav();