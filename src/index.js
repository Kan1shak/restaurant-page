import './style.css';
import createHome from './home.js';
import createMenu from './menu.js';
import createContact from './contact.js';
(function(){
    const navbar = document.createElement('nav');
    const bodyContent = document.querySelector('#content');
    bodyContent.appendChild(createHome());

    const home = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');

    home.textContent = 'Home'
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(contact);
    document.body.insertBefore(navbar, bodyContent);

    document.querySelectorAll('nav > a').forEach((link)=> {
        link.addEventListener('click', () =>{
            console.log('yes!');
            bodyContent.innerHTML = '';
            if(link.textContent === 'Home'){
                bodyContent.appendChild(createHome());
            }
            else if(link.textContent === 'Menu'){
                bodyContent.appendChild(createMenu());
            }
            else if(link.textContent === 'Contact'){
                bodyContent.appendChild(createContact());
            }
        })
    })
})();