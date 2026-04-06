document.addEventListener("DOMContentLoaded", () => {

const texts = [
    "1) חיילי חובה זכאים למספר חופשות מיוחדות במהלך השירות.",
    "2) חופשה מיוחדת נועדה לענות על צרכי פרט של חיילי החובה ומשפחותיהם בהתא למקרה וצורך.",
    "3) בחינת הזכאות לחופשה מיוחדת נתונה בידיי מפקד החייל, ישנן חופשות מטכליות שאינן מחייבות אישור מפקד והחייל יכול לממשן וזאת ללא שיקול דעתו של המפקד.",

];

const titleImages = [
    "assets/subsHova/s2.png",
    "assets/subsHova/s2.png",
    "assets/subsHova/s2.png",

    
];

let currentIndex = 0;

const textElement = document.querySelector(".textS");
const titleElement = document.querySelector(".titleh");

// טעינה ראשונית
updateContent();

// ======================
// 📱 מובייל
// ======================
let startY = 0;
let endY = 0;

textElement.addEventListener("touchstart", (e) => {
    startY = e.touches[0].clientY;
});

textElement.addEventListener("touchend", (e) => {
    endY = e.changedTouches[0].clientY;
    handleSwipe();
});

// ======================
// 🖱️ דסקטופ
// ======================
textElement.addEventListener("click", (e) => {
    const rect = textElement.getBoundingClientRect();
    const clickY = e.clientY - rect.top;

    if (clickY < rect.height / 2) {
        goPrev();
    } else {
        goNext();
    }
});

// ======================
// 🔥 swipe
// ======================
function handleSwipe() {
    const diff = startY - endY;

    if (Math.abs(diff) < 50) return;

    if (diff > 0) {
        goPrev();
    } else {
        goNext();
    }
}

// ======================
// ➡️ קדימה
// ======================
function goNext() {
    currentIndex = Math.min(currentIndex + 1, texts.length - 1);
    updateContent();
}

// ======================
// ⬅️ אחורה
// ======================
function goPrev() {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateContent();
}

// ======================
// 🔄 עדכון תוכן
// ======================
function updateContent() {
    textElement.style.opacity = 0;
    titleElement.style.opacity = 0;

    setTimeout(() => {
        textElement.innerText = texts[currentIndex];
        titleElement.src = titleImages[currentIndex];

        textElement.style.opacity = 1;
        titleElement.style.opacity = 1;
    }, 150);
}

});