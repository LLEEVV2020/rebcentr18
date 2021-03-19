;(function () {

    const questions = document.querySelectorAll('.questions ul li');
    const modalsWrap = document.querySelectorAll('.questions-modal-wrapper');
    const modals = document.querySelectorAll('.questions-modal');
    const close = document.querySelectorAll('.questions__close');
    const body = document.getElementsByTagName('body')[0];

    questions.forEach( (question, i) => {
        question.addEventListener('click', () => {
            modals[i].classList.add('questions-modal--open');
            modalsWrap[i].classList.add('questions-modal-wrapper--open');
            body.classList.add('oh');
        });
    });

    close.forEach( (close, i) => {
        close.addEventListener('click', () => {
            modals[i].classList.remove('questions-modal--open');
            modalsWrap[i].classList.remove('questions-modal-wrapper--open');
            body.classList.remove('oh');
        });
    });
    
})();