import { initNav } from './shared/nav.mjs';
import { setFooterInfo } from './shared/footer.mjs';

import { getEvent } from './shared/membership.mjs';



async function fetchMemberLevelData() {
    const data = await getEvent();
    console.table(data.memberLevels)
    levelCards(data.memberLevels);
}


const membershipCard = document.querySelector("#membership-card")
const dialog = document.querySelector("#membership-dialog");
document.querySelector("#timestamp").value = new Date().toISOString();



function levelCards(levels) {
    levels.forEach((level) => {
        const card = document.createElement("section");
        let h2 = document.createElement("h2");
        let button = document.createElement("button");
        
        h2.textContent = level.title
        button.textContent = "Learn more";
        button.addEventListener("click", () => {
            dialogBox(level);
        })
        


        card.appendChild(h2);
        card.appendChild(button);

        membershipCard.appendChild(card)

    });
}

function dialogBox(x) {
    dialog.innerHTML = `<button id="closeModal">❌</button>
    <h2>${x.title}</h2>
    <p><strong>Benefits</strong>: ${x.benefits.join(',')}</p>
    <p><strong>Cost</strong>: ${x.cost}`;

    dialog.showModal();

    const closeBtn = document.querySelector("#closeModal");
    closeBtn.addEventListener("click", () => {
        dialog.close();
    })

} 



fetchMemberLevelData();
initNav();
setFooterInfo();

