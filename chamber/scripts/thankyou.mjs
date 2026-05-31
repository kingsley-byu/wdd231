import { initNav } from './shared/nav.mjs';
import { setFooterInfo } from './shared/footer.mjs';

const formDetails = new URLSearchParams(window.location.search);

// FIXED (dot removed)
document.querySelector("#results").innerHTML = `
<h3>Thank you ${formDetails.get('firstName')} ${formDetails.get('lastName')} for filling out the form</h3>
<p> Below is the information you entered</p>
<p><strong>First Name</strong>: ${formDetails.get('firstName')}</p>
<p><strong>Last Name</strong>:${formDetails.get('lastName')}
<p><strong>Organization Title</strong>:${formDetails.get('organizationTitle')}
<p><strong>Email</strong>:${formDetails.get('email')}
<p><strong>Phone Number</strong>:${formDetails.get('phone')}
<p><strong>Organization Name</strong>:${formDetails.get('organizationName')}
<p><strong>Membership Level</strong>:${formDetails.get('membershipLevel')}`;
