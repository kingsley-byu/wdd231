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



function levelCards(levels) {
    levels.forEach((level) => {
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        h2.textContent = level.title
        p.textContent = "Learn more"
        


        membershipCard.appendChild(h2);
        membershipCard.appendChild(p);
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

p.addEventListener("click", (event) => {
    const clickedCard = event.target;
    const joinInfo = clickedCard.textContent;

    const selectedLevel = data.find(level => `${level.title} ${level.id}` === joinInfo );
    if (selectedLevel) {
        dialogBox(selectedLevel);
    }
});




fetchMemberLevelData();
initNav();
setFooterInfo();