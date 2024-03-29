const loginButton = document.getElementById('loginButton');
const backButton = document.getElementById('backButton');
const backButton2 = document.getElementById ('backButton2')
const moreinfo = document.getElementById ('moreinfo')
// تحديد العناصر
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById ('section3')






// إضافة مستمع لحدث النقر على زر "Login"
loginButton.addEventListener('click', function() {
    section1.style.opacity = '0'; // تخفيض شفافية العنصر الأول
    setTimeout(function() {
        section1.style.display = 'none'; // إخفاء العنصر الأول بعد التخفيض
        section2.style.display = 'block'; // عرض العنصر الثاني
        setTimeout(function() {
            section2.style.opacity = '1'; // تعزيز شفافية العنصر الثاني
        }, 500); // تأخير 500 مللي ثانية
    }, 500); // تأخير 500 مللي ثانية
});

// إضافة مستمع لحدث النقر على زر "Back"
backButton.addEventListener('click', function() {
    section2.style.opacity = '0'; // تخفيض شفافية العنصر الثاني
    setTimeout(function() {
        section2.style.display = 'none'; // إخفاء العنصر الثاني بعد التخفيض
        section1.style.display = 'block'; // عرض العنصر الأول
        setTimeout(function() {
            section1.style.opacity = '1'; // تعزيز شفافية العنصر الأول
        }, 500); // تأخير 500 مللي ثانية
    }, 500); // تأخير 500 مللي ثانية
});



moreinfo.addEventListener ('click',function (){
    section3.style.opacity = '0'
    setTimeout (function(){
        section2.style.display = 'none'
        section3.style.display ='block'
        setTimeout (function(){
            section3.style.opacity = '1'
        },500);
    },500)
})




backButton2.addEventListener('click', function() {
    section3.style.opacity = '0';
    setTimeout(function() {
        section3.style.display = 'none';
        section1.style.display = 'block';
        setTimeout(function() {
            section1.style.opacity = '1';
        }, 500);
    }, 500);
});


document.addEventListener("DOMContentLoaded", function() {
    const section1 = document.getElementById('section1');
    section1.classList.add('visible');
});

/* Get out, you code thief */
