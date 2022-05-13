const ratingsContainer = document.querySelector('.ratings-container');
const feedbackContainer = document.querySelector('.feedback-container');
const submitBtn = document.getElementById('submit');
let selectedFeedback = 'Satisfied';

submitBtn.addEventListener('click', (e) => {
    feedbackContainer.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank you!</strong>
        <br>
        <strong>Feedback: ${selectedFeedback}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
    `;
})

ratingsContainer.addEventListener('click', (e) => {
    if (!e.target.classList.contains('ratings-container')) {
        const rating = getRatingElement(e.target);
        removeActiveRating();
        rating.classList.add('active');
        selectedFeedback = rating.innerText;
    }
});

function removeActiveRating() {
    const active = ratingsContainer.querySelector('.active');
    active.classList.remove('active');
}

function getRatingElement(element) {
    if (element.classList.contains('rating')) return element;
    else return element.parentElement;
}

