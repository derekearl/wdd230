let date = new Date();
let year = date.getFullYear();

doccument.querrySelector ('h1').innerHTML = '&copy' + year;

let currentdate = document.lastModified;

document.querySelector('div').textContent = `Last Updated: ${currentdate}`;

