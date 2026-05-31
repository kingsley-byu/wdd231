export function getMembershipLabel(level) {
    if (level === 1) return `Membership Level: <span style="color: blue;">Member</span>`;
    if (level === 2) return `Membership Level: <span style="color: red;">Silver</span>`;
    if (level === 3) return `Membership Level: <span style="color: gold;">Gold</span>`;
    return `Membership Level: Unknown`;
}



 export async function getEvent() {
    try {
        const response = await fetch('data/members.json');

        if (!response.ok) {
            throw Error(await response.text());
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

