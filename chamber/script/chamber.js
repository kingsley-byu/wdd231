const cardContainer = document.querySelector('#cards');
async function getMembersData(){
    const response = await fetch('data/members.json');
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members);
}
getMembersData();

const displayMembers = (members) => {
    members.forEach((member) =>{
        let card = document.createElement('section');

         // create picture element
        let picture = document.createElement('picture');

       // Large screen source
        let sourceLarge = document.createElement('source');
        sourceLarge.setAttribute('srcset', `${member.imageFile}-large.webp`);
        sourceLarge.setAttribute('media', '(min-width: 1000px)');

        // medium screen source
        let sourceMedium = document.createElement('source');
        sourceMedium.setAttribute('srcset', `${member.imageFile}-medium.webp`);
        sourceMedium.setAttribute('media', '(min-width: 640px)');

        //Fallback image and img into picture
        let image = document.createElement('img');
        image.setAttribute('src',`${member.imageFile}-small.webp`);
        image.setAttribute('alt', `portrait of ${member.companyName}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', '150');

        //Append source and image
        picture.appendChild(sourceLarge);
        picture.appendChild(sourceMedium);
        picture.appendChild(image);


        
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let websiteUrl = document.createElement('p');
        let level = document.createElement('p');
        let year = document.createElement('p');
        
        name.textContent = `${member.companyName}`;
        address.textContent = `${member.companyAddress.street}, ${member.companyAddress.city}, ${member.companyAddress.country}`;
        phone.textContent = `${member.phoneNumber}`;
        websiteUrl.innerHTML = `<a href="${member.website}" target="_blank">Visit Website</a>`;
        level.textContent = `${member.membershipLevel}`;
        year.textContent = `${member.yearEstablished}`;
        
        // Append everything into card
        card.appendChild(picture);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(websiteUrl);
        card.appendChild(level);
        card.appendChild(year);

        //Append card into container
        cardContainer.appendChild(card);
    })
}