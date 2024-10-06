
function showApps() {
    document.getElementById('apps').classList.remove('hidden');
    document.getElementById('social').classList.add('hidden');
    setActiveTab('app');
}

function showSocialLinks() {
    document.getElementById('social').classList.remove('hidden');
    document.getElementById('apps').classList.add('hidden');
    setActiveTab('social');
}


function setActiveTab(tab) {
    const tabs = document.querySelectorAll('.nav-link');
    tabs.forEach(t => {
        t.classList.remove('active');
    });
    if (tab === 'app') {
        tabs[0].classList.add('active');
    } else {
        tabs[1].classList.add('active');
    }
}


document.getElementById('app1').addEventListener('click', () => {
    window.open('https://www.mediafire.com/file/hnwuftnughx8yi1/MeDoAnDrOiD_-_Gemini-Ai_1.1.apk', '_blank');
    animateButton('app1');
});

document.getElementById('app2').addEventListener('click', () => {
    window.open('https://www.amazon.com/dp/B0BRWRD5VN/ref=apps_sf_sta', '_blank');
    animateButton('app2');
});

document.getElementById('app3').addEventListener('click', () => {
    window.open('https://t.me/DevMeDoAnDrOiD/2620', '_blank');
    animateButton('app3');
});

document.getElementById('facebook').addEventListener('click', () => {
    window.open('https://www.facebook.com/DevMeDoAnDrOiD?mibextid=ZbWKwL', '_blank');
    animateButton('facebook');
});

document.getElementById('telegram').addEventListener('click', () => {
    window.open('https://t.me/MeDoAnDrOiD/', '_blank');
    animateButton('telegram');
});

document.getElementById('instagram').addEventListener('click', () => {
    window.open('https://www.instagram.com/devmedoandroid', '_blank');
    animateButton('instagram');
});


function animateButton(buttonId) {
    const button = document.getElementById(buttonId);
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 150);
}
