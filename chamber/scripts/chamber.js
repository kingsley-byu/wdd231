const menu = document.querySelector('#menu-btn');
const navBar = document.querySelector('#nav-bar');
menu.addEventListener('click', () => {
    navBar.classList.toggle('open');
    menu.classList.toggle('open');
});

const cardContainer = document.querySelector('#cards');

async function getMembersData() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members);
}
getMembersData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');

        let picture = document.createElement('picture');

        let sourceLarge = document.createElement('source');
        sourceLarge.setAttribute('srcset', `${member.imageFile}-large.webp`);
        sourceLarge.setAttribute('media', '(min-width: 1000px)');

        let sourceMedium = document.createElement('source');
        sourceMedium.setAttribute('srcset', `${member.imageFile}-medium.webp`);
        sourceMedium.setAttribute('media', '(min-width: 640px)');

        let image = document.createElement('img');
        image.setAttribute('src', `${member.imageFile}-small.webp`);
        image.setAttribute('alt', `portrait of ${member.companyName}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', '150');

        picture.appendChild(sourceLarge);
        picture.appendChild(sourceMedium);
        picture.appendChild(image);

        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let websiteUrl = document.createElement('p');
        let level = document.createElement('p');
        let year = document.createElement('p');

        name.textContent = member.companyName;
        address.textContent = `${member.companyAddress.street}, ${member.companyAddress.city}, ${member.companyAddress.country}`;
        phone.textContent = member.phoneNumber;
        websiteUrl.innerHTML = `<a href="${member.website}" target="_blank">Visit Website</a>`;
        level.textContent = `Membership level: ${member.membershipLevel}`;
        year.textContent = `Year Established: ${member.yearEstablished}`;

        card.appendChild(picture);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(websiteUrl);
        card.appendChild(level);
        card.appendChild(year);

        cardContainer.appendChild(card);
    });
};

const gridButton = document.querySelector('#grid');
const listBtn = document.querySelector('#list');

gridButton.addEventListener('click', () => {
    cardContainer.classList.add('grid');
    cardContainer.classList.remove('list');
});

listBtn.addEventListener('click', () => {
    cardContainer.classList.add('list');
    cardContainer.classList.remove('grid');
});

document.querySelector('#currentyear').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = `Last Modified: ${document.lastModified}`;