function goToPage(pageName, buttonId) {
    // שומר את הכפתור שנלחץ
    sessionStorage.setItem('lastButton', buttonId);
    // מעבר לעמוד המבוקש
    window.location.href = pageName;
}

function goBack() {
    const lastPage = sessionStorage.getItem('lastPage');
    if (lastPage) {
        window.location.href = lastPage; // חזרה לעמוד האחרון שנשמר
    } else {
        window.history.back(); // fallback אם אין ערך
    }
}

let currentSubject;
let currentDevice = "phone";

function goToConfirmBinleumi(subject){

    sessionStorage.setItem("subjectChosen", subject);
    window.location.href = "binleumiConfirm.html";

}

const subjectsData = {

    moneyFlowSub: {
        phone: "נכנסים לאפליקציה\nלוחצים על- תפריט\nלוחצים על- התכתבות על הבנק\nלוחצים על- דוחות,אישורים ודפי חשבון\nלוחצים על- דפי חשבון",
        computer: "נכנסים לאתר\nלוחצים על- תנועות עו\"ש\nלוחצים על- להפיק דוח\nלוחצים על- להפיק מסמך"
    },

    accountSub: {
        phone: "נכנסים לאפליקציה\nלוחצים על- דוחות ואישורים\nלוחצים על- דוח ניהול חשבון\nמייצאים כקובץ",
        computer: "נכנסים לאתר\nלוחצים על- דוחות ואישורים\nלוחצים על- דוח ניהול חשבון\nמייצאים כקובץ"
    },

    moneyLeftSub: {
        phone: "נכנסים לאפליקציה\nלוחצים על- תפריט\nלוחצים על- התכתבות עם הבנק\nלוחצים על- דוחות, אישורים ודפי חשבון\nלוחצים על- אישור יתרה",
        computer: "נכנסים לאתר\nלוחצים על- דוחות ואישורים\nלוחצים על- דוח אישורי יתרה"
    },

    creditSub: {
        phone: "נכנסים לאתר דרך האינטרנט\nלוחצים על שלושת הנקודות\nלוחצים על- לגרסה במחשב\nלוחצים על- כרטיסי חיובים\nלוחצים על- פירוט חיובים\nמייצאים כקובץ",
        computer: "נכנסים לאתר\nלוחצים על- כרטיסי חיובים\nלוחצים על- פירוט חיובים\nמייצאים כקובץ"
    }

};

window.addEventListener("pageshow", ()=>{

    const textBox = document.getElementById("textContent");
    if(!textBox) return;

    currentSubject = sessionStorage.getItem("subjectChosen");

    const title = document.getElementById("titleImg");

    if(title){
        title.src = `assets/titles/${currentSubject}.png`;
    }

    const phoneButtonB = document.getElementById("phoneBtn");
    const computerButtonB = document.getElementById("computerBtn");

    if(phoneButtonB && computerButtonB){

        phoneButtonB.onclick = ()=>{

            currentDevice = "phone";

            phoneButtonB.src = "assets/elements/phoneClicked.png";
            computerButtonB.src = "assets/elements/computer.png";

            updateBankText();
        };

        computerButtonB.onclick = ()=>{

            currentDevice = "computer";

            computerButtonB.src = "assets/elements/computerClicked.png";
            phoneButtonB.src = "assets/elements/phone.png";

            updateBankText();
        };
    }

function updateBankText(){

    const textBox = document.getElementById("textContent");

    textBox.innerText =
    subjectsData[currentSubject][currentDevice];

}
    updateBankText();

});

function updateBankText(){

    const textBox = document.getElementById("textContent");

    textBox.innerText =
    subjectsData[currentSubject][currentDevice];

}