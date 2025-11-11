
const translations = {
    en: {
        title: "For My Beloved Rahma",
        message1: "On this special day, I just wanted to say I love you, my most precious one.",
        message2: "I love you, the most beautiful girl in this whole world  💖",
        message3: "Love You Ya Kokyyyyy  😘",
        languageText: "عربي"
    },
    ar: {
        title: "لحبيبتي رحمة",
        message1: "في هذا اليوم الخاص، أردت فقط أن أقول لك أني أحبك يا أغلى ما أملك.",
        message2: "أحبك، أجمل فتاة في هذا العالم كله 💖",
        message3: "بحبك يا كوكي  😘",
        languageText: "English"
    }
};

document.addEventListener('DOMContentLoaded', function() {
// Create floating hearts
    function createHearts() {
        const heartsContainer = document.getElementById('heartsContainer');
        const heartCount = 15;
        
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.classList.add('heart');
            
            // Random position and animation duration
            const leftPos = Math.random() * 100;
            const animDuration = 5 + Math.random() * 10;
            const animDelay = Math.random() * 5;
            const size = 0.5 + Math.random();
            
            heart.style.left = `${leftPos}%`;
            heart.style.animationDuration = `${animDuration}s`;
            heart.style.animationDelay = `${animDelay}s`;
            heart.style.fontSize = `${size}rem`;
            heart.style.opacity = 0.3 + Math.random() * 0.7;
            
            heartsContainer.appendChild(heart);
        }
    }
    
    // Music toggle functionality
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    let musicPlaying = false;
    
    musicToggle.addEventListener('click', function() {
        if (musicPlaying) {
            bgMusic.pause();
            musicToggle.innerHTML = '<i data-feather="music"></i>';
            feather.replace();
        } else {
            bgMusic.play();
            musicToggle.innerHTML = '<i data-feather="pause"></i>';
            feather.replace();
        }
        musicPlaying = !musicPlaying;
    });
    // Language toggle functionality
    const languageToggle = document.getElementById('languageToggle');
    const languageText = document.getElementById('languageText');
    const titleElement = document.querySelector('h1');
    const messageElements = document.querySelectorAll('p');
    
    let currentLanguage = 'en';
    
    languageToggle.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
        updateLanguage();
    });
    
    function updateLanguage() {
        const lang = translations[currentLanguage];
        
        titleElement.textContent = lang.title;
        messageElements[0].textContent = lang.message1;
        messageElements[1].textContent = lang.message2;
        messageElements[2].innerHTML = lang.message3;
        languageText.textContent = lang.languageText;
        
        // Change text direction for Arabic
        if (currentLanguage === 'ar') {
            document.body.style.direction = 'rtl';
            titleElement.style.fontFamily = "'Dancing Script', cursive, 'Arial', sans-serif";
        } else {
            document.body.style.direction = 'ltr';
            titleElement.style.fontFamily = "'Dancing Script', cursive";
        }
    }
    
    // Initialize
    createHearts();
    feather.replace();
    updateLanguage();
    // Add RTL styles for Arabic
    const style = document.createElement('style');
    style.textContent = `
        [dir="rtl"] .text-right {
            text-align: left !important;
        }
        [dir="rtl"] .text-left {
            text-align: right !important;
        }
    `;
    document.head.appendChild(style);

    // Add more hearts periodically
setInterval(() => {
        const hearts = document.querySelectorAll('.heart');
        if (hearts.length < 30) {
            createHearts();
        }
    }, 3000);
});