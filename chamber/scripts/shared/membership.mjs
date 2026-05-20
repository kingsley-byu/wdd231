export function getMembershipLabel(level) {
    if (level === 1) return `Membership Level: <span style="color: blue;">Member</span>`;
    if (level === 2) return `Membership Level: <span style="color: red;">Silver</span>`;
    if (level === 3) return `Membership Level: <span style="color: gold;">Gold</span>`;
    return `Membership Level: Unknown`;
}