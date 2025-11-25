document.addEventListener('DOMContentLoaded', function() {
    
    // --- Логика Аккордеона (FAQ) ---
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            // Закрываем другие, если нужно (раскомментируйте след. 3 строки, если хотите, чтобы открывался только один)
            /* headers.forEach(h => {
                if (h !== header) h.classList.remove('active');
                if (h !== header) h.nextElementSibling.style.maxHeight = null;
            }); */

            header.classList.toggle('active');
            const content = header.nextElementSibling;
            
            if (header.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    // --- Обработка формы ---
    const form = document.getElementById('weddingForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Предотвращаем перезагрузку страницы
        
        // Собираем данные
        const formData = new FormData(form);
        const name = formData.get('guestName'); // Значение поля "guestName" в форме
        // Здесь можно добавить логику отправки данных на сервер или Formspree
        
        // Для статического сайта просто покажем красивое сообщение
        alert(`Спасибо, ${name}! Ваша анкета успешно отправлена. Ждем вас!`);
        
        form.reset();
    });
});