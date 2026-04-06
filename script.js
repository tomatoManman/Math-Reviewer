// --- 1. QUIZ LOGIC ---
function checkAnswer(clickedButton, isCorrect) {
    const questionContainer = clickedButton.closest('.question');
    const feedbackText = questionContainer.querySelector('.feedback');
    const allButtons = questionContainer.querySelectorAll('button');

    allButtons.forEach(button => {
        button.disabled = true;
        if (button.getAttribute('onclick').includes('true')) {
            button.classList.add('correct-btn');
        }
    });

    if (isCorrect) {
        feedbackText.textContent = "✅ Correct! Great job.";
        feedbackText.style.color = "#27ae60";
    } else {
        clickedButton.classList.add('incorrect-btn');
        feedbackText.textContent = "❌ Incorrect. Review the rules above.";
        feedbackText.style.color = "#e74c3c";
    }
}

// --- 2. DARK MODE LOGIC ---
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check local storage for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    updateButtonText(savedTheme);
}

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonText(newTheme);
});

function updateButtonText(theme) {
    themeToggleBtn.textContent = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
}