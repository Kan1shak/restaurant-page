export default function createContact(){
    const contactBodyContainer = document.createElement('div');
    contactBodyContainer.classList.add('contact-body-container');

    const contactBody = document.createElement('div');
    const contactAddressContainer = document.createElement('div');
    const contactAddressTitle = document.createElement('h2');
    contactAddressTitle.textContent = 'Address';
    const contactAddressText = document.createElement('p');
    contactAddressText.innerHTML = '1234 Main St<br>Anytown<br>SomeCountry 12345';
    contactAddressContainer.appendChild(contactAddressTitle);
    contactAddressContainer.appendChild(contactAddressText);
    contactBody.appendChild(contactAddressContainer);

    const contactPhoneContainer = document.createElement('div');
    const contactPhoneTitle = document.createElement('h2');
    contactPhoneTitle.textContent = 'Contact Us';
    const contactPhoneText = document.createElement('p');
    contactPhoneText.innerHTML = 'Phone: 123-456-7890 <br> Email: someniceguy@thisrestaurant.com <br> Fax: 123-456-7890';
    contactPhoneContainer.appendChild(contactPhoneTitle);
    contactPhoneContainer.appendChild(contactPhoneText);
    contactBody.appendChild(contactPhoneContainer);

    const contactHoursContainer = document.createElement('div');
    const contactHoursTitle = document.createElement('h2');
    contactHoursTitle.textContent = 'Hours';
    const contactHoursText = document.createElement('p');
    contactHoursText.innerHTML = 'Monday - Friday: 9am - 5pm <br> Saturday: 9am - 7pm <br> Sunday: 9am - 9pm';
    contactHoursContainer.appendChild(contactHoursTitle);
    contactHoursContainer.appendChild(contactHoursText);
    contactBody.appendChild(contactHoursContainer);

    contactBody.classList.add('contact-body');
    contactBodyContainer.appendChild(contactBody);
    return contactBodyContainer;
}