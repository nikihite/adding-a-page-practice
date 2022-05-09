const params = new URLSearchParams(window.location.search);

const nameElem = document.getElementById('name');

nameElem.textContent = params.get('name');