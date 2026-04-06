document.addEventListener("DOMContentLoaded", () => {

const texts = [
    "תש הטאץ הינה מערכת שמטרתה להנגיש לחייל את כלל המידע הדרוש לו ואת זכויותיו. בנוסף, החייל יוכל ליות בבקרה אחר תהליכים הפתוחים איתו במשרד תש. המערכת נמצאת בפלטפורמת צ 360 אליה ניתן להיכנס מהנייד / מהמחשב.",
    "1)מידע נרחב על בקשות: לחייל מופיע כלל המידע עבור בקשות שונות ( קריטריונים להגשת הבקשה, מסמכים נדרשים, גורמים הבוחנים את הבקשה וכו) ",
    "2) הנגשת עולם התש: צפייה בבקשות מאושרות, בקשות בתהליך, סטאטוס טיפול בבקשות וכו.",
    "3) פירוט על מסמכים והעלאתם למערכת: ישנן דוגמאות למסמכים השונים אשר חייל נדרש להביא לסל התש, סרטונים המראים לחייל איך ניתן להוציא את האישורים מאפליקציות הבנקים השונות וכו. החייל יכול לצפותבהסברים ולהעלות את המסמכים הנדרשיםעבור כל בקשה הנפתחת עבורו." ,
    "4) התראות לחייל בכל שינוי: התראה לחייל כאשר הבקשה מגיעה ליום ה30, התראה במידה וסטטוס הבקשה השתנה- אושר/ נדחה/ נסגר עקב חוסר שיתוף פעולה.",
    "5) קבלת מסמכים מאוחדים: הממשקות למערכת 'אנשים' של כלל המסמכים שהחייל מעלה לכל פעילות כמסמך PDF אחד מאוחד." ,
    "6) תהליך פתיחת בקשה: תהליך מלא לפתיחת בקשה והעלאת מסמכים עבור בקשות להיתרעבודה פרטית, סיוע כלכלי (כולל מוצרי אלח), הקלות בתנאי שירות, לינת בית ומיוחדת.",
    "7) שאלון התאמה לבקשות: במידה והחייל אינו יודע מה היא הבקשה המתאימה עבורו למצוקה הקיימ, הוא יכול למלא שאלון קצר. שאלון זה יועבר למשק הרלוונטיוכך ידעו לזמן את החייל לראיון קצר ולהחליט עמו אילו בקשות יפתחו עבורו."
];

let currentIndex = 0;
const textElement = document.querySelector(".textS");

// טעינה ראשונית
textElement.innerText = texts[currentIndex];

// ======================
// 📱 מובייל (swipe)
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
// 🖱️ דסקטופ (קליק לפי מיקום)
// ======================
textElement.addEventListener("click", (e) => {
    const rect = textElement.getBoundingClientRect();
    const clickY = e.clientY - rect.top;

    // חצי עליון → אחורה
    if (clickY < rect.height / 2) {
        goPrev();
    } 
    // חצי תחתון → קדימה
    else {
        goNext();
    }
});

// ======================
// 🔥 swipe logic (מובייל)
// ======================
function handleSwipe() {
    const diff = startY - endY;

    if (Math.abs(diff) < 50) return;

    if (diff > 0) {
        // גרירה למעלה → אחורה
        goPrev();
    } else {
        // גרירה למטה → קדימה
        goNext();
    }
}

// ======================
// ➡️ קדימה
// ======================
function goNext() {
    currentIndex = Math.min(currentIndex + 1, texts.length - 1);
    updateText();
}

// ======================
// ⬅️ אחורה
// ======================
function goPrev() {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateText();
}

// ======================
// 🔄 עדכון טקסט
// ======================
function updateText() {
    textElement.style.opacity = 0;

    setTimeout(() => {
        textElement.innerText = texts[currentIndex];
        textElement.style.opacity = 1;
    }, 150);
}

});