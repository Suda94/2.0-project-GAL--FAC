const button = document.querySelector('.description-button');
const description = document.querySelector('.desc-more');

button.addEventListener('click', () => {
    description.classList.toggle('desc-more');