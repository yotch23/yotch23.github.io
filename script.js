// --- Таймер обратного отсчета (Начало: 16 января 2026, 18:00 МСК) ---
// Используем явное указание часового пояса (GMT+03:00) для Московского времени
const weddingDate = new Date('January 16, 2026 17:40:00 GMT+03:00').getTime(); 

let timerInterval;

function updateTimer() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
        clearInterval(timerInterval);
        document.getElementById("countdown").innerHTML = "День Свадьбы!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Формируем HTML для таймера
    document.getElementById("countdown").innerHTML = `
        <div class="timer-box"><span class="timer-val">${days}</span><span class="timer-label">Дней</span></div>
        <div class="timer-box"><span class="timer-val">${hours}</span><span class="timer-label">Часов</span></div>
        <div class="timer-box"><span class="timer-val">${minutes}</span><span class="timer-label">Минут</span></div>
        <div class="timer-box"><span class="timer-val">${seconds}</span><span class="timer-label">Секунд</span></div>
    `;
}

// Запускаем таймер один раз, затем устанавливаем интервал
updateTimer(); // Для мгновенного отображения при загрузке
timerInterval = setInterval(updateTimer, 1000);

// --- Анимация появления при скролле ---
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(section => {
        observer.observe(section);
    });
});