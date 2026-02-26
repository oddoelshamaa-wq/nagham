// تأثير القلوب اللي بتظهر مع حركة الماوس
document.addEventListener('mousemove', function(e) {
    if (Math.random() > 0.9) { // عشان ميطلعش قلوب كتير أوي وتزعج العين
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'floating-heart';
        
        // مكان الماوس
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        
        // حجم عشوائي
        const size = Math.random() * 20 + 10;
        heart.style.fontSize = size + 'px';
        
        document.body.appendChild(heart);
        
        // مسح القلب من الصفحة بعد ما يخلص الأنميشن
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
});

// إضافة حركة بسيطة للكارت مع الماوس (Parallax)
const card = document.querySelector('.card');
document.addEventListener('mousemove', (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 25;
    let y = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
