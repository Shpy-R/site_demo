
const info = navigator.userAgent;
localStorage.setItem('userSystem', info);

const footerDisplay = document.getElementById('system-display');
if (footerDisplay) {
    footerDisplay.textContent = "Системні дані: " + localStorage.getItem('userSystem');
}

const btn = document.getElementById('load-comments');
const container = document.getElementById('comments-container');


if (btn) {
    btn.addEventListener('click', () => {
        container.innerHTML = 'Завантаження...';

        fetch(`https://jsonplaceholder.typicode.com/posts/24/comments`)
            .then(response => response.json())
            .then(comments => {
                container.innerHTML = '';
                comments.forEach(comment => {
                    const commentDiv = document.createElement('div');
                    commentDiv.className = "comment-box"; 
                    commentDiv.innerHTML = `
                        <strong>${comment.name}</strong> (${comment.email})
                        <p>${comment.body}</p>
                    `;
                    container.appendChild(commentDiv);
                });
            })
            .catch(err => {
                container.innerHTML = 'Помилка: ' + err.message;
            });
    });
}

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function applyAutoTheme() {
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
        body.classList.remove('dark-mode');
        console.log("Встановлено денну тему (автоматично)");
    } else {
        body.classList.add('dark-mode');
        console.log("Встановлено нічну тему (автоматично)");
    }
}

applyAutoTheme();

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        const isDark = body.classList.contains('dark-mode');
        localStorage.setItem('manualTheme', isDark ? 'dark' : 'light');
    });
}

setTimeout(function() {
    const modal = document.getElementById('modal-overlay');
    
    if (!sessionStorage.getItem('form-closed')) {
        modal.classList.remove('modal-hidden');
    }
}, 1000);

document.getElementById('close-modal').addEventListener('click', function() {
    const modal = document.getElementById('modal-overlay');
    modal.classList.add('modal-hidden');
    
    sessionStorage.setItem('form-closed', 'true');
});

window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal-overlay');
    if (event.target === modal) {
        modal.classList.add('modal-hidden');
        sessionStorage.setItem('form-closed', 'true');
    }
});