import { initNav } from './shared/nav.mjs';
import { setFooterInfo } from './shared/footer.mjs';

import { getEvent } from './shared/membership.mjs';
async function fetchMemberLevelData() {
    const data = await getEvent();
    console.table(data.memberLevels)
    levelCards(data.memberLevels);
}


const membershipCard = document.querySelector("#membership-card")
function levelCards(levels) {
    levels.forEach((level) => {
        let h2 = document.createElement("h2");
        h2.innerHTML = `<h2>Non `


        membershipCard.appendChild(h2);
    })
}


fetchMemberLevelData();
initNav();
setFooterInfo();