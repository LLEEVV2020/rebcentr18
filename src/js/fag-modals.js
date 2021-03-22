;(function () {
    
    if (document.querySelector('.questions')) {
        const questions = document.querySelectorAll('.questions ul li');
        const body = document.getElementsByTagName('body')[0];
        let modal = '';
        let div = document.createElement('div');
            div.classList.add('current-modal');

        questions.forEach(question => {
            question.addEventListener('click', () => {
                let title = question.children[0].textContent;
                let html = question.children[2].outerHTML;
                simpleModalCreate(title, html);
            });
        });

        function simpleModalCreate(title, html) {
            modal += `
                <div class="overlay overlay--active">
                    <div class="questions__close"></div>
                    <div class="questions-modal">
                        <h4>${title}</h4>
                        ${html}
                    </div>
                 </div>
            `;
            div.innerHTML = modal;
            body.appendChild(div);
            body.classList.add('oh');
        }

        function closeModal() {
            modal = '';
            div.innerHTML = modal;
            body.removeChild(div);
            body.classList.remove('oh')
        }
    
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('questions__close')) {
                document.querySelector('.questions-modal').classList.add('questions-modal--close');
                setTimeout(() => {
                    closeModal();
                }, 400);
            }

            if (e.target.closest('.questions-modal') && !e.target.closest('.questions__close')) {
                e.stopPropagation();
            } else if (e.target.closest('.overlay')) {
                document.querySelector('.questions-modal').classList.add('questions-modal--close');
                setTimeout(() => {
                    closeModal();
                }, 400);
            }
        });
    }
    
})();