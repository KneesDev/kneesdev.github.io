let currentSection = 0;
const sections = document.querySelectorAll('section');
const totalSections = sections.length;
let scrollDistance = 0;

function heroHeader() {
    return new Promise((resolve) => {
        const h1 = document.querySelector('#hero h1');
        const text = h1.textContent;
        h1.innerHTML = '';

        text.split('').forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.animationDelay = `${index * 20}ms`;
            h1.appendChild(span);
        });

        const totalDuration = text.length * 20;
        setTimeout(resolve, totalDuration + 500);
    });
}

function heroText() {
    const p = document.querySelector('#hero p');
    const text = p.textContent;
    p.innerHTML = '';
    p.classList.remove('opacity-0');

    text.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${index * 5}ms`;
        p.appendChild(span);
    });
}

function scrollToSection(index) {
    if (index >= 0 && index < totalSections) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
        currentSection = index;
    }
}

window.addEventListener('wheel', (event) => {
    event.preventDefault();
    scrollDistance += event.deltaY;

    if (scrollDistance >= 100) {
        if (currentSection < totalSections - 1) {
            scrollToSection(currentSection + 1);
        }
        scrollDistance = 0;
    } else if (scrollDistance <= -100) {
        if (currentSection > 0) {
            scrollToSection(currentSection - 1);
        }
        scrollDistance = 0;
    }
}, { passive: false });

document.addEventListener('DOMContentLoaded', () => {
    heroHeader().then(() => {
        heroText();
    });
});