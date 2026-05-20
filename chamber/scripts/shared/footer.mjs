export function setFooterInfo() {
    document.querySelector('#currentyear').textContent = new Date().getFullYear();
    document.querySelector('#lastModified').textContent = `Last Modified: ${document.lastModified}`;
}